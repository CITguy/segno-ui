import { DSRevealElement } from './DSRevealElement';

export class DSTabpanelElement extends DSRevealElement {
    static get is () {
        return 'ds-tabpanel';
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.$defaultAttribute('role', 'tabpanel');
        // initialize
        this.setAttribute('aria-expanded', this.open);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        let hasValue = (newVal !== null);
        this.setAttribute('aria-expanded', hasValue);
        this.setAttribute('tabindex', hasValue ? 0 : -1);
    }
}
