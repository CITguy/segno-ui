'use strict';

const CONFIG = require('../_config');
const _ = require('lodash');
const fm = require('front-matter');
const fs = require('fs');
const globby = require('globby');
const moment = require('moment');
const path = require('path');
const yaml = require('js-yaml');

// Fetch data from {CONFIG.sourceDir}/_data
function _getDataContext () {
    const dataDir = `${CONFIG.root}/${CONFIG.sourceDir}/_data`;
    const yamlFiles = globby.sync(['*.yml'], { cwd: dataDir });

    return yamlFiles.reduce((obj, file)=> {
        const basename = path.basename(file, path.extname(file));
        obj[basename] = yaml.safeLoad(
            fs.readFileSync(`${dataDir}/${file}`, 'utf8')
        );
        return obj;
    }, {});
}//_getDataContext()

// Fetch context from file frontmatter (if present)
function _getFrontMatter (relPath) {
    let frontMatter = {};

    try {
        let content = fs.readFileSync(`${CONFIG.sourceDir}/${relPath}`, 'utf8');
        if (fm.test(content)) {
            Object.assign(frontMatter, fm(content).attributes);
        }
    } finally {
        // nothing to do
    }

    return frontMatter;
}//_getFrontMatter()

function _getPageCrumbs (relPath) {
    let crumbs = [];

    if (relPath.indexOf('/') > -1) {
        let split = relPath.split('/');

        let filtered = split.filter( (item) => {
            return item !== 'index.html';
        });

        crumbs = filtered.reduce( (acc, currItem) => {
            let prevItem = acc[acc.length - 1];

            acc.push({
                key: currItem,
                path: (prevItem ? `${prevItem.path}/${currItem}` : currItem),
            });

            return acc;
        }, []);
    }

    return crumbs;
}//_getPageCrumbs()

// Fetch context about a particular file
function _getPageContext (relPath) {
    const sourcePath = `${CONFIG.sourceDir}/${relPath}`;
    const fileStats = fs.statSync(sourcePath);

    let fileContext = {
        path: relPath,
        updated: moment(fileStats.mtime),
        crumbs: _getPageCrumbs(relPath),
    };

    try {
        fileContext.raw = fs.readFileSync(sourcePath, { encoding: 'utf8' });
    } catch (e) {
        fileContext.raw = '';
    }

    let frontMatter = _getFrontMatter(relPath);

    return Object.assign({}, fileContext, frontMatter);
}//_getPageContext()

function forFile (relPath) {
    return {
        _: _,
        site: CONFIG.site,
        data: _getDataContext(),
        page: _getPageContext(relPath),
    };
}//forFile

exports.forFile = forFile;
