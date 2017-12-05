import { DsReveal } from './DsReveal';

export class DsTabpanel extends DsReveal {
    static get is () {
        return 'ds-tabpanel';
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.$setAttribute('role', 'tabpanel');
        // initialize
        this.setAttribute('aria-expanded', this.open);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        let hasValue = (newVal !== null);
        this.setAttribute('aria-expanded', hasValue);
        this.setAttribute('tabindex', hasValue ? 0 : -1);
    }
}
