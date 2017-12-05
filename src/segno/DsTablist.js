import { DsElement } from './DsElement';

export class DsTablist extends DsElement {
    static get is () {
        return 'ds-tablist';
    }

    connectedCallback () {
        this.$setAttribute('role', 'tablist');
    }
}
