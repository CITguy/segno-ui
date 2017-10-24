const icons = {
    'angle-down': require('./assets/angle-down.svg'),
    'angle-left': require('./assets/angle-left.svg'),
    'angle-right': require('./assets/angle-right.svg'),
    'angle-up': require('./assets/angle-up.svg'),
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
    'clock': require('./assets/clock.svg'),
    'cog': require('./assets/cog.svg'),
    'download': require('./assets/download.svg'),
    'envelope': require('./assets/envelope.svg'),
    'exclamation': require('./assets/exclamation.svg'),
    'exclamation-circle': require('./assets/exclamation-circle.svg'),
    'exclamation-triangle': require('./assets/exclamation-triangle.svg'),
    'external-link': require('./assets/external-link.svg'),
    'filter': require('./assets/filter.svg'),
    'folder': require('./assets/folder.svg'),
    'heart': require('./assets/heart.svg'),
    'image': require('./assets/image.svg'),
    'info': require('./assets/info.svg'),
    'info-circle': require('./assets/info-circle.svg'),
    'key': require('./assets/key.svg'),
    'link': require('./assets/link.svg'),
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
    'redo': require('./assets/redo.svg'),
    'refresh': require('./assets/refresh.svg'),
    'search': require('./assets/search.svg'),
    'sortable': require('./assets/sortable.svg'),
    'sorted-down': require('./assets/sorted-down.svg'),
    'sorted-up': require('./assets/sorted-up.svg'),
    'star': require('./assets/star.svg'),
    'times': require('./assets/times.svg'),
    'times-circle': require('./assets/times-circle.svg'),
    'trash': require('./assets/trash.svg'),
    'undo': require('./assets/undo.svg'),
    'upload': require('./assets/upload.svg'),
    'user': require('./assets/user.svg'),
};

const template = document.createElement('template');
template.innerHTML = `<style>${require('./DsIcon.less')}</style><slot></slot>`;

class DsIcon extends HTMLElement {
    // CLASS PROPERTIES
    static get is () {
        return 'ds-icon';
    }

    static get icons () {
        return icons;
    }

    static get observedAttributes () {
        return [ 'type' ];
    }

    // LIFE CYCLE CALLBACKS
    constructor (type) {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        if (type) {
            this.type = type;
        }
    }

    connectedCallback () {
        this._render();
    }

    attributeChangedCallback () {
        this._render();
    }

    // PROPERTIES
    get type () {
        return this.getAttribute('type');
    }

    set type (newVal) {
        this.setAttribute('type', newVal);
    }

    // "PRIVATE" functions
    _render () {
        // erase previously injected markup
        this.innerHTML = '';

        if (this.type in HxIcon.icons) {
            // create surrogate DIV to add raw SVG markup
            const tmpDiv = document.createElement('div');
            tmpDiv.innerHTML = DsIcon.icons[this.type];

            // grab SVG from surrogate DIV
            //const svg = tmpDiv.firstElementChild;

            // inject SVG from surrogate DIV into Light DOM
            this.appendChild(tmpDiv.firstElementChild);
        }
    }//_render()
}

module.exports = DsIcon;
