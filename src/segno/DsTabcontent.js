import { DsElement } from './DsElement';

export class DsTabcontent extends DsElement {
    static get is () {
        return 'ds-tabcontent';
    }

    connectedCallback () {
        this.$setAttribute('role', 'presentation');
    }
}
