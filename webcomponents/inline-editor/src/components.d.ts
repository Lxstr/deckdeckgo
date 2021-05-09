/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ContentAlign, ContentList, FontSize, ToolbarActions } from "./types/enums";
import { DeckdeckgoPalette } from "@deckdeckgo/color";
import { AnchorLink, ExecCommandAction, InlineAction } from "./interfaces/interfaces";
import { ExecCommandAction as ExecCommandAction1 } from ".";
import { EventEmitter } from "@stencil/core";
export namespace Components {
    interface DeckgoIeActionButton {
        "cssClass": string;
        "disableAction": boolean;
        "mobile": boolean;
    }
    interface DeckgoIeActionImage {
        "cssClass": string;
    }
    interface DeckgoIeAlignActions {
        "anchorEvent": MouseEvent | TouchEvent;
        "command": 'native' | 'custom';
        "containers": string;
        "contentAlign": ContentAlign;
        "mobile": boolean;
        "sticky": boolean;
    }
    interface DeckgoIeColorActions {
        "action": 'color' | 'background-color';
        "containers": string;
        "mobile": boolean;
        "palette": DeckdeckgoPalette[];
    }
    interface DeckgoIeFontSizeActions {
        "fontSize": FontSize;
        "mobile": boolean;
        "sticky": boolean;
    }
    interface DeckgoIeImageActions {
        "anchorEvent": MouseEvent | TouchEvent;
        "containers": string;
        "imgAnchor": string;
        "imgDidChange": EventEmitter<HTMLElement>;
        "imgPropertyCssFloat": string;
        "imgPropertyWidth": string;
        "mobile": boolean;
    }
    interface DeckgoIeLinkActions {
        "anchorLink": AnchorLink;
        "containers": string;
        "linkCreated": EventEmitter<HTMLElement>;
        "mobile": boolean;
        "toolbarActions": ToolbarActions;
    }
    interface DeckgoIeListActions {
        "contentList": ContentList;
        "disabledTitle": boolean;
        "mobile": boolean;
        "sticky": boolean;
    }
    interface DeckgoIeSeparator {
        "mobile": boolean;
    }
    interface DeckgoIeStyleActions {
        "bold": boolean;
        "disabledTitle": boolean;
        "italic": boolean;
        "mobile": boolean;
        "strikethrough": boolean;
        "underline": boolean;
    }
    interface DeckgoIeTriangle {
        "mobile": boolean;
    }
    interface DeckgoInlineEditor {
        /**
          * Actions to manipulat
         */
        "align": boolean;
        /**
          * Could be use to attach the inline editor event listeners (mousedown, touchstart and keydown) to a specific element instead of the document
         */
        "attachTo": HTMLElement;
        /**
          * To hide the option to select a background-color
         */
        "backgroundColor": boolean;
        /**
          * Use `document.execCommand` (= "native") to modify the document or, alternatively use the `custom` implementation
         */
        "command": 'native' | 'custom';
        /**
          * A comma separated list of containers where the inline editor should/could be use. Used in order to allow the component to detect some information like the current style or color
         */
        "containers": string;
        /**
          * You might to display and add further actions to the component ? Use this property to provide a comma separated list of actions
         */
        "customActions": string;
        "displayTools": (selection?: Selection) => Promise<void>;
        /**
          * Actions to modify the selection font-size enabled?
         */
        "fontSize": boolean;
        /**
          * Handle the selection change "manually". See chapter "Usage within shadow dom"
         */
        "handleGlobalEvents": boolean;
        /**
          * The type of element to attach the image toolbar
         */
        "imgAnchor": string;
        /**
          * Per default, the component will not consider images as editable. Turn this option to true to activate the edition of images
         */
        "imgEditable": boolean;
        /**
          * In case you would like to use a specific property to specify the float on your image
         */
        "imgPropertyCssFloat": string;
        /**
          * In case you would like to use a specific property to specify the width on your image
         */
        "imgPropertyWidth": string;
        /**
          * Actions to manipulate the selection as list enabled?
         */
        "list": boolean;
        /**
          * The mobile mode is automatically recognize, but just it case you would like to "force" it
         */
        "mobile": boolean;
        /**
          * In case you would like to define a custom list of colors for the palette of colors. See @deckdeckgo/color for the default list of colors
         */
        "palette": DeckdeckgoPalette[];
        /**
          * Reset the inline editor (= hide it) and optionally clear its selection.
          * @param clearSelection
          * @param blurActiveElement
         */
        "reset": (clearSelection: boolean, blurActiveElement?: boolean) => Promise<void>;
        /**
          * Use a sticky footer toolbar on desktop
         */
        "stickyDesktop": boolean;
        /**
          * Use a sticky footer toolbar on mobile. The sticky bar is positioned bottom except on iOS for which it will be positioned top
         */
        "stickyMobile": boolean;
    }
}
declare global {
    interface HTMLDeckgoIeActionButtonElement extends Components.DeckgoIeActionButton, HTMLStencilElement {
    }
    var HTMLDeckgoIeActionButtonElement: {
        prototype: HTMLDeckgoIeActionButtonElement;
        new (): HTMLDeckgoIeActionButtonElement;
    };
    interface HTMLDeckgoIeActionImageElement extends Components.DeckgoIeActionImage, HTMLStencilElement {
    }
    var HTMLDeckgoIeActionImageElement: {
        prototype: HTMLDeckgoIeActionImageElement;
        new (): HTMLDeckgoIeActionImageElement;
    };
    interface HTMLDeckgoIeAlignActionsElement extends Components.DeckgoIeAlignActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeAlignActionsElement: {
        prototype: HTMLDeckgoIeAlignActionsElement;
        new (): HTMLDeckgoIeAlignActionsElement;
    };
    interface HTMLDeckgoIeColorActionsElement extends Components.DeckgoIeColorActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeColorActionsElement: {
        prototype: HTMLDeckgoIeColorActionsElement;
        new (): HTMLDeckgoIeColorActionsElement;
    };
    interface HTMLDeckgoIeFontSizeActionsElement extends Components.DeckgoIeFontSizeActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeFontSizeActionsElement: {
        prototype: HTMLDeckgoIeFontSizeActionsElement;
        new (): HTMLDeckgoIeFontSizeActionsElement;
    };
    interface HTMLDeckgoIeImageActionsElement extends Components.DeckgoIeImageActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeImageActionsElement: {
        prototype: HTMLDeckgoIeImageActionsElement;
        new (): HTMLDeckgoIeImageActionsElement;
    };
    interface HTMLDeckgoIeLinkActionsElement extends Components.DeckgoIeLinkActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeLinkActionsElement: {
        prototype: HTMLDeckgoIeLinkActionsElement;
        new (): HTMLDeckgoIeLinkActionsElement;
    };
    interface HTMLDeckgoIeListActionsElement extends Components.DeckgoIeListActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeListActionsElement: {
        prototype: HTMLDeckgoIeListActionsElement;
        new (): HTMLDeckgoIeListActionsElement;
    };
    interface HTMLDeckgoIeSeparatorElement extends Components.DeckgoIeSeparator, HTMLStencilElement {
    }
    var HTMLDeckgoIeSeparatorElement: {
        prototype: HTMLDeckgoIeSeparatorElement;
        new (): HTMLDeckgoIeSeparatorElement;
    };
    interface HTMLDeckgoIeStyleActionsElement extends Components.DeckgoIeStyleActions, HTMLStencilElement {
    }
    var HTMLDeckgoIeStyleActionsElement: {
        prototype: HTMLDeckgoIeStyleActionsElement;
        new (): HTMLDeckgoIeStyleActionsElement;
    };
    interface HTMLDeckgoIeTriangleElement extends Components.DeckgoIeTriangle, HTMLStencilElement {
    }
    var HTMLDeckgoIeTriangleElement: {
        prototype: HTMLDeckgoIeTriangleElement;
        new (): HTMLDeckgoIeTriangleElement;
    };
    interface HTMLDeckgoInlineEditorElement extends Components.DeckgoInlineEditor, HTMLStencilElement {
    }
    var HTMLDeckgoInlineEditorElement: {
        prototype: HTMLDeckgoInlineEditorElement;
        new (): HTMLDeckgoInlineEditorElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-ie-action-button": HTMLDeckgoIeActionButtonElement;
        "deckgo-ie-action-image": HTMLDeckgoIeActionImageElement;
        "deckgo-ie-align-actions": HTMLDeckgoIeAlignActionsElement;
        "deckgo-ie-color-actions": HTMLDeckgoIeColorActionsElement;
        "deckgo-ie-font-size-actions": HTMLDeckgoIeFontSizeActionsElement;
        "deckgo-ie-image-actions": HTMLDeckgoIeImageActionsElement;
        "deckgo-ie-link-actions": HTMLDeckgoIeLinkActionsElement;
        "deckgo-ie-list-actions": HTMLDeckgoIeListActionsElement;
        "deckgo-ie-separator": HTMLDeckgoIeSeparatorElement;
        "deckgo-ie-style-actions": HTMLDeckgoIeStyleActionsElement;
        "deckgo-ie-triangle": HTMLDeckgoIeTriangleElement;
        "deckgo-inline-editor": HTMLDeckgoInlineEditorElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoIeActionButton {
        "cssClass"?: string;
        "disableAction"?: boolean;
        "mobile"?: boolean;
        "onAction"?: (event: CustomEvent<UIEvent>) => void;
    }
    interface DeckgoIeActionImage {
        "cssClass"?: string;
    }
    interface DeckgoIeAlignActions {
        "anchorEvent"?: MouseEvent | TouchEvent;
        "command"?: 'native' | 'custom';
        "containers"?: string;
        "contentAlign"?: ContentAlign;
        "mobile"?: boolean;
        "onAlignModified"?: (event: CustomEvent<any>) => void;
        "sticky"?: boolean;
    }
    interface DeckgoIeColorActions {
        "action"?: 'color' | 'background-color';
        "containers"?: string;
        "mobile"?: boolean;
        "onExecCommand"?: (event: CustomEvent<ExecCommandAction>) => void;
        "palette"?: DeckdeckgoPalette[];
    }
    interface DeckgoIeFontSizeActions {
        "fontSize"?: FontSize;
        "mobile"?: boolean;
        "onExecCommand"?: (event: CustomEvent<ExecCommandAction>) => void;
        "sticky"?: boolean;
    }
    interface DeckgoIeImageActions {
        "anchorEvent"?: MouseEvent | TouchEvent;
        "containers"?: string;
        "imgAnchor"?: string;
        "imgDidChange"?: EventEmitter<HTMLElement>;
        "imgPropertyCssFloat"?: string;
        "imgPropertyWidth"?: string;
        "mobile"?: boolean;
        "onImgModified"?: (event: CustomEvent<void>) => void;
    }
    interface DeckgoIeLinkActions {
        "anchorLink"?: AnchorLink;
        "containers"?: string;
        "linkCreated"?: EventEmitter<HTMLElement>;
        "mobile"?: boolean;
        "onLinkModified"?: (event: CustomEvent<boolean>) => void;
        "toolbarActions"?: ToolbarActions;
    }
    interface DeckgoIeListActions {
        "contentList"?: ContentList;
        "disabledTitle"?: boolean;
        "mobile"?: boolean;
        "onExecCommand"?: (event: CustomEvent<ExecCommandAction>) => void;
        "sticky"?: boolean;
    }
    interface DeckgoIeSeparator {
        "mobile"?: boolean;
    }
    interface DeckgoIeStyleActions {
        "bold"?: boolean;
        "disabledTitle"?: boolean;
        "italic"?: boolean;
        "mobile"?: boolean;
        "onExecCommand"?: (event: CustomEvent<ExecCommandAction>) => void;
        "strikethrough"?: boolean;
        "underline"?: boolean;
    }
    interface DeckgoIeTriangle {
        "mobile"?: boolean;
    }
    interface DeckgoInlineEditor {
        /**
          * Actions to manipulat
         */
        "align"?: boolean;
        /**
          * Could be use to attach the inline editor event listeners (mousedown, touchstart and keydown) to a specific element instead of the document
         */
        "attachTo"?: HTMLElement;
        /**
          * To hide the option to select a background-color
         */
        "backgroundColor"?: boolean;
        /**
          * Use `document.execCommand` (= "native") to modify the document or, alternatively use the `custom` implementation
         */
        "command"?: 'native' | 'custom';
        /**
          * A comma separated list of containers where the inline editor should/could be use. Used in order to allow the component to detect some information like the current style or color
         */
        "containers"?: string;
        /**
          * You might to display and add further actions to the component ? Use this property to provide a comma separated list of actions
         */
        "customActions"?: string;
        /**
          * Actions to modify the selection font-size enabled?
         */
        "fontSize"?: boolean;
        /**
          * Handle the selection change "manually". See chapter "Usage within shadow dom"
         */
        "handleGlobalEvents"?: boolean;
        /**
          * The type of element to attach the image toolbar
         */
        "imgAnchor"?: string;
        /**
          * Per default, the component will not consider images as editable. Turn this option to true to activate the edition of images
         */
        "imgEditable"?: boolean;
        /**
          * In case you would like to use a specific property to specify the float on your image
         */
        "imgPropertyCssFloat"?: string;
        /**
          * In case you would like to use a specific property to specify the width on your image
         */
        "imgPropertyWidth"?: string;
        /**
          * Actions to manipulate the selection as list enabled?
         */
        "list"?: boolean;
        /**
          * The mobile mode is automatically recognize, but just it case you would like to "force" it
         */
        "mobile"?: boolean;
        /**
          * Triggered when a custom action is selected. Its detail provide an action name, the Selection and an anchorLink
         */
        "onCustomAction"?: (event: CustomEvent<InlineAction>) => void;
        /**
          * Triggered when an image is manipulated. Note: the event won't provide directly the image but rather its container element
         */
        "onImgDidChange"?: (event: CustomEvent<HTMLElement>) => void;
        /**
          * Triggered when a link is created by the user. The event detail is the container
         */
        "onLinkCreated"?: (event: CustomEvent<HTMLElement>) => void;
        "onStickyToolbarActivated"?: (event: CustomEvent<boolean>) => void;
        /**
          * Triggered when the style is modified (bold, italic, color, alignment, etc.). The event detail is the container
         */
        "onStyleDidChange"?: (event: CustomEvent<HTMLElement>) => void;
        /**
          * In case you would like to define a custom list of colors for the palette of colors. See @deckdeckgo/color for the default list of colors
         */
        "palette"?: DeckdeckgoPalette[];
        /**
          * Use a sticky footer toolbar on desktop
         */
        "stickyDesktop"?: boolean;
        /**
          * Use a sticky footer toolbar on mobile. The sticky bar is positioned bottom except on iOS for which it will be positioned top
         */
        "stickyMobile"?: boolean;
    }
    interface IntrinsicElements {
        "deckgo-ie-action-button": DeckgoIeActionButton;
        "deckgo-ie-action-image": DeckgoIeActionImage;
        "deckgo-ie-align-actions": DeckgoIeAlignActions;
        "deckgo-ie-color-actions": DeckgoIeColorActions;
        "deckgo-ie-font-size-actions": DeckgoIeFontSizeActions;
        "deckgo-ie-image-actions": DeckgoIeImageActions;
        "deckgo-ie-link-actions": DeckgoIeLinkActions;
        "deckgo-ie-list-actions": DeckgoIeListActions;
        "deckgo-ie-separator": DeckgoIeSeparator;
        "deckgo-ie-style-actions": DeckgoIeStyleActions;
        "deckgo-ie-triangle": DeckgoIeTriangle;
        "deckgo-inline-editor": DeckgoInlineEditor;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-ie-action-button": LocalJSX.DeckgoIeActionButton & JSXBase.HTMLAttributes<HTMLDeckgoIeActionButtonElement>;
            "deckgo-ie-action-image": LocalJSX.DeckgoIeActionImage & JSXBase.HTMLAttributes<HTMLDeckgoIeActionImageElement>;
            "deckgo-ie-align-actions": LocalJSX.DeckgoIeAlignActions & JSXBase.HTMLAttributes<HTMLDeckgoIeAlignActionsElement>;
            "deckgo-ie-color-actions": LocalJSX.DeckgoIeColorActions & JSXBase.HTMLAttributes<HTMLDeckgoIeColorActionsElement>;
            "deckgo-ie-font-size-actions": LocalJSX.DeckgoIeFontSizeActions & JSXBase.HTMLAttributes<HTMLDeckgoIeFontSizeActionsElement>;
            "deckgo-ie-image-actions": LocalJSX.DeckgoIeImageActions & JSXBase.HTMLAttributes<HTMLDeckgoIeImageActionsElement>;
            "deckgo-ie-link-actions": LocalJSX.DeckgoIeLinkActions & JSXBase.HTMLAttributes<HTMLDeckgoIeLinkActionsElement>;
            "deckgo-ie-list-actions": LocalJSX.DeckgoIeListActions & JSXBase.HTMLAttributes<HTMLDeckgoIeListActionsElement>;
            "deckgo-ie-separator": LocalJSX.DeckgoIeSeparator & JSXBase.HTMLAttributes<HTMLDeckgoIeSeparatorElement>;
            "deckgo-ie-style-actions": LocalJSX.DeckgoIeStyleActions & JSXBase.HTMLAttributes<HTMLDeckgoIeStyleActionsElement>;
            "deckgo-ie-triangle": LocalJSX.DeckgoIeTriangle & JSXBase.HTMLAttributes<HTMLDeckgoIeTriangleElement>;
            "deckgo-inline-editor": LocalJSX.DeckgoInlineEditor & JSXBase.HTMLAttributes<HTMLDeckgoInlineEditorElement>;
        }
    }
}
