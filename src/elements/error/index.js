const _tagName = 'ds-error';

const _template = document.createElement('template');
_template.innerHTML = `${require('./DsError.html')}`;

class DsError extends HTMLElement {
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
        customElements.define(_tagName, DsError);
    },
    prototype: DsError,
    tagName: _tagName,
    template: _template
};
