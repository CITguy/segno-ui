import { DSElement } from './DSElement';

const _tagName = 'ds-progress';
const _template = document.createElement('template');

_template.innerHTML = `
    <style>
        :host([indeterminate]) #fill {
            width: 0 !important;
        }

        #fill {
            background-color: currentColor;
            box-sizing: border-box;
            height: 100%;
        }
    </style>
    <div id="fill"></div>
`;

export class DSProgressElement extends DSElement {
    static get is () {
        return _tagName;
    }

    static get observedAttributes () {
        return [ 'value' ];
    }

    constructor () {
        super(_tagName, _template);

        this.$fill = this.shadowRoot.getElementById('fill');
        this.value = Number(this.getAttribute('value')) || 0;
    }

    connectedCallback () {
        this.$upgradeProperty('indeterminate');
        this.$upgradeProperty('value');
    }

    attributeChangedCallback (attrName, oldVal, newVal) {
        this.value = Number(newVal);

        this.$defaultAttribute('role', 'progressbar');
        this.$defaultAttribute('aria-valuemin', 0);
        this.$defaultAttribute('aria-valuemax', 100);
    }

    get value () {
        return this._value;
    }

    set value (newVal) {
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

    get indeterminate () {
        return this.hasAttribute('indeterminate');
    }

    set indeterminate (newVal) {
        if (newVal) {
            this.setAttribute('indeterminate', true);
        } else {
            this.removeAttribute('indeterminate');
        }
    }
}
