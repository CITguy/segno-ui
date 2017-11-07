'use strict';

const cheerio = require('cheerio');

function tocFilter (str, options) {
    options = options || {};

    const $ = cheerio.load(str);
    const headingSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    // we only care about h1-6[id] or h1-6[data-id]
    const mappedHeadineSelectors = headingSelectors.map( selector => {
        return [
            `${selector}[id]`,
            `${selector}[data-id]`,
        ].join(',');
    });

    const headings = $(mappedHeadineSelectors.join(','));

    // STOP, if no TOC headings found
    if (!headings.length) {
        return '<p><em>Unavailable</em></p>';
    }

    let items = [];

    headings.each(function () {
        let anchor = $(this).attr('id') || $(this).data()['id'];

        // do not create list item if there is nowhere to anchor
        if (!anchor) {
            return;
        }

        items.push(`
            <a href="#${anchor}">${ $(this).text() }</a>
        `);
    });

    return `
        ${items.join('')}
        <a href="#attributes">Attributes</a>
        <a href="#properties">Properties</a>
        <a href="#functions">Functions</a>
        <a href="#compatibility">Compatibility</a>
        <hr />
        <a class="top-link" href="#top">Back to Top</a>
    `;
}//tocFilter

module.exports = tocFilter;
