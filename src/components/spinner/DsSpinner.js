const tagName = 'ds-spinner';

const template = document.createElement('template');
template.innerHTML = `<style>${require('./DsSpinner.less')}</style>`;

class DsSpinner extends HTMLElement {
    static get is () {
        return tagName;
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));
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
}

module.exports = DsSpinner;
