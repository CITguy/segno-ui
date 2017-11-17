const DsElement = require('../DsElement');

const template = document.createElement('template');
template.innerHTML = `
    <style>${require('./DsReveal.less')}</style>
    ${require('./DsReveal.html')}
`;

module.exports = class DsReveal extends DsElement {
    static get is () {
        return 'ds-reveal';
    }

    static get observedAttributes () {
        return ['open'];
    }

    constructor () {
        super(template);
        // Private reference to Shadow DOM element
        this.$summary = this.shadowRoot.querySelector('#summary');
        // Fix "this" in _toggle()
        this._toggle = this._toggle.bind(this);
    }

    connectedCallback () {
        this.$upgradeProperty('open');
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
};
