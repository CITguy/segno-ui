import { DSElement } from './DSElement';

export class DSTabElement extends DSElement {
    static get is () {
        return 'ds-tab';
    }

    connectedCallback () {
        this.$upgradeProperty('current');
        this.$defaultAttribute('role', 'tab');
        this.setAttribute('aria-selected', this.current);
    }

    static get observedAttributes () {
        return [ 'current' ];
    }

    $attributeChanged (attr, oldVal, newVal) {
        this.setAttribute('aria-selected', newVal !== null);
    }

    get current () {
        return this.hasAttribute('current');
    }

    set current (newVal) {
        if (newVal) {
            this.setAttribute('current', true);
        } else {
            this.removeAttribute('current');
        }
    }
}
