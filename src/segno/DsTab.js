import { DsElement } from './DsElement';

export class DsTab extends DsElement {
    static get is () {
        return 'ds-tab';
    }

    connectedCallback () {
        this.$upgradeProperty('current');
        this.$setAttribute('role', 'tab');
        // use vanilla setAttribute here
        this.setAttribute('aria-selected', this.current);
    }

    static get observedAttributes () {
        return ['current'];
    }

    attributeChangedCallback (attr, oldVal, newVal) {
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
