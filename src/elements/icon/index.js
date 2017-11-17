const DsElement = require('../DsElement');
const _tagName = 'ds-icon';
const _template = document.createElement('template');
const _icons = {
    'angle-down': require('./assets/angle-down.svg'),
    'angle-left': require('./assets/angle-left.svg'),
    'angle-right': require('./assets/angle-right.svg'),
    'angle-up': require('./assets/angle-up.svg'),
    'arrow-down': require('./assets/arrow-down.svg'),
    'arrow-left': require('./assets/arrow-left.svg'),
    'arrow-right': require('./assets/arrow-right.svg'),
    'arrow-up': require('./assets/arrow-up.svg'),
    'ban': require('./assets/ban.svg'),
    'bell': require('./assets/bell.svg'),
    'bookmark': require('./assets/bookmark.svg'),
    'calendar': require('./assets/calendar.svg'),
    'caret-down': require('./assets/caret-down.svg'),
    'caret-left': require('./assets/caret-left.svg'),
    'caret-right': require('./assets/caret-right.svg'),
    'caret-up': require('./assets/caret-up.svg'),
    'check': require('./assets/check.svg'),
    'check-circle': require('./assets/check-circle.svg'),
    'check-circle-fill': require('./assets/check-circle-fill.svg'),
    'clock': require('./assets/clock.svg'),
    'cog': require('./assets/cog.svg'),
    'download': require('./assets/download.svg'),
    'envelope': require('./assets/envelope.svg'),
    'exclamation': require('./assets/exclamation.svg'),
    'exclamation-circle': require('./assets/exclamation-circle.svg'),
    'exclamation-circle-fill': require('./assets/exclamation-circle-fill.svg'),
    'exclamation-triangle': require('./assets/exclamation-triangle.svg'),
    'exclamation-triangle-fill': require('./assets/exclamation-triangle-fill.svg'),
    'external-link': require('./assets/external-link.svg'),
    'filter': require('./assets/filter.svg'),
    'folder': require('./assets/folder.svg'),
    'heart': require('./assets/heart.svg'),
    'image': require('./assets/image.svg'),
    'info': require('./assets/info.svg'),
    'info-circle': require('./assets/info-circle.svg'),
    'info-circle-fill': require('./assets/info-circle-fill.svg'),
    'key': require('./assets/key.svg'),
    'link': require('./assets/link.svg'),
    'map-marker': require('./assets/map-marker.svg'),
    'menu-bento': require('./assets/menu-bento.svg'),
    'menu-doner': require('./assets/menu-doner.svg'),
    'menu-hamburger': require('./assets/menu-hamburger.svg'),
    'menu-kebab': require('./assets/menu-kebab.svg'),
    'menu-meatball': require('./assets/menu-meatball.svg'),
    'minus': require('./assets/minus.svg'),
    'padlock-locked': require('./assets/padlock-locked.svg'),
    'padlock-unlocked': require('./assets/padlock-unlocked.svg'),
    'paperclip': require('./assets/paperclip.svg'),
    'pencil': require('./assets/pencil.svg'),
    'phone': require('./assets/phone.svg'),
    'plus': require('./assets/plus.svg'),
    'question': require('./assets/question.svg'),
    'question-circle': require('./assets/question-circle.svg'),
    'question-circle-fill': require('./assets/question-circle-fill.svg'),
    'redo': require('./assets/redo.svg'),
    'refresh': require('./assets/refresh.svg'),
    'search': require('./assets/search.svg'),
    'sortable': require('./assets/sortable.svg'),
    'sorted-down': require('./assets/sorted-down.svg'),
    'sorted-up': require('./assets/sorted-up.svg'),
    'star': require('./assets/star.svg'),
    'times': require('./assets/times.svg'),
    'times-circle': require('./assets/times-circle.svg'),
    'times-circle-fill': require('./assets/times-circle-fill.svg'),
    'trash': require('./assets/trash.svg'),
    'undo': require('./assets/undo.svg'),
    'upload': require('./assets/upload.svg'),
    'user': require('./assets/user.svg'),
};

_template.innerHTML = `
    <style>${require('./DsIcon.less')}</style>
    <slot></slot>
`;

module.exports = class DsIcon extends DsElement {
    static $define () {
        customElements.define(_tagName, this);
    }

    static get icons () {
        return _icons;
    }

    static get observedAttributes () {
        return [ 'type' ];
    }

    constructor (type) {
        super(_tagName, _template);

        if (type) {
            this.type = type;
        }
    }

    connectedCallback () {
        this.$upgradeProperty('type');
        this.$setAttribute('aria-hidden', true);
        this._render();
    }

    attributeChangedCallback () {
        this._render();
    }

    get type () {
        return this.getAttribute('type');
    }

    set type (newVal) {
        this.setAttribute('type', newVal);
    }

    _render () {
        // erase previously injected markup
        this.innerHTML = '';
        // add new SVG markup
        if (this.type in _icons) {
            const elSurrogate = document.createElement('div');
            elSurrogate.innerHTML = _icons[this.type];
            this.appendChild(elSurrogate.firstElementChild);
        }
    }
};
