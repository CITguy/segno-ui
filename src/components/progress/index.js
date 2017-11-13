const _tagName = 'ds-progress';

/*
    <!--
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
    -->
*/
const _template = document.createElement('template');
_template.innerHTML = `
    <style>${require('./DsProgress.less')}</style>
    <div id="fill"></div>
`;

class DsProgress extends HTMLElement {
    static get observedAttributes () {
        return ['value'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(_template, _tagName);
            ShadyCSS.styleElement(this);
        }
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
        this.$fill = this.shadowRoot.getElementById('fill');
        this.value = Number(this.getAttribute('value')) || 0;
    }

    attributeChangedCallback (attrName, oldVal, newVal) {
        this.value = Number(newVal);

        this.setAttribute('role', 'progressbar');
        this.setAttribute('aria-valuemin', 0);
        this.setAttribute('aria-valuemax', 100);
    }

    get value() {
        return this._value;
    }

    set value(newVal) {
        if (typeof newVal !== 'number') {
            return;
        }

        let normVal = Number(newVal) || 0;
        normVal = normVal > 100 ? 100 : normVal;
        normVal = normVal < 0 ? 0 : normVal;
        normVal = Math.round(normVal);

        this.$fill.style.width = `${normVal}%`;
        this.setAttribute('aria-valuenow', normVal);
        this._value = normVal;
    }

    get indeterminate() {
        return this.hasAttribute('indeterminate');
    }

    set indeterminate(newVal) {
        if (Boolean(newVal)) {
            this.setAttribute('indeterminate', true);
        } else {
            this.removeAttribute('indeterminate');
        }
    }
}//DsProgress

module.exports = {
    define: () => {
        customElements.define(_tagName, DsProgress);
    },
    prototype: DsProgress,
    tagName: _tagName,
    template: _template
};
