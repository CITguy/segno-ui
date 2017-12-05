#!/usr/bin/env node
'use strict';

const CONFIG = require('../_config');
const fsx = require('fs-extra');

function copyDist () {
    let sourcePath = `${CONFIG.root}/dist`;
    let destPath = `${CONFIG.publicDir}/dist`;
    fsx.copySync(sourcePath, destPath);
}

function copySync () {
    copyDist();

    CONFIG.copy.files.forEach(srcFile => {
        let sourcePath = `${CONFIG.docsDir}/${srcFile}`;
        let destPath = `${CONFIG.publicDir}/${srcFile}`;
        fsx.copySync(sourcePath, destPath);
    });

    CONFIG.copy.dirs.forEach(srcDir => {
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
