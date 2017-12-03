(function () {
    let hashAnchors = document.querySelectorAll('[href^="#"]');

    [].forEach.call(hashAnchors, function (anchor) {
        anchor.addEventListener('click', function (evt) {
            evt.preventDefault();
            document.location.hash = evt.target.getAttribute('href');
        });
    });
})();

import './scripts/vue-busy.js';
import './scripts/vue-progress.js';
import './scripts/vue-tabpanel.js';
import './scripts/vue-tabset.js';
