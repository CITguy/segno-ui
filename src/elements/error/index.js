const DsElement = require('../DsElement');

const _template = document.createElement('template');
_template.innerHTML = `${require('./DsError.html')}`;

module.exports = class DsError extends DsElement {
    static get is () {
        return 'ds-error';
    }

    constructor () {
        super(_template);
    }
};
