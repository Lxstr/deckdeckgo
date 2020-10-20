/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoMdParser {
        "editable": boolean;
    }
}
declare global {
    interface HTMLDeckgoMdParserElement extends Components.DeckgoMdParser, HTMLStencilElement {
    }
    var HTMLDeckgoMdParserElement: {
        prototype: HTMLDeckgoMdParserElement;
        new (): HTMLDeckgoMdParserElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-md-parser": HTMLDeckgoMdParserElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoMdParser {
        "editable"?: boolean;
        "onMarkdownDidChange"?: (event: CustomEvent<HTMLElement>) => void;
    }
    interface IntrinsicElements {
        "deckgo-md-parser": DeckgoMdParser;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-md-parser": LocalJSX.DeckgoMdParser & JSXBase.HTMLAttributes<HTMLDeckgoMdParserElement>;
        }
    }
}
