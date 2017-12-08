import { DSElement } from './DSElement';

export class DSTablistElement extends DSElement {
    static get is () {
        return 'ds-tablist';
    }

    connectedCallback () {
        this.$defaultAttribute('role', 'tablist');
    }
}
