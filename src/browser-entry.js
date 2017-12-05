import Segno from './segno/index';
import { version as VERSION } from '../package.json';

Segno.VERSION = VERSION;

// Add Segno to global scope, if not already defined
if (!window.Segno) {
    window.Segno = Segno;
}

// If polyfills are used, initialize when polyfills are ready
// otherwise, initialize immediately
if (window.WebComponents) {
    window.addEventListener('WebComponentsReady', function () {
        Segno.initialize();
    });
} else {
    Segno.initialize();
}

