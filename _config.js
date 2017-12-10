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
CONFIG.docsDir = 'docs';
CONFIG.templateDir = `${CONFIG.docsDir}/_templates`;

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
    files: [
        `${CONFIG.docsDir}/docs.less`,
        `${CONFIG.sourceDir}/segno-ui.less`,
        `${CONFIG.sourceDir}/segno-ui-grid.less`,
    ],
};

// Configuration for the webpack build tool
CONFIG.webpack = {
    // entrypoints for compilation
    entry: './docs/docs.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'docs.js',
    }
};

// Configuration for generating static documentation
CONFIG.docs = {
    files: [
        '*.html',
        '*/**.html',
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
// All paths are relative to {CONFIG.docsDir}
CONFIG.copy = {
    files: [
        'CNAME',
        'polyfill-loader.js'
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
