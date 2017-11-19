const DsElement = require('../DsElement');

module.exports = class DsTab extends DsElement {
    static get is () {
        return 'ds-tab';
    }

    static $define () {
        customElements.define(this.is, this);
    }

    connectedCallback () {
        this.$upgradeProperty('current');
        this.$setAttribute('role', 'tab');
        // use vanilla setAttribute here
        this.setAttribute('aria-selected', this.current);
    }

    static get observedAttributes () {
        return ['current'];
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        this.setAttribute('aria-selected', newVal !== null);
    }

    get current () {
        return this.hasAttribute('current');
    }

    set current (newVal) {
        if (newVal) {
            this.setAttribute('current', true);
        } else {
            this.removeAttribute('current');
        }
    }
};
