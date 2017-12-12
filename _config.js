'use strict';

const CONFIG = {};
const path = require('path');

// PATHS
CONFIG.root = path.resolve(__dirname);// absolute path to project directory
CONFIG.publicDir = 'public';
CONFIG.sourceDir = 'src';
CONFIG.docsDir = 'docs';

// Component Explorer configuration
// Used directly for "site" rendering context
CONFIG.site = {
    title: 'SegnoUI',
    language: 'en',
    baseHref: '/',
    // Moment.js format string
    dateFormat: 'YYYY-MM-DD',
    // Moment.js format string
    timeFormat: 'HH:mm:ss',
};

// Configuration for the LESS precompiler
CONFIG.less = {
    paths: [
        `${CONFIG.sourceDir}`,
        `${CONFIG.docsDir}/styles`, 
    ],
    // [src, dest]
    files: [
        [ `${CONFIG.docsDir}/docs.less`, `${CONFIG.publicDir}/docs.css` ],
        [ `${CONFIG.sourceDir}/segno-ui.less`, 'dist/segno-ui.css' ],
        [ `${CONFIG.sourceDir}/segno-ui-grid.less`, 'dist/segno-ui-grid.css' ],
    ],
};

/* Define Exports */
module.exports = CONFIG;
