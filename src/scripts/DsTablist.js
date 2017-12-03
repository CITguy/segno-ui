const DsElement = require('./DsElement');

module.exports = class extends DsElement {
    static get is () {
        return 'ds-tablist';
    }

    connectedCallback () {
        this.$setAttribute('role', 'tablist');
    }
};
