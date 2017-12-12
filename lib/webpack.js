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
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    console.log('PRODUCTION BUILD');
    //_plugins.push( ... );
    // TODO: configure uglifyjs-webpack-plugin with source maps
    _plugins.push(new UglifyJsPlugin({
        sourceMap: true,
        cache: false,
        uglifyOptions: {
            mangle: true
        }
    }));
}

const compiler = webpack({
    // entrypoints for compilation
    entry: path.resolve(CONFIG.root, 'docs/docs.js'),
    output: {
        path: path.resolve(CONFIG.root, 'public'),
        filename: 'docs.js',
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
                use: 'babel-loader'
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
