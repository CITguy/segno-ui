(function () {
    let hashAnchors = document.querySelectorAll('[href^="#"]');

    [].forEach.call(hashAnchors, function (anchor) {
        anchor.addEventListener('click', function (evt) {
            evt.preventDefault();
            document.location.hash = evt.target.getAttribute('href');
        });
    });
})();

import './elements/busy/demo-busy.js';
import './elements/progress/demo-progress.js';
import './elements/tabpanel/demo-tabpanel.js';
import './elements/tabset/demo-tabset.js';
