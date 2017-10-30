window.addEventListener('WebComponentsReady', function () {
    // Import Class Definition
    const DsIcon = require('./components/icon/DsIcon');
    const DsReveal = require('./components/reveal/DsReveal');
    const DsSpinner = require('./components/spinner/DsSpinner');

    // Register Custom Element
    customElements.define(DsIcon.is, DsIcon);
    customElements.define(DsReveal.is, DsReveal);
    customElements.define(DsSpinner.is, DsSpinner);
});
