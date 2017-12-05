import { DsElement } from './DsElement';
import Icons from './icons';

export class DsIcon extends DsElement {
    static get is () {
        return 'ds-icon';
    }

    static get icons () {
        return Icons;
    }

    static get observedAttributes () {
        return [ 'type' ];
    }

    constructor (type) {
        super();

        if (type) {
            this.type = type;
        }
    }

    connectedCallback () {
        this.$upgradeProperty('type');
        this.$setAttribute('aria-hidden', true);
        this._render();
    }

    attributeChangedCallback () {
        this._render();
    }

    get type () {
        return this.getAttribute('type');
    }

    set type (newVal) {
        this.setAttribute('type', newVal);
    }

    _render () {
        // erase previously injected markup
        this.innerHTML = '';
        // add new SVG markup
        if (this.type in Icons) {
            const elSurrogate = document.createElement('div');
            elSurrogate.innerHTML = Icons[this.type];
            this.appendChild(elSurrogate.firstElementChild);
        }
    }
}
