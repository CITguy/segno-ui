const _tagName = 'ds-inline-error';

const _template = document.createElement('template');
_template.innerHTML = `${require('./DsInlineError.html')}`;

class DsInlineError extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(_template, _tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }
}

module.exports = {
    define: () => {
        customElements.define(_tagName, DsInlineError);
    },
    prototype: DsInlineError,
    tagName: _tagName,
    template: _template
};
