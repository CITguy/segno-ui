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
