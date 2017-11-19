const DsElement = require('../DsElement');
const _tagName = 'ds-tabpanel';
const _template = document.createElement('template');

_template.innerHTML = `
    <style>${require('./DsTabpanel.less')}</style>
    <slot></slot>
`;

module.exports = class DsTabpanel extends DsElement {
    static $define () {
        customElements.define(_tagName, this);
    }

    constructor () {
        super(_tagName, _template);
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.$setAttribute('role', 'tabpanel');
        // initialize
        this.setAttribute('aria-expanded', this.open);
    }

    static get observedAttributes () {
        return ['open'];
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        let hasValue = (newVal !== null);
        this.setAttribute('aria-expanded', hasValue);
        this.setAttribute('tabindex', hasValue ? 0 : -1);
    }

    get open () {
        return this.hasAttribute('open');
    }

    set open (val) {
        if (val) {
            this.setAttribute('open', true);
        } else {
            this.removeAttribute('open');
        }
    }
};
