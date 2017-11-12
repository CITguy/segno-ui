const _tagName = 'ds-reveal';

const _template = document.createElement('template');
_template.innerHTML = `
    <style>${require('./DsReveal.less')}</style>
    ${require('./DsReveal.html')}
`;

class DsReveal extends HTMLElement {
    static get observedAttributes () {
        return ['open'];
    }

    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(_template, _tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
        // Private reference to Shadow DOM element
        this.$summary = this.shadowRoot.querySelector('#summary');
        // Fix "this" in _toggle()
        this._toggle = this._toggle.bind(this);
    }

    connectedCallback () {
        this.$summary.addEventListener('click', this._toggle);
    }

    disconnectedCallback () {
        this.$summary.removeEventListener('click', this._toggle);
    }

    attributeChangedCallback (attr, oldValue, newValue) {
        this.$summary.setAttribute('aria-expanded', Boolean(newValue));
    }

    set open (value) {
        if (Boolean(value)) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
    }

    get open () {
        return this.hasAttribute('open');
    }

    _toggle () {
        this.open = !this.open;
    }
}

module.exports = {
    define: () => {
        customElements.define(_tagName, DsReveal);
    },
    prototype: DsReveal,
    tagName: _tagName,
    template: _template
}
