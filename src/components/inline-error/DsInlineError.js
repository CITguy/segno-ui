const tagName = 'ds-inline-error';

const template = document.createElement('template');
template.innerHTML = `${require('./DsInlineError.html')}`;

class DsInlineError extends HTMLElement {
    static get is() {
        return tagName;
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

module.exports = DsInlineError;
