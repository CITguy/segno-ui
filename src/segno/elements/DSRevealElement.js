import { DSElement } from './DSElement';

export class DSRevealElement extends DSElement {
    static get is () {
        return 'ds-reveal';
    }

    static get observedAttributes () {
        return ['open'];
    }

    connectedCallback () {
        this.$upgradeProperty('open');
        this.setAttribute('aria-expanded', this.open);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        this.setAttribute('aria-expanded', newVal === '')
    }

    set open (value) {
        if (!!value) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
    }

    get open () {
        return this.hasAttribute('open');
    }
}
