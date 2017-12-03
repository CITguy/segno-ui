/**
 * Custom polyfill loader to exclude HTML import polyfills.
 *
 * Built to be compatible with polyfills developed at https://github.com/webcomponents/webcomponentsjs
 */
(function() {
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
    if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
        !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
        polyName = 'webcomponents-lite.js';
    }

    // Latest Chrome, Opera, and Safari don't need polyfills. (^_^)

    if (polyName !== '') {
        var name = 'polyfill-loader.js';
        var loaderScript = document.querySelector('script[src*="' + name +'"]');
        var polyScript = document.createElement('script');
        polyScript.src = loaderScript.src.replace('polyfill-loader.js', 'vendor/' + polyName);
        loaderScript.parentElement.appendChild(polyScript);
    } else {
        var ready = function() {
            requestAnimationFrame(function () {
                window.WebComponents.ready = true;
                var evtReady = new CustomEvent('WebComponentsReady', { bubbles: true });
                document.dispatchEvent(evtReady);
            });
        };

        if (document.readyState !== 'loading') {
            ready();
        } else {
            document.addEventListener('readystatechange', function wait () {
                ready();
                document.removeEventListener('readystatechange', wait);
            });
        }
    }
})();
