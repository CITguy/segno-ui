'use strict';

const _ = require('lodash');
const path = require('path');

let _privateConfig;

try {
    _privateConfig = require('./_config.private');
} catch (e) {
    _privateConfig = {};
}
const CONFIG = {};

// PATHS
CONFIG.root = path.resolve(__dirname);// absolute path to project directory
CONFIG.publicDir = 'public';
CONFIG.sourceDir = 'src';
CONFIG.templateDir = `${CONFIG.sourceDir}/_templates`;

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
        `${CONFIG.sourceDir}/elements`,
        `${CONFIG.sourceDir}/docs`,
        `${CONFIG.sourceDir}/utilities`,
    ],
    files: [
        `${CONFIG.sourceDir}/docs.less`,
        `${CONFIG.sourceDir}/segno-ui-grid.less`,
        `${CONFIG.sourceDir}/segno-ui.less`,
    ],
};

// Configuration for the webpack build tool
CONFIG.webpack = {
    // entrypoints for compilation
    entry: {
        // TODO: see if key/value object is still needed, given we have proper names
        /* <name>: <source file> */
        // NOTE: source fileneeds to be full path, not relative
        'segno-ui': `${CONFIG.root}/${CONFIG.sourceDir}/segno-ui.js`,
        'docs': `${CONFIG.root}/${CONFIG.sourceDir}/docs.js`,
        'polyfill-loader': `${CONFIG.root}/${CONFIG.sourceDir}/polyfill-loader.js`,
    }
};

// Configuration for generating static documentation
CONFIG.docs = {
    files: [
        'index.html',
        '404.html',
        '*/**/index.html',
    ],
    // settings for deployment to github pages
    ghPages: {
        type: 'git',
        repo: 'git@github.com:SegnoUI/segno-ui.git',
        branch: 'gh-pages',
        message: `Docs Updated: {{ now('YYYY-MM-DD HH:mm:ss') }}`,
        url: 'http://segno-ui.com/'
    }
};

// Files and directories to copy to publicDir
// All paths are relative to {CONFIG.sourceDir}
CONFIG.copy = {
    files: [
        'CNAME'
    ],
    dirs: [
        'images',
        'vendor',
    ]
};

// Configuration to publish assets to Cloud Files
// Local-to-Remote path mapping
const _cdnFiles = {};
_cdnFiles[`${CONFIG.publicDir}/helix-ui.css`] = 'css/segno-ui.css';
_cdnFiles[`${CONFIG.publicDir}/helix-ui.js`] = 'javascript/segno-ui.js';
CONFIG.cdn = {
    files: _cdnFiles,
    storage: {} // override in _config.private.js
};

const combinedConfig = _.merge({}, CONFIG, _privateConfig);

/* Define Exports */
module.exports = combinedConfig;
