class DsElement extends HTMLElement {
    constructor (tagName, template) {
        super();
        this.attachShadow({mode: 'open'});

        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));
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
