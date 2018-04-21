import { DSElement } from './DSElement';

export class DSBusyElement extends DSElement {
    static get is () {
        return 'ds-busy';
    }

    connectedCallback () {
        this.$upgradeProperty('paused');
    }

    attachedCallback () {
        this.setAttribute('aria-hidden', true);
    }

    static get observedAttributes () {
        return [ 'paused' ];
    }

    $attributeChanged (attr, oldVal, newVal) {
        let hasValue = (newVal !== null);
        if (hasValue) {
            this.$emit('pause');
        } else {
            this.$emit('start');
        }
    }

    get paused () {
        return this.hasAttribute('paused');
    }

    set paused (val) {
        if (val) {
            this.setAttribute('paused', '');
        } else {
            this.removeAttribute('paused');
        }
    }
}
