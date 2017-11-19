const DsElement = require('../DsElement');

module.exports = class DsTablist extends DsElement {
    static get is () {
        return 'ds-tablist';
    }

    static $define () {
        customElements.define(this.is, this);
    }

    connectedCallback () {
        this.$setAttribute('role', 'tablist');
    }
};
