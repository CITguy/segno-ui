const DsReveal = require('../reveal');

module.exports = class DsTabpanel extends DsReveal {
    static get is () {
        return 'ds-tabpanel';
    }

    static $define () {
        customElements.define(this.is, this);
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.$setAttribute('role', 'tabpanel');
        // initialize
        this.setAttribute('aria-expanded', this.open);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        let hasValue = (newVal !== null);
        this.setAttribute('aria-expanded', hasValue);
        this.setAttribute('tabindex', hasValue ? 0 : -1);
    }
};
