{-# LANGUAGE DataKinds #-}
{-# LANGUAGE MonadFailDesugaring #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TypeOperators #-}

import qualified API
import Control.Concurrent.MVar
import Network.Wai (Application)
import qualified Network.Socket as Socket
import Data.Aeson ((.:))
import qualified Data.Vault.Lazy as Vault
import qualified Data.IP as IP
import Data.Bifunctor
import qualified Data.CaseInsensitive as CI
import qualified Data.Aeson as Aeson
import qualified Data.HashMap.Strict as HMap
import Text.Read (readMaybe)
import qualified Data.Aeson.Parser as Aeson
import qualified Data.Aeson.Parser.Internal as Aeson
import qualified Data.Aeson.Types as Aeson
import qualified Data.ByteString as BS
import qualified Data.ByteString.Lazy as BL
import qualified Data.Text as T
import qualified Data.Text.Encoding as T
import qualified Network.Wai as Wai
import qualified Network.Wai.Internal as Wai
import qualified Network.HTTP.Types as H
import qualified Servant as Servant
import System.IO.Unsafe

main :: IO ()
main = run $ Servant.serve API.api server

server :: Servant.Server API.API
server = pure []

-- https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-api-gateway-request
-- https://www.stackage.org/haddock/lts-13.10/wai-3.2.2/src/Network.Wai.Internal.html#Request
decodeRequest :: BS.ByteString -> Maybe Wai.Request
decodeRequest = Aeson.decodeStrictWith Aeson.jsonEOF parseRequest

parseRequest :: Aeson.Value -> Aeson.Result Wai.Request
parseRequest = Aeson.parse $ Aeson.withObject "request" $ \obj -> do

    -- "httpMethod": "GET"
    requestMethod <- obj .: "httpMethod" >>=
      Aeson.withText "requestMethod" (pure . T.encodeUtf8)

    -- We don't get data about the version, just assume
    httpVersion <- pure H.http11

    -- "queryStringParameters": {
    --    "name": "me"
    --  },
    queryParams <- obj .: "queryStringParameters" >>=
      Aeson.withObject "queryParams" (
        fmap
          (fmap (first T.encodeUtf8) . HMap.toList ) .
          traverse (Aeson.withText "queryParam" (pure . T.encodeUtf8))
      )

    rawQueryString <- pure $ H.renderSimpleQuery True queryParams

    -- "path": "/test/hello",
    path <- obj .: "path" >>=
      Aeson.withText "path" (pure . T.encodeUtf8)

    rawPathInfo <- pure $ path <> rawQueryString

    --  "headers": {
    --    "Accept": "text/html,application/xhtml+xml,...",
    --    ...
    --    "X-Forwarded-Proto": "https"
    --  },
    requestHeaders <- obj .: "headers" >>=
      Aeson.withObject "headers" (
        fmap
          (fmap (first (CI.mk . T.encodeUtf8)) . HMap.toList) .
          traverse (Aeson.withText "header" (pure . T.encodeUtf8))
      )

    isSecure <- pure $ case lookup "X-Forwarded-Proto" requestHeaders of
      Just "https" -> True
      _ -> False


    --  "requestContext": {
    --    ...
    --    "identity": {
    --      ...
    --      "sourceIp": "192.168.100.1",
    --    },
    --    ...
    --  },
    remoteHost <- obj .: "requestContext" >>=
      Aeson.withObject "requestContext" (\obj' ->
        obj' .: "identity" >>=
          Aeson.withObject "identity" (\idt -> do
              sourceIp <- case HMap.lookup "sourceIp" idt of
                Nothing -> fail "no sourceIp"
                Just (Aeson.String x) -> pure $ T.unpack x
                Just _ -> fail "bad type for sourceIp"
              ip <- case readMaybe sourceIp of
                Just ip -> pure ip
                Nothing -> fail "cannot parse sourceIp"

              pure $ case ip of
                IP.IPv4 ip4 ->
                  Socket.SockAddrInet
                    0 -- default port
                    (IP.toHostAddress ip4)
                IP.IPv6 ip6 ->
                  Socket.SockAddrInet6
                    0 -- default port
                    0 -- flow info
                    (IP.toHostAddress6 ip6)
                    0 -- scope id
          )
      )

    pathInfo <- pure $ H.decodePathSegments path
    queryString <- pure $ H.parseQuery rawQueryString

    requestBodyRaw <- obj .: "body" >>=
      Aeson.withText "body" (pure . T.encodeUtf8)
    (requestBody, requestBodyLength) <- pure
      ( pure requestBodyRaw
      , Wai.KnownLength $ fromIntegral $ BS.length requestBodyRaw)

    vault <- pure $ Vault.insert originalRequestKey obj Vault.empty

    requestHeaderHost <- pure $ lookup "host" requestHeaders
    requestHeaderRange <- pure $ lookup "range" requestHeaders
    requestHeaderReferer <- pure $ lookup "referer" requestHeaders
    requestHeaderUserAgent <- pure $ lookup "User-Agent" requestHeaders

    pure $ Wai.Request {..}


originalRequestKey :: Vault.Key Aeson.Object
originalRequestKey = unsafePerformIO Vault.newKey
{-# NOINLINE originalRequestKey #-}

-- https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-api-gateway-response
encodeResponse :: Wai.Response -> BS.ByteString
encodeResponse _ = BL.toStrict $ Aeson.encode $
    Aeson.object
      [ ("statusCode", "200")
      , ("headers", Aeson.object
          [ ("Content-Type", "text/html; charset=utf-8") ]
        )
      , ("body", "<h1>Hello from Servant!</h1>")
      ]

run :: Application -> IO ()
run app = let loop = pure () in -- fix $ \loop ->
    BS.getLine >>= \bs ->
      if BS.null bs
      then pure ()
      else case decodeRequest bs of
        Nothing -> pure () -- woopsies!
        Just req -> do
          mvar <- newEmptyMVar
          Wai.ResponseReceived <- app req $ \resp -> do
            putMVar mvar resp
            pure Wai.ResponseReceived
          resp <- takeMVar mvar
          BS.putStr (encodeResponse resp)
          loop
