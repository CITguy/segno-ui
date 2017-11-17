const DsElement = require('../DsElement');
const _tagName = 'ds-busy';
const _template = document.createElement('template');

_template.innerHTML = `<style>${require('./DsBusy.less')}</style>`;

module.exports = class DsBusy extends DsElement {
    static $define () {
        customElements.define(_tagName, this);
    }

    constructor () {
        super(_tagName, _template);
    }

    connectedCallback () {
        this.$upgradeProperty('paused');
    }

    attachedCallback () {
        this.setAttribute('aria-hidden', true);
    }

    get paused () {
        return this.hasAttribute('paused');
    }

    set paused (val) {
        if (Boolean(val)) {
            this.setAttribute('paused', '');
            this.dispatchEvent(new CustomEvent('pause', {
                bubbles: true
            }));
        } else {
            this.removeAttribute('paused');
            this.dispatchEvent(new CustomEvent('start', {
                bubbles: true
            }));
        }
    }
};
