/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Custom polyfill loader to exclude HTML import polyfills.
 *
 * Built to be compatible with polyfills developed at https://github.com/webcomponents/webcomponentsjs
 */
(function () {
    'use strict';
    // Needed to be compatible with webcomponentsjs polyfills

    window.WebComponents = window.WebComponents || {};

    var polyName = '';
    if (!window.customElements) {
        // All browsers that need Custom Elements polyfills also need ShadowDOM polyfills
        // (Firefox, newer versions of Edge, older versions of Safari)
        polyName = 'webcomponents-sd-ce.js';
    }

    // Load the full suite of polyfills if IE 11 or older versions of Edge.
    if (!('content' in document.createElement('template')) || !window.Promise || !Array.from || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
        polyName = 'webcomponents-lite.js';
    }

    // Latest Chrome, Opera, and Safari don't need polyfills. (^_^)

    if (polyName !== '') {
        var name = 'polyfill-loader.js';
        var loaderScript = document.querySelector('script[src*="' + name + '"]');
        var polyScript = document.createElement('script');
        polyScript.src = loaderScript.src.replace('polyfill-loader.js', 'vendor/' + polyName);
        loaderScript.parentElement.appendChild(polyScript);
    } else {
        var ready = function ready() {
            requestAnimationFrame(function () {
                window.WebComponents.ready = true;
                var evtReady = new CustomEvent('WebComponentsReady', { bubbles: true });
                document.dispatchEvent(evtReady);
            });
        };

        if (document.readyState !== 'loading') {
            ready();
        } else {
            document.addEventListener('readystatechange', function wait() {
                ready();
                document.removeEventListener('readystatechange', wait);
            });
        }
    }
})();

/***/ })

/******/ });