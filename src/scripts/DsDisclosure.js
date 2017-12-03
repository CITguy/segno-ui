const KEYS = require('./keys');
const DsElement = require('./DsElement');

module.exports = class extends DsElement {
    static get is () {
        return 'ds-disclosure';
    }

    static get observedAttributes () {
        return [ 
            'aria-expanded',
            'disabled',
        ];
    }

    connectedCallback () {
        this.$setAttribute('role', 'button');
        this.setAttribute('tabindex', 0);

        if (this.target) {
            this.expanded = this.target.hasAttribute('open');
        } else {
            this.expanded = false;
        }

        this.addEventListener('click', this._toggle);
        this.addEventListener('keydown', this.$preventScroll);
        this.addEventListener('keyup', this._keyUp);
    }

    disconnectedCallback () {
        this.removeEventListener('click', this._toggle);
        this.removeEventListener('keydown', this.$preventScroll);
        this.removeEventListener('keyup', this._keyUp);
    }

    attributeChangedCallback (attr, oldVal, newVal) {
        switch(attr) {
            case 'aria-expanded':
                if (this.target) {
                    this.target.open = (newVal === 'true');
                }
            break;

            case 'disabled':
                if (newVal !== null) {
                    this.setAttribute('tabindex', -1);
                } else {
                    this.setAttribute('tabindex', 0);
                }
            break;
        }
    }

    get expanded () {
        return this.getAttribute('aria-expanded') === 'true';
    }

    set expanded (newVal) {
        this.setAttribute('aria-expanded', !!newVal);
    }

    get target () {
        if (!this._target) { // memoize target
            let targetId = this.getAttribute('aria-controls');
            this._target = document.getElementById(targetId);
        }

        return this._target;
    }//target

    get disabled () {
        return this.hasAttribute('disabled');
    }

    set disabled (newVal) {
        if (!!newVal) {
            this.setAttribute('disabled', true);
        } else {
            this.removeAttribute('disabled');
        }
    }

    _keyUp (evt) {
        switch (evt.keyCode) {
            case KEYS.Space:
            case KEYS.Enter:
                this._toggle();
            break;

            default: /* do nothing */ break;
        }
    }//_keyUp()

    _toggle () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }//_toggle();
};
