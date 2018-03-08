import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';


let htmlPlugin = html({
    include: [ 
        '**/*.svg', 
        '**/*.html',
    ],
    htmlMinifierOptions: {
        collapseWhitespace: true,
        quoteCharacter: "'",
    },
});

let babelPlugin = babel({
    exclude: 'node_modules/**/*'
});

let intro = `window.addEventListener('WebComponentsReady', function () {`;
let outro = `});`;

export default [
    // src/browser-entry.js --> dist/segno.browser.js (UMD)
    {
        input: 'src/browser-entry.js',
        intro,
        outro,
        name: 'Segno',
        output: [
            { 
                file: 'dist/segno-ui.browser.js',
                format: 'umd', 
            },
        ],
        plugins: [
            json(),
            htmlPlugin,
            babelPlugin,
        ],
        watch: {
            include: 'src/**/*',
            exclude: 'node_modules/**',
        },
    },
    // src/browser-entry.js --> dist/segno.browser.min.js (UMD)
    {
        input: 'src/browser-entry.js',
        intro,
        outro,
        name: 'Segno',
        output: [
            { 
                file: 'dist/segno-ui.browser.min.js',
                format: 'umd', 
            },
        ],
        plugins: [
            json(),
            htmlPlugin,
            babelPlugin,
            uglify({}, minify),
        ],
        watch: {
            include: 'src/**/*',
            exclude: 'node_modules/**',
        },
    },
    // src/node-entry.js --> dist/segno-ui.js (CJS)
    // src/node-entry.js --> dist/segno-ui.es.js (ESM)
    {
        input: 'src/node-entry.js',
        name: 'Segno',
        output: [
            { 
                file: pkg.main,
                format: 'cjs', 
            },
            { 
                file: pkg.module,
                format: 'es', 
            },
        ],
        plugins: [
            json(),
            htmlPlugin,
        ],
    },
];
