import { DSElement } from './DSElement';

import * as elements from './elements';

function initialize () {
    for (let attr in elements) {
        elements[attr].$define();
    }
}

export default {
    DSElement,
    elements,
    initialize,
}
