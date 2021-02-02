import {FieldValue} from 'firebase/firestore';

import {UserSocial} from './user';

export interface DeckDeployData {
  status: 'scheduled' | 'failure' | 'successful';
  updated_at;
}

export interface DeckDeploy {
  github?: DeckDeployData;
  api?: DeckDeployData;
}

export interface DeckGitHubRepo {
  id: string;
  url: string;
  name: string;
  nameWithOwner: string;
}

export interface DeckGitHub {
  repo?: DeckGitHubRepo;
  publish: boolean;
}

export interface DeckMetaAuthor {
  name: string;
  photo_url?: string;
  social?: UserSocial | FieldValue;
}

export interface DeckMeta {
  title: string;

  description?: string | FieldValue;
  tags?: string[] | FieldValue;

  pathname?: string;

  author?: DeckMetaAuthor | FieldValue;

  published?: boolean;
  published_at?;

  feed?: boolean;

  updated_at;
}

export interface DeckAttributes {
  style?: string;
  animation?: 'slide' | 'fade' | 'none';
  direction?: 'horizontal' | 'vertical' | 'papyrus';
  directionMobile?: 'horizontal' | 'vertical' | 'papyrus';
  autoSlide?: boolean;
}

export interface DeckClone {
  deck_id_from?: string;
  deck_id_to?: string;
}

export interface DeckData {
  name: string;

  attributes?: DeckAttributes;
  background?: string;
  header?: string;
  footer?: string;

  owner_id: string;

  slides?: string[];

  api_id?: string;

  meta?: DeckMeta;

  deploy?: DeckDeploy;

  github?: DeckGitHub;

  clone?: DeckClone;

  created_at?;
  updated_at?;
}

export interface Deck {
  id: string;
  data: DeckData;
}
