/*
 * DsElement is an abstract class that represents a Segno element.
 */
import { DsElement } from './DsElement';

import * as elements from './elements';

function initialize () {
    for (let attr in elements) {
        elements[attr].$define();
    }
};

export default {
    DsElement,
    elements,
    initialize,
};
