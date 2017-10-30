'use strict';

// See https://webpack.js.org/api/node/

const CONFIG = require('../_config');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const path = require('path');
const webpack = require('webpack');

const sourcePath = `${CONFIG.root}/${CONFIG.sourceDir}`;
const publicPath = `${CONFIG.root}/${CONFIG.publicDir}`;

const PROD = (process.env.NODE_ENV === 'production');

const _plugins = [];
if (PROD) {
    console.log('PRODUCTION BUILD');
    // TODO: add uglifyjs-webpack-plugin to _plugins
    //_plugins.push( ... );
}

const compiler = webpack({
    entry: CONFIG.webpack.entry,
    output: {
        path: `${publicPath}`,
        filename: `[name]${PROD ? '.min' : ''}.js`,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    { loader: 'raw-loader' },
                    // SVGO loader?
                ]
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'raw-loader' },
                    /*
                    {
                        loader: 'html-loader',
                        options: {
                            minifyJS: false,
                            minifyCSS: false,
                        }
                    }
                    */
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'raw-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            paths: CONFIG.less.paths,
                            plugins: [
                                // always minifiy
                                new LessPluginCleanCSS({ advanced: true })
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // TODO: needed?
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    plugins: _plugins
});

function compileSync () {
    compiler.run((err, stats) => {
        if (err) {
            console.log('ERROR: running running webpack');
            console.log(err.message);
        }

        console.log(stats.toString({
            chunks: false,  // Makes the build much quieter
            colors: true    // Shows colors in the console
        }))
    });
}//compileSync

exports.compileSync = compileSync;
