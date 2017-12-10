import { DSElement } from './DSElement';

export class DSTabcontentElement extends DSElement {
    static get is () {
        return 'ds-tabcontent';
    }

    connectedCallback () {
        this.$defaultAttribute('role', 'presentation');
    }
}
