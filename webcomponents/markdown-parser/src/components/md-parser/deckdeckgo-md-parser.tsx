import { Component, h, Host, State, Element, Prop, Event, EventEmitter } from '@stencil/core';

import { Remarkable } from 'remarkable';

@Component({
  tag: 'deckgo-md-parser',
  styleUrl: 'deckdeckgo-md-parser.scss',
  shadow: true,
})
export class DeckgoMdParser {
  @Element() el: HTMLElement;

  @Prop() editable: boolean = false;

  @State()
  private editing: boolean = false;

  @Event()
  private markdownDidChange: EventEmitter<HTMLElement>;

  private containerRef!: HTMLDivElement;

  private parser = new Remarkable();

  private parseMarkdownInSlot(): Promise<void> {
    const mdContent: HTMLElement = this.el.querySelector("[slot='md-parser']");

    if (mdContent) {
      const mdText = mdContent.innerText;
      const mdContentHTML = this.parser.render(mdText);
      this.parseMarkdown(mdContentHTML);
    } else {
      return Promise.resolve();
    }
  }

  private parseMarkdown(mdContentHTML: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      if (!this.containerRef) {
        resolve();
        return;
      }

      if (!mdContentHTML || mdContentHTML === undefined || mdContentHTML === '') {
        this.containerRef.children[0].innerHTML = '';
        resolve();
        return;
      }

      try {
        this.containerRef.children[0].innerHTML = '';

        const div: HTMLElement = document.createElement('div');

        try {
          if (div.childNodes) {
            this.containerRef.children[0].innerHTML = mdContentHTML;
          }
        } catch (err) {
          this.containerRef.children[0].innerHTML = mdContentHTML;
          console.error(err);
        }

        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  private applyMarkdown = async () => {
    await this.stopEditing();
    await this.parseMarkdownInSlot();
  };

  private edit(): Promise<void> {
    return new Promise<void>(resolve => {
      if (!this.editable) {
        resolve();
        return;
      }

      this.editing = true;

      const markdownInSlot: HTMLElement = this.el.querySelector("[slot='md-parser']");

      if (markdownInSlot) {
        setTimeout(() => {
          markdownInSlot.setAttribute('contentEditable', 'true');
          markdownInSlot.addEventListener('blur', this.applyMarkdown, { once: true });
          markdownInSlot.focus();
        }, 100);
      }

      resolve();
    });
  }

  private stopEditing(): Promise<void> {
    return new Promise<void>(resolve => {
      this.editing = false;

      const markdownInSlot: HTMLElement = this.el.querySelector("[slot='md-parser']");

      if (markdownInSlot) {
        markdownInSlot.removeAttribute('contentEditable');

        if (markdownInSlot.innerHTML) {
          markdownInSlot.innerHTML = markdownInSlot.innerHTML.trim();
        }

        this.markdownDidChange.emit(this.el);
      }

      resolve();
    });
  }

  render() {
    return (
      <Host class={{ 'deckgo-markdown-edit': this.editing }}>
        <div 
          class="deckgo-markdown-container" 
          ref={el => (this.containerRef = el as HTMLInputElement)} 
          onMouseDown={() => this.edit()} 
          onTouchStart={() => this.edit()}
        >
            <div class="md-parser"></div>
            <slot name="md-parser"></slot>
        </div>
      </Host>
    );
  }
}
