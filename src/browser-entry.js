import Segno from './segno/index';
import { version as VERSION } from '../package.json';

Segno.VERSION = VERSION;

// Add Segno to global scope, if not already defined
if (!window.Segno) {
    window.Segno = Segno;
}

Segno.initialize();
