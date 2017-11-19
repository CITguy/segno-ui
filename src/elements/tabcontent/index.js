const DsElement = require('../DsElement');

module.exports = class DsTabcontent extends DsElement {
    static get is () {
        return 'ds-tabcontent';
    }

    static $define () {
        customElements.define(this.is, this);
    }

    connectedCallback () {
        this.$setAttribute('role', 'presentation');
    }
};
