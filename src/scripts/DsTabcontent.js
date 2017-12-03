const DsElement = require('./DsElement');

module.exports = class extends DsElement {
    static get is () {
        return 'ds-tabcontent';
    }

    connectedCallback () {
        this.$setAttribute('role', 'presentation');
    }
};
