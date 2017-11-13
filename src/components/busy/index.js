const _tagName = 'ds-busy';

const _template = document.createElement('template');
_template.innerHTML = `
    <style>${require('./DsBusy.less')}</style>
`;

class DsBusy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(_template, _tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }

    attachedCallback() {
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
}

module.exports = {
    define: () => {
        customElements.define(_tagName, DsBusy);
    },
    prototype: DsBusy,
    tagName: _tagName,
    template: _template
}
