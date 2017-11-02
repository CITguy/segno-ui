window.addEventListener('WebComponentsReady', function () {
    // Import Class Definition
    const DsIcon = require('./components/icon/DsIcon');
    const DsInlineError = require('./components/form/DsInlineError');
    const DsReveal = require('./components/reveal/DsReveal');
    const DsSpinner = require('./components/spinner/DsSpinner');

    // Register Custom Element
    customElements.define(DsIcon.is, DsIcon);
    customElements.define(DsInlineError.is, DsInlineError);
    customElements.define(DsReveal.is, DsReveal);
    customElements.define(DsSpinner.is, DsSpinner);
});
