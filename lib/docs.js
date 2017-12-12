'use strict';

const CONFIG = require('../_config');
const Markup = require('./markup');
const fs = require('fs');
const fsx = require('fs-extra');
const globby = require('globby');
const path = require('path');

const markupFiles = globby.sync([
    '*.html',
    '*/**.html',
], { cwd: CONFIG.docsDir });

function compileSync () {
    Markup.renderEach(markupFiles, (err, file)=> {
        if (err) {
            throw err;
        }

        let destPath = `${CONFIG.publicDir}/${file.path}`;
        fsx.ensureDirSync(path.dirname(destPath));
        fs.writeFileSync(destPath, file.content);
    });
}//compileSync()

exports.compileSync = compileSync;
