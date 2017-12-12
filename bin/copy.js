#!/usr/bin/env node
'use strict';

const CONFIG = require('../_config');
const fsx = require('fs-extra');

const copyFiles = [
    'CNAME',
    'polyfill-loader.js',
];
const copyDirs = [
    'images',
    'vendor',
];

function _copyDist () {
    let sourcePath = `${CONFIG.root}/dist`;
    let destPath = `${CONFIG.publicDir}/dist`;
    fsx.copySync(sourcePath, destPath);
}

function copySync () {
    _copyDist();

    copyFiles.forEach(srcFile => {
        let sourcePath = `${CONFIG.docsDir}/${srcFile}`;
        let destPath = `${CONFIG.publicDir}/${srcFile}`;
        fsx.copySync(sourcePath, destPath);
    });

    copyDirs.forEach(srcDir => {
        let sourcePath = `${CONFIG.docsDir}/${srcDir}`;
        let destPath = `${CONFIG.publicDir}/${srcDir}`;
        // TODO: only copy if sourcePath exists
        fsx.copySync(sourcePath, destPath);
    });
}

exports.copySync = copySync;

if (require.main === module) {
    copySync();
}
