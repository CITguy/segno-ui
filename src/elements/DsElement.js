const defaultTemplate = document.createElement('template');
defaultTemplate.innerHTML = `<slot></slot>`;

class DsElement extends HTMLElement {
    static $define () {
        customElements.define(this.is, this);
    }

    constructor (_template) {
        super();
        this.attachShadow({mode: 'open'});

        _template = _template || defaultTemplate;

        if (window.ShadyCSS) {
            let proto = Object.getPrototypeOf(this);
            ShadyCSS.prepareTemplate(_template, proto.is);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }

    // See: https://goo.gl/MDp6j5
    $upgradeProperty (prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }

    // See: https://goo.gl/MUFHD8
    $setAttribute (name, val) {
        if (!this.hasAttribute(name)) {
            this.setAttribute(name, val);
        }
    }
}

module.exports = DsElement;
