const DsElement = require('./DsElement');
const _icons = {
    'angle-down': require('../images/angle-down.svg'),
    'angle-left': require('../images/angle-left.svg'),
    'angle-right': require('../images/angle-right.svg'),
    'angle-up': require('../images/angle-up.svg'),
    'arrow-down': require('../images/arrow-down.svg'),
    'arrow-left': require('../images/arrow-left.svg'),
    'arrow-right': require('../images/arrow-right.svg'),
    'arrow-up': require('../images/arrow-up.svg'),
    'ban': require('../images/ban.svg'),
    'bell': require('../images/bell.svg'),
    'bookmark': require('../images/bookmark.svg'),
    'calendar': require('../images/calendar.svg'),
    'caret-down': require('../images/caret-down.svg'),
    'caret-left': require('../images/caret-left.svg'),
    'caret-right': require('../images/caret-right.svg'),
    'caret-up': require('../images/caret-up.svg'),
    'check': require('../images/check.svg'),
    'check-circle': require('../images/check-circle.svg'),
    'check-circle-fill': require('../images/check-circle-fill.svg'),
    'clock': require('../images/clock.svg'),
    'cog': require('../images/cog.svg'),
    'download': require('../images/download.svg'),
    'envelope': require('../images/envelope.svg'),
    'exclamation': require('../images/exclamation.svg'),
    'exclamation-circle': require('../images/exclamation-circle.svg'),
    'exclamation-circle-fill': require('../images/exclamation-circle-fill.svg'),
    'exclamation-diamond': require('../images/exclamation-diamond.svg'),
    'exclamation-diamond-fill': require('../images/exclamation-diamond-fill.svg'),
    'exclamation-triangle': require('../images/exclamation-triangle.svg'),
    'exclamation-triangle-fill': require('../images/exclamation-triangle-fill.svg'),
    'external-link': require('../images/external-link.svg'),
    'filter': require('../images/filter.svg'),
    'folder': require('../images/folder.svg'),
    'heart': require('../images/heart.svg'),
    'image': require('../images/image.svg'),
    'info': require('../images/info.svg'),
    'info-circle': require('../images/info-circle.svg'),
    'info-circle-fill': require('../images/info-circle-fill.svg'),
    'key': require('../images/key.svg'),
    'link': require('../images/link.svg'),
    'map-marker': require('../images/map-marker.svg'),
    'menu-bento': require('../images/menu-bento.svg'),
    'menu-doner': require('../images/menu-doner.svg'),
    'menu-hamburger': require('../images/menu-hamburger.svg'),
    'menu-kebab': require('../images/menu-kebab.svg'),
    'menu-meatball': require('../images/menu-meatball.svg'),
    'minus': require('../images/minus.svg'),
    'padlock-locked': require('../images/padlock-locked.svg'),
    'padlock-unlocked': require('../images/padlock-unlocked.svg'),
    'paperclip': require('../images/paperclip.svg'),
    'pencil': require('../images/pencil.svg'),
    'phone': require('../images/phone.svg'),
    'plus': require('../images/plus.svg'),
    'question': require('../images/question.svg'),
    'question-circle': require('../images/question-circle.svg'),
    'question-circle-fill': require('../images/question-circle-fill.svg'),
    'redo': require('../images/redo.svg'),
    'refresh': require('../images/refresh.svg'),
    'search': require('../images/search.svg'),
    'sortable': require('../images/sortable.svg'),
    'sorted-down': require('../images/sorted-down.svg'),
    'sorted-up': require('../images/sorted-up.svg'),
    'star': require('../images/star.svg'),
    'times': require('../images/times.svg'),
    'times-circle': require('../images/times-circle.svg'),
    'times-circle-fill': require('../images/times-circle-fill.svg'),
    'trash': require('../images/trash.svg'),
    'undo': require('../images/undo.svg'),
    'upload': require('../images/upload.svg'),
    'user': require('../images/user.svg'),
};

module.exports = class extends DsElement {
    static get is () {
        return 'ds-icon';
    }

    static get icons () {
        return _icons;
    }

    static get observedAttributes () {
        return [ 'type' ];
    }

    constructor (type) {
        super();

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
