import { DSElement } from './elements/DSElement';

import * as elements from './elements';

function _defineElements () {
    for (let attr in elements) {
        elements[attr].$define();
    }
}

function initialize () {
    if (window.WebComponents) { // polyfill detected
        if (window.WebComponents.ready) {
            // polyfill already finished loading, initialize immediately
            _defineElements();
        } else {
            // initialize when polyfill has finished loading
            window.addEventListener('WebComponentsReady', function () {
                _defineElements();
            });
        }
    } else { // no polyfill detected
        // initialize immediately
        _defineElements();
    }
}

export default {
    DSElement,
    elements,
    initialize,
};
