(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var KEYS = {
    Alt: 18,
    Backspace: 8,
    Control: 17,
    Delete: 46,
    Down: 40,
    End: 35,
    Enter: 13,
    Escape: 27,
    Home: 36,
    Insert: 45,
    Left: 37,
    PageDown: 34,
    PageUp: 33,
    Right: 39,
    Shift: 16,
    Space: 32,
    Tab: 9,
    Up: 38
};

// ALIASES
KEYS['Ctrl'] = KEYS['Control'];
KEYS['Del'] = KEYS['Delete'];
KEYS['Esc'] = KEYS['Escape'];
KEYS['Ins'] = KEYS['Insert'];
KEYS['Option'] = KEYS['Alt'];
KEYS['PgDown'] = KEYS['PageDown'];
KEYS['PgUp'] = KEYS['PageUp'];
KEYS['Return'] = KEYS['Enter'];

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var DSElement = function (_HTMLElement) {
    inherits(DSElement, _HTMLElement);
    createClass(DSElement, null, [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }]);

    function DSElement(tagName, template) {
        classCallCheck(this, DSElement);

        // Don't attach shadow DOM unless specified
        var _this = possibleConstructorReturn(this, (DSElement.__proto__ || Object.getPrototypeOf(DSElement)).call(this));

        if (tagName && template) {
            _this.attachShadow({ mode: 'open' });

            if (window.ShadyCSS) {
                ShadyCSS.prepareTemplate(template, tagName);
                ShadyCSS.styleElement(_this);
            }
            _this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
        return _this;
    }

    // See: https://goo.gl/MDp6j5


    createClass(DSElement, [{
        key: '$upgradeProperty',
        value: function $upgradeProperty(prop) {
            if (this.hasOwnProperty(prop)) {
                var value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        }

        // See: https://goo.gl/MUFHD8

    }, {
        key: '$defaultAttribute',
        value: function $defaultAttribute(name, val) {
            if (!this.hasAttribute(name)) {
                this.setAttribute(name, val);
            }
        }

        // Utility method to generate a unique ID

    }, {
        key: '$generateId',
        value: function $generateId() {
            return Math.random() // 0.7093288430261266
            .toString(36) // "0.pjag2nwxb2o"
            .substr(2, 8); // "pjag2nwx"
        } //$generateId()

    }, {
        key: '$preventScroll',
        value: function $preventScroll(evt) {
            switch (evt.keyCode) {
                case KEYS.Down:
                case KEYS.Left:
                case KEYS.Right:
                case KEYS.Space:
                case KEYS.Up:
                    evt.preventDefault();
                    break;
            }
        }
    }]);
    return DSElement;
}(HTMLElement);

var DSBusyElement = function (_DSElement) {
    inherits(DSBusyElement, _DSElement);

    function DSBusyElement() {
        classCallCheck(this, DSBusyElement);
        return possibleConstructorReturn(this, (DSBusyElement.__proto__ || Object.getPrototypeOf(DSBusyElement)).apply(this, arguments));
    }

    createClass(DSBusyElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('paused');
        }
    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {
            this.setAttribute('aria-hidden', true);
        }
    }, {
        key: 'paused',
        get: function get$$1() {
            return this.hasAttribute('paused');
        },
        set: function set$$1(val) {
            if (Boolean(val)) {
                this.setAttribute('paused', '');
                this.dispatchEvent(new CustomEvent('pause', {
                    bubbles: true
                }));
            } else {
                this.removeAttribute('paused');
                this.dispatchEvent(new CustomEvent('start', {
                    bubbles: true
                }));
            }
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-busy';
        }
    }]);
    return DSBusyElement;
}(DSElement);

var DSDisclosureElement = function (_DSElement) {
    inherits(DSDisclosureElement, _DSElement);

    function DSDisclosureElement() {
        classCallCheck(this, DSDisclosureElement);
        return possibleConstructorReturn(this, (DSDisclosureElement.__proto__ || Object.getPrototypeOf(DSDisclosureElement)).apply(this, arguments));
    }

    createClass(DSDisclosureElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$defaultAttribute('role', 'button');
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
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.removeEventListener('click', this._toggle);
            this.removeEventListener('keydown', this.$preventScroll);
            this.removeEventListener('keyup', this._keyUp);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            switch (attr) {
                case 'aria-expanded':
                    if (this.target) {
                        this.target.open = newVal === 'true';
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
    }, {
        key: '_keyUp',
        value: function _keyUp(evt) {
            switch (evt.keyCode) {
                case KEYS.Space:
                case KEYS.Enter:
                    this._toggle();
                    break;

                default:
                    /* do nothing */break;
            }
        } //_keyUp()

    }, {
        key: '_toggle',
        value: function _toggle() {
            if (!this.disabled) {
                this.expanded = !this.expanded;
            }
        } //_toggle();

    }, {
        key: 'expanded',
        get: function get$$1() {
            return this.getAttribute('aria-expanded') === 'true';
        },
        set: function set$$1(newVal) {
            this.setAttribute('aria-expanded', !!newVal);
        }
    }, {
        key: 'target',
        get: function get$$1() {
            if (!this._target) {
                // memoize target
                var targetId = this.getAttribute('aria-controls');
                this._target = document.getElementById(targetId);
            }

            return this._target;
        } //target

    }, {
        key: 'disabled',
        get: function get$$1() {
            return this.hasAttribute('disabled');
        },
        set: function set$$1(newVal) {
            if (!!newVal) {
                this.setAttribute('disabled', true);
            } else {
                this.removeAttribute('disabled');
            }
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-disclosure';
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['aria-expanded', 'disabled'];
        }
    }]);
    return DSDisclosureElement;
}(DSElement);

var angleDown = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 8.325l-4.55-4.55-1.95 1.95 6.5 6.5 6.5-6.5-1.95-1.95z'/></svg>";

var angleLeft = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M7.692 8L12 3.692l-1.846-1.846L4 8l6.154 6.154L12 12.308z'/></svg>";

var angleRight = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8.308 8L4 3.692l1.846-1.846L12 8l-6.154 6.154L4 12.308z'/></svg>";

var angleUp = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 7.675l-4.55 4.55-1.95-1.95 6.5-6.5 6.5 6.5-1.95 1.95z'/></svg>";

var arrowDown = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M7 10.5H3.5L8 15l4.5-4.5H9V1H7v9.5z'/></svg>";

var arrowLeft = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 7V3.5L1 8l4.5 4.5V9H15V7H5.5z'/></svg>";

var arrowRight = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 9v3.5L15 8l-4.5-4.5V7H1v2h9.5z'/></svg>";

var arrowUp = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M9 5.5h3.5L8 1 3.5 5.5H7V15h2V5.5z'/></svg>";

var ban = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.124 12.689a5.5 5.5 0 0 0 7.238-8.04l-7.238 8.04zM3.638 11.35l7.238-8.039a5.5 5.5 0 0 0-7.238 8.04zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z'/></svg>";

var bell = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M9.444 12.125H13c-1.193-1.193-1.745-3.096-1.658-5.71A3.344 3.344 0 0 0 8.827 3.06a.833.833 0 1 0-1.654 0 3.345 3.345 0 0 0-2.515 3.353C4.745 9.03 4.193 10.932 3 12.125h3.556a1.459 1.459 0 0 0 2.888 0z'/></svg>";

var bookmark = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.5 13.469V2.531h-7v10.938l3.5-3.5z'/></svg>";

var calendar = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.707 7.293A.997.997 0 0 1 12 8v3.715a.997.997 0 0 1-1 1H8.571v-1.143h2.286v-1.143H8.571V9.286h2.286V8.143H8.571V7H11c.276 0 .526.112.707.293zM4 10.358v-.072a1 1 0 0 1 1-1h1.286V8.143H4V7h2.429a.997.997 0 0 1 1 1v1.429a.997.997 0 0 1-1 1H5.143v1.143h2.286v1.143H4v-2.357zM13 3h2v12H1V3h2V1h2v2h6V1h2v2zM2 6v8h12V6H2z'/></svg>";

var caretDown = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 5.75L8 10.25l-4.5-4.5z'/></svg>";

var caretLeft = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.25 12.5L5.75 8l4.5-4.5z'/></svg>";

var caretRight = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.75 12.5l4.5-4.5-4.5-4.5z'/></svg>";

var caretUp = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 10.25L8 5.75l-4.5 4.5z'/></svg>";

var check = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M1.017 8.088l5.304 5.304 8.662-8.662-2.122-2.122-6.54 6.541-3.182-3.182z'/></svg>";

var checkCircle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4 8.05l1.215-1.215 1.823 1.823 3.747-3.747L12 6.127l-4.962 4.962L4 8.05z'/></svg>";

var checkCircleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM3 8.063l3.797 3.798L13 5.658 11.481 4.14 6.797 8.823 4.52 6.544 3 8.064z'/></svg>";

var clock = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4.62 9.11V7.64h2.578V3.11h1.718v6H4.62z'/></svg>";

var cog = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M9.5 2.707c.416.118.812.283 1.182.49l1.207-1.207 2.121 2.12-1.207 1.208c.207.37.372.766.49 1.182H15v3h-1.707a5.466 5.466 0 0 1-.49 1.182l1.207 1.207-2.12 2.121-1.208-1.207c-.37.207-.766.372-1.182.49V15h-3v-1.707a5.466 5.466 0 0 1-1.182-.49L4.111 14.01 1.99 11.89l1.207-1.208a5.466 5.466 0 0 1-.49-1.182H1v-3h1.707c.118-.416.283-.812.49-1.182L1.99 4.111 4.11 1.99l1.208 1.207c.37-.207.766-.372 1.182-.49V1h3v1.707zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'/></svg>";

var download = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 7L8 11.5 3.5 7h9zm-6-6h3v6h-3V1zM2 13h12v2H2v-2z'/></svg>";

var envelope = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M15 6v7.5H1V6l7 3.498 7-3.499zm0-2L8 7.497 1 3.999V2.5h14V4z'/></svg>";

var exclamation = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M6.5 11h3v3h-3v-3zM6 2h4l-.5 7h-3L6 2z'/></svg>";

var exclamationCircle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM7 10h2v2H7v-2zm-.5-6h3L9 9H7l-.5-5z'/></svg>";

var exclamationCircleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-1.333-4.333v2.666h2.666v-2.666H6.667zm-.667-8l.667 6.666h2.666L10 2.667H6z'/></svg>";

var exclamationDiamond = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 .929L15.071 8 8 15.071.929 8 8 .929zm0 1.515L2.444 8 8 13.556 13.556 8 8 2.444zM7.125 9.75h1.75v1.75h-1.75V9.75zM6.687 4.5h2.625l-.437 4.375h-1.75L6.687 4.5z'/></svg>";

var exclamationDiamondFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 .929L15.071 8 8 15.071.929 8 8 .929zm-1.094 9.259v2.187h2.188v-2.188H6.906zM6.36 3.625l.547 5.469h2.188l.547-5.469H6.359z'/></svg>";

var exclamationTriangle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 1l7 14H1L8 1zm0 2.236L2.618 14h10.764L8 3.236zm-.75 8.769h1.5v1.25h-1.5v-1.25zM7 6.25h2L8.75 11h-1.5L7 6.25z'/></svg>";

var exclamationTriangleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 1l7 14H1L8 1zm-.95 11.458v1.582h1.9v-1.582h-1.9zm-.27-7.36l.304 5.8h1.832l.305-5.8H6.779z'/></svg>";

var externalLink = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M7.884 13.5H13.5V9H15v6H1V1h6v1.5H2.5v11h5.384zm0-3.616L6.116 8.116l5-5L9 1h6v6l-2.116-2.116-5 5z'/></svg>";

var filter = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M9.65 8.285L14 3.5H2l4.35 4.785V14.5l3.3-1.1V8.285z'/></svg>";

var folder = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 4.571h6v8.572H2V2.857h5.012z'/></svg>";

var heart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 4.246a3.515 3.515 0 1 1 4.97 4.97L8 14.188l-4.97-4.97A3.515 3.515 0 0 1 8 4.247z'/></svg>";

var image = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M15 11v4H1V1h14v10zm-1.5-3.25V2.5h-11v10.75l11-5.5zM6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/></svg>";

var info = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M6.5 12h-2v1.5h7V12h-2V6.5h-5V8h2v4zM8 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'/></svg>";

var infoCircle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M7.045 10.5V8.045H5.773v-1h3.182V10.5h1.272v1H5.773v-1h1.272zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-7.59A.955.955 0 1 1 8 4a.955.955 0 0 1 0 1.91z'/></svg>";

var infoCircleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-1.145-3.95H5.327v1.2h5.346v-1.2H9.145V6.905H5.327v1.2h1.528v2.945zM8 5.54a1.145 1.145 0 1 0 0-2.29 1.145 1.145 0 0 0 0 2.29z'/></svg>";

var key = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8.907 6.555l4.053 4.053v2.342h-2.342V11.39h-1.56V9.828H7.495l-.931-.931a3.513 3.513 0 1 1 2.342-2.342zm-4.143-.63a1.17 1.17 0 1 0 0-2.342 1.17 1.17 0 0 0 0 2.342z'/></svg>";

var link = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.64 6.573l-1.217.95a1.5 1.5 0 0 0-2.346-.705l-3.94 3.078a1.5 1.5 0 0 0 1.846 2.364l.596-.465c.5.319 1.053.531 1.625.634l-1.297 1.013a3 3 0 1 1-3.694-4.728l3.94-3.078a3 3 0 0 1 4.486.937zM5.36 9.427l1.217-.95a1.5 1.5 0 0 0 2.346.705l3.94-3.078a1.5 1.5 0 0 0-1.846-2.364l-.596.465a4.497 4.497 0 0 0-1.625-.634l1.297-1.013a3 3 0 0 1 3.694 4.728l-3.94 3.078a3 3 0 0 1-4.486-.937z'/></svg>";

var mapMarker = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3.77 9.395a5.5 5.5 0 1 1 8.457.003l.016.016-3.41 5.116a1 1 0 0 1-1.665 0l-3.41-5.116.013-.019zM5.88 8a3 3 0 1 0 4.242-4.243A3 3 0 0 0 5.88 8z'/></svg>";

var menuBento = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3zM15.087 1v3h-3V1h3zM4 1v3H1V1h3zm5.587 0v3h-3V1h3zm5.5 11v3h-3v-3h3zM4 12v3H1v-3h3zm5.587 0v3h-3v-3h3z'/></svg>";

var menuDoner = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5 12.044h6v3H5v-3zM3 6.456h10v3H3v-3zm-2-5.5h14v3H1v-3z'/></svg>";

var menuHamburger = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M1 1h14v3H1V1zm0 11.087h14v3H1v-3zM1 6.5h14v3H1v-3z'/></svg>";

var menuKebab = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M6.5.956h3v3h-3v-3zm0 11.088h3v3h-3v-3zm0-5.588h3v3h-3v-3z'/></svg>";

var menuMeatball = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3z'/></svg>";

var minus = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M2 6.5h12v3H2z'/></svg>";

var padlockLocked = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 1 1 8 0h-1.5a2.5 2.5 0 0 0-5 0H4zm0 0h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z'/></svg>";

var padlockUnlocked = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 0 1 6.828-2.828l-1.06 1.06A2.5 2.5 0 0 0 5.5 6H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z'/></svg>";

var paperclip = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.475 7.146L6.232 11.39a.5.5 0 0 1-.707-.707l4.243-4.243.177.177-.177-.177a.5.5 0 1 0-.707-.707l-.177-.177.177.177-4.243 4.243-.707-.707 4.243-4.243a1.5 1.5 0 1 1 2.12 2.121zM7.646 2.904a3.5 3.5 0 0 1 4.95 4.95l-.707-.708a2.5 2.5 0 0 0-3.535-3.535l-.708-.707zM4.111 9.268l.707.707a1.5 1.5 0 0 0 2.121 2.121l.707.707a2.5 2.5 0 0 1-3.535-3.535zm3.535-6.364l.708.707-4.95 4.95a.5.5 0 1 1-.707-.707l4.95-4.95zm4.243 4.242l.707.708-4.95 4.95-.707-.708 4.95-4.95z'/></svg>";

var pencil = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.5 1.938a1.5 1.5 0 0 1 .549 2.049l-.25.433-2.598-1.5.25-.433a1.5 1.5 0 0 1 2.049-.55zM8.701 3.786l2.598 1.5-4 6.928-2.598-1.5 4-6.928zm-4.5 7.794l2.598 1.5-2.299.982-.299-2.482z'/></svg>";

var phone = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.686 13.545c-2.19 1.264-5.4-.198-7.171-3.266-1.771-3.067-1.432-6.58.757-7.843l.596-.344a.687.687 0 0 1 .938.252l1.49 2.579a.687.687 0 0 1-.252.938l-.397.23a1.146 1.146 0 0 1-1.253-.07l-.083.047.002.003a1.123 1.123 0 0 0-.08.043c-.834.48-.893 1.936-.134 3.251s2.05 1.99 2.882 1.51c.027-.015.052-.032.077-.049l.002.003.083-.047c-.05-.439.159-.886.566-1.12l.396-.23a.687.687 0 0 1 .94.252l1.488 2.579a.687.687 0 0 1-.251.939l-.596.343z'/></svg>";

var plus = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M6.5 6.5H2v3h4.5V14h3V9.5H14v-3H9.5V2h-3v4.5z'/></svg>";

var question = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M7 13h2v2H7v-2zm1-5.25A2.25 2.25 0 1 0 5.75 5.5l-2.244-.231A4.5 4.5 0 1 1 9 9.889v1.361H7l.197-3.5H8z'/></svg>";

var questionCircle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm-.8-2.1h1.6V13H7.2v-1.6zm.042-3.579h.759a1.607 1.607 0 1 0-1.607-1.607L4.79 6.05a3.214 3.214 0 0 1 6.424.165c0 1.488-1.047 2.763-2.42 3.13l-.016.977H7.242v-2.5z'/></svg>";

var questionCircleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-.872-3.295v1.743h1.743v-1.743H7.128zm.046-3.9v2.724H8.85l.018-1.066c1.495-.398 2.636-1.787 2.636-3.409a3.502 3.502 0 0 0-7-.18l1.747.18A1.751 1.751 0 1 1 8 7.805h-.826z'/></svg>";

var redo = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.95 3.05l-1.06 1.06A5.5 5.5 0 1 0 13.41 9h1.52A7.002 7.002 0 0 1 1 8a7 7 0 0 1 11.95-4.95zM15 1v5.833H9.167L15 1z'/></svg>";

var refresh = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M1.07 7a7.002 7.002 0 0 1 11.88-3.95l-1.06 1.06A5.502 5.502 0 0 0 2.591 7H1.07zm1.98 5.95l1.06-1.06A5.502 5.502 0 0 0 13.409 9h1.521A7.002 7.002 0 0 1 3.05 12.95zM15 1v5.833H9.167L15 1zM1 15V9.167h5.833L1 15z'/></svg>";

var search = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M11.04 9.606l3.867 3.868-1.433 1.433-3.868-3.867a5.5 5.5 0 1 1 1.433-1.433zM6.5 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'/></svg>";

var sortable = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 10.5L8 15l-4.5-4.5h9zm0-5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z'/></svg>";

var sortedDown = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 10.5L8 15l-4.5-4.5h9zm-6-5h3v5h-3v-5z'/></svg>";

var sortedUp = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 5.5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z'/></svg>";

var star = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 11.06l-4.017 2.453 1.092-4.578L1.5 5.872l4.692-.376L8 1.15l1.808 4.346 4.692.376-3.575 3.063 1.092 4.578z'/></svg>";

var times = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 5.879L4.818 2.697 2.697 4.818 5.879 8l-3.182 3.182 2.121 2.121L8 10.121l3.182 3.182 2.121-2.121L10.121 8l3.182-3.182-2.121-2.121z'/></svg>";

var timesCircle = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-6.9l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6z'/></svg>";

var timesCircleFill = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-8.6L5.6 4 4 5.6 6.4 8 4 10.4 5.6 12 8 9.6l2.4 2.4 1.6-1.6L9.6 8 12 5.6 10.4 4 8 6.4z'/></svg>";

var trash = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4.126 4a4.002 4.002 0 0 1 7.748 0H13a1 1 0 0 1 0 2v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 1 1 0-2h1.126zm1.582 0h4.584a2.5 2.5 0 0 0-4.584 0zM7.28 6v7.58H8.7V6H7.28zm2.88 0v7.58h1.42V6h-1.42zM4.4 6v7.58h1.42V6H4.4z'/></svg>";

var undo = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M1.07 9h1.52A5.502 5.502 0 0 0 13.5 8a5.5 5.5 0 0 0-9.39-3.89L3.05 3.05A7 7 0 1 1 1.07 9zM1 1l5.833 5.833H1V1z'/></svg>";

var upload = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M12.5 5.5L8 1 3.5 5.5h9zm-6 6v-6h3v6h-3zM2 13h12v2H2v-2z'/></svg>";

var user = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M6.022 9.929C4.244 10.427 3 11.576 3 12.915c0 .2.028.395.08.585h9.84c.052-.19.08-.386.08-.585 0-1.339-1.244-2.488-3.022-2.986A4.984 4.984 0 0 1 8 10.335a4.984 4.984 0 0 1-1.978-.406zM8 8.335a3 3 0 1 1 0-6 3 3 0 0 1 0 6z'/></svg>";

var Icons = {
    'angle-down': angleDown,
    'angle-left': angleLeft,
    'angle-right': angleRight,
    'angle-up': angleUp,
    'arrow-down': arrowDown,
    'arrow-left': arrowLeft,
    'arrow-right': arrowRight,
    'arrow-up': arrowUp,
    ban: ban,
    bell: bell,
    bookmark: bookmark,
    calendar: calendar,
    'caret-down': caretDown,
    'caret-left': caretLeft,
    'caret-right': caretRight,
    'caret-up': caretUp,
    check: check,
    'check-circle': checkCircle,
    'check-circle-fill': checkCircleFill,
    clock: clock,
    cog: cog,
    download: download,
    envelope: envelope,
    exclamation: exclamation,
    'exclamation-circle': exclamationCircle,
    'exclamation-circle-fill': exclamationCircleFill,
    'exclamation-diamond': exclamationDiamond,
    'exclamation-diamond-fill': exclamationDiamondFill,
    'exclamation-triangle': exclamationTriangle,
    'exclamation-triangle-fill': exclamationTriangleFill,
    'external-link': externalLink,
    filter: filter,
    folder: folder,
    heart: heart,
    image: image,
    info: info,
    'info-circle': infoCircle,
    'info-circle-fill': infoCircleFill,
    key: key,
    link: link,
    'map-marker': mapMarker,
    'menu-bento': menuBento,
    'menu-doner': menuDoner,
    'menu-hamburger': menuHamburger,
    'menu-kebab': menuKebab,
    'menu-meatball': menuMeatball,
    minus: minus,
    'padlock-locked': padlockLocked,
    'padlock-unlocked': padlockUnlocked,
    paperclip: paperclip,
    pencil: pencil,
    phone: phone,
    plus: plus,
    question: question,
    'question-circle': questionCircle,
    'question-circle-fill': questionCircleFill,
    redo: redo,
    refresh: refresh,
    search: search,
    sortable: sortable,
    'sorted-down': sortedDown,
    'sorted-up': sortedUp,
    star: star,
    times: times,
    'times-circle': timesCircle,
    'times-circle-fill': timesCircleFill,
    trash: trash,
    undo: undo,
    upload: upload,
    user: user
};

var DSIconElement = function (_DSElement) {
    inherits(DSIconElement, _DSElement);
    createClass(DSIconElement, null, [{
        key: 'is',
        get: function get$$1() {
            return 'ds-icon';
        }
    }, {
        key: 'icons',
        get: function get$$1() {
            return Icons;
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['type'];
        }
    }]);

    function DSIconElement(type) {
        classCallCheck(this, DSIconElement);

        var _this = possibleConstructorReturn(this, (DSIconElement.__proto__ || Object.getPrototypeOf(DSIconElement)).call(this));

        if (type) {
            _this.type = type;
        }
        return _this;
    }

    createClass(DSIconElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('type');
            this.$defaultAttribute('aria-hidden', true);
            this._render();
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {
            this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            // erase previously injected markup
            this.innerHTML = '';
            // add new SVG markup
            if (this.type in Icons) {
                var elSurrogate = document.createElement('div');
                elSurrogate.innerHTML = Icons[this.type];
                this.appendChild(elSurrogate.firstElementChild);
            }
        }
    }, {
        key: 'type',
        get: function get$$1() {
            return this.getAttribute('type');
        },
        set: function set$$1(newVal) {
            this.setAttribute('type', newVal);
        }
    }]);
    return DSIconElement;
}(DSElement);

var _tagName = 'ds-progress';
var _template = document.createElement('template');

_template.innerHTML = '\n    <style>\n        :host([indeterminate]) #fill {\n            width: 0 !important;\n        }\n\n        #fill {\n            background-color: currentColor;\n            box-sizing: border-box;\n            height: 100%;\n        }\n    </style>\n    <div id="fill"></div>\n';

var DSProgressElement = function (_DSElement) {
    inherits(DSProgressElement, _DSElement);
    createClass(DSProgressElement, null, [{
        key: 'is',
        get: function get$$1() {
            return _tagName;
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['value'];
        }
    }]);

    function DSProgressElement() {
        classCallCheck(this, DSProgressElement);

        var _this = possibleConstructorReturn(this, (DSProgressElement.__proto__ || Object.getPrototypeOf(DSProgressElement)).call(this, _tagName, _template));

        _this.$fill = _this.shadowRoot.getElementById('fill');
        _this.value = Number(_this.getAttribute('value')) || 0;
        return _this;
    }

    createClass(DSProgressElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('indeterminate');
            this.$upgradeProperty('value');
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            this.value = Number(newVal);

            this.$defaultAttribute('role', 'progressbar');
            this.$defaultAttribute('aria-valuemin', 0);
            this.$defaultAttribute('aria-valuemax', 100);
        }
    }, {
        key: 'value',
        get: function get$$1() {
            return this._value;
        },
        set: function set$$1(newVal) {
            if (typeof newVal !== 'number') {
                return;
            }

            var normVal = Number(newVal) || 0;
            normVal = normVal > 100 ? 100 : normVal;
            normVal = normVal < 0 ? 0 : normVal;
            normVal = Math.round(normVal);

            this.$fill.style.width = normVal + '%';
            this.setAttribute('aria-valuenow', normVal);
            this._value = normVal;
        }
    }, {
        key: 'indeterminate',
        get: function get$$1() {
            return this.hasAttribute('indeterminate');
        },
        set: function set$$1(newVal) {
            if (Boolean(newVal)) {
                this.setAttribute('indeterminate', true);
            } else {
                this.removeAttribute('indeterminate');
            }
        }
    }]);
    return DSProgressElement;
}(DSElement);

var DSRevealElement = function (_DSElement) {
    inherits(DSRevealElement, _DSElement);

    function DSRevealElement() {
        classCallCheck(this, DSRevealElement);
        return possibleConstructorReturn(this, (DSRevealElement.__proto__ || Object.getPrototypeOf(DSRevealElement)).apply(this, arguments));
    }

    createClass(DSRevealElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('open');
            this.setAttribute('aria-expanded', this.open);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            this.setAttribute('aria-expanded', newVal === '');
        }
    }, {
        key: 'open',
        set: function set$$1(value) {
            if (!!value) {
                this.setAttribute('open', '');
            } else {
                this.removeAttribute('open');
            }
        },
        get: function get$$1() {
            return this.hasAttribute('open');
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-reveal';
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['open'];
        }
    }]);
    return DSRevealElement;
}(DSElement);

var DSTabElement = function (_DSElement) {
    inherits(DSTabElement, _DSElement);

    function DSTabElement() {
        classCallCheck(this, DSTabElement);
        return possibleConstructorReturn(this, (DSTabElement.__proto__ || Object.getPrototypeOf(DSTabElement)).apply(this, arguments));
    }

    createClass(DSTabElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('current');
            this.$defaultAttribute('role', 'tab');
            this.setAttribute('aria-selected', this.current);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            this.setAttribute('aria-selected', newVal !== null);
        }
    }, {
        key: 'current',
        get: function get$$1() {
            return this.hasAttribute('current');
        },
        set: function set$$1(newVal) {
            if (newVal) {
                this.setAttribute('current', true);
            } else {
                this.removeAttribute('current');
            }
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-tab';
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['current'];
        }
    }]);
    return DSTabElement;
}(DSElement);

var DSTabcontentElement = function (_DSElement) {
    inherits(DSTabcontentElement, _DSElement);

    function DSTabcontentElement() {
        classCallCheck(this, DSTabcontentElement);
        return possibleConstructorReturn(this, (DSTabcontentElement.__proto__ || Object.getPrototypeOf(DSTabcontentElement)).apply(this, arguments));
    }

    createClass(DSTabcontentElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$defaultAttribute('role', 'presentation');
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-tabcontent';
        }
    }]);
    return DSTabcontentElement;
}(DSElement);

var DSTablistElement = function (_DSElement) {
    inherits(DSTablistElement, _DSElement);

    function DSTablistElement() {
        classCallCheck(this, DSTablistElement);
        return possibleConstructorReturn(this, (DSTablistElement.__proto__ || Object.getPrototypeOf(DSTablistElement)).apply(this, arguments));
    }

    createClass(DSTablistElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$defaultAttribute('role', 'tablist');
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-tablist';
        }
    }]);
    return DSTablistElement;
}(DSElement);

var DSTabpanelElement = function (_DSRevealElement) {
    inherits(DSTabpanelElement, _DSRevealElement);

    function DSTabpanelElement() {
        classCallCheck(this, DSTabpanelElement);
        return possibleConstructorReturn(this, (DSTabpanelElement.__proto__ || Object.getPrototypeOf(DSTabpanelElement)).apply(this, arguments));
    }

    createClass(DSTabpanelElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('open');
            this.$defaultAttribute('role', 'tabpanel');
            // initialize
            this.setAttribute('aria-expanded', this.open);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            var hasValue = newVal !== null;
            this.setAttribute('aria-expanded', hasValue);
            this.setAttribute('tabindex', hasValue ? 0 : -1);
        }
    }], [{
        key: 'is',
        get: function get$$1() {
            return 'ds-tabpanel';
        }
    }]);
    return DSTabpanelElement;
}(DSRevealElement);

var DSTabsetElement = function (_DSElement) {
    inherits(DSTabsetElement, _DSElement);
    createClass(DSTabsetElement, null, [{
        key: 'is',
        get: function get$$1() {
            return 'ds-tabset';
        }
    }, {
        key: 'observedAttributes',
        get: function get$$1() {
            return ['current-tab', 'tab-side'];
        }
    }]);

    function DSTabsetElement() {
        classCallCheck(this, DSTabsetElement);

        var _this = possibleConstructorReturn(this, (DSTabsetElement.__proto__ || Object.getPrototypeOf(DSTabsetElement)).call(this));

        _this.$tablist = _this.querySelector('ds-tablist');

        _this._onKeyUp = _this._onKeyUp.bind(_this);
        _this._onTabClick = _this._onTabClick.bind(_this);
        return _this;
    } //constructor()

    createClass(DSTabsetElement, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            this.$upgradeProperty('current-tab');
            this.$defaultAttribute('tab-side', 'top');

            this._setupIds();
            this.currentTab = Number(this.getAttribute('current-tab')) || 0;
            this.$tablist.addEventListener('keyup', this._onKeyUp);
            this.$tablist.addEventListener('keydown', this.$preventScroll);
            this.tabs.forEach(function (tab) {
                tab.addEventListener('click', _this2._onTabClick);
            });
        } //connectedCallback()

    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            var _this3 = this;

            this.$tablist.removeEventListener('keyup', this._onKeyUp);
            this.$tablist.removeEventListener('keydown', this.$preventScroll);
            this.tabs.forEach(function (tab) {
                tab.removeEventListener('click', _this3._onTabClick);
            });
        } //disconnectedCallback()

    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            switch (attr) {
                case 'current-tab':
                    if (!isNaN(newVal)) {
                        this.currentTab = Number(newVal);
                    }
                    break;

                case 'tab-side':
                    switch (newVal) {
                        case 'top':
                        case 'bottom':
                            this.$tablist.setAttribute('aria-orientation', 'horizontal');
                            break;

                        case 'left':
                        case 'right':
                            this.$tablist.setAttribute('aria-orientation', 'vertical');
                            break;

                        default:
                            /* do nothing */break;
                    }
                    break; //tab-side

                default:
                    /* do nothing */break;
            } //switch
        } //attributeChangedCallback()

    }, {
        key: '_selectNext',
        value: function _selectNext() {
            // if current tab is the last tab
            if (this.currentTab === this.tabs.length - 1) {
                // select first
                this.currentTab = 0;
            } else {
                // select next
                this.currentTab += 1;
            }
            this.tabs[this.currentTab].focus();
        } //_selectNext()

    }, {
        key: '_selectPrevious',
        value: function _selectPrevious() {
            // if current tab is the first tab
            if (this.currentTab === 0) {
                // select last
                this.currentTab = this.tabs.length - 1;
            } else {
                // select previous
                this.currentTab -= 1;
            }
            this.tabs[this.currentTab].focus();
        } //_selectPrevious()

        // Handle navigating the tabs via arrow keys

    }, {
        key: '_onKeyUp',
        value: function _onKeyUp(evt) {
            switch (this.tabSide) {
                case 'top':
                case 'bottom':
                    if (evt.keyCode === KEYS.Right) {
                        this._selectNext();
                    }

                    if (evt.keyCode === KEYS.Left) {
                        this._selectPrevious();
                    }
                    break;

                case 'left':
                case 'right':
                    if (evt.keyCode === KEYS.Down) {
                        this._selectNext();
                    }

                    if (evt.keyCode === KEYS.Up) {
                        this._selectPrevious();
                    }
                    break;

                default:
                    /* do nothing */break;
            } //tabSide
        } //_onKeyUp()

    }, {
        key: '_onTabClick',
        value: function _onTabClick(evt) {
            this.currentTab = this.tabs.indexOf(evt.target);
        }
    }, {
        key: '_setupIds',
        value: function _setupIds() {
            var _this4 = this;

            this.tabs.forEach(function (tab, idx) {
                var tabpanel = _this4.tabpanels[idx];
                // Default tab and panel ID
                var tabId = 'dsTab-' + _this4.$generateId();
                var tabpanelId = 'dsTabPanel-' + _this4.$generateId();

                // Set or keep Tab ID
                if (tab.hasAttribute('id')) {
                    tabId = tab.getAttribute('id');
                } else {
                    tab.setAttribute('id', tabId);
                }

                // Set or keep Panel ID
                if (tabpanel.hasAttribute('id')) {
                    tabpanelId = tabpanel.getAttribute('id');
                } else {
                    tabpanel.setAttribute('id', tabpanelId);
                }

                tab.setAttribute('aria-controls', tabpanelId);
                tabpanel.setAttribute('aria-labeledby', tabId);
            });
        } //_setupIds

    }, {
        key: 'currentTab',
        get: function get$$1() {
            return this._currentTab || 0;
        },
        set: function set$$1(idx) {
            if (isNaN(idx)) {
                throw new TypeError('\'currentTab\' expects an numeric index. Got ' + (typeof idx === 'undefined' ? 'undefined' : _typeof(idx)) + ' instead.');
            }

            if (idx < 0 || idx >= this.tabs.length) {
                throw new RangeError('\'currentTab\' index is out of bounds');
            }

            this._currentTab = idx;

            this.tabs.forEach(function (tab, tabIdx) {
                if (idx === tabIdx) {
                    tab.current = true;
                    tab.setAttribute('tabindex', 0);
                } else {
                    tab.current = false;
                    tab.setAttribute('tabindex', -1);
                    tab.blur();
                }
            });

            this.tabpanels.forEach(function (tabpanel, panelIdx) {
                tabpanel.open = idx === panelIdx;
            });
        } //SET:currentTab

    }, {
        key: 'tabSide',
        get: function get$$1() {
            return this.getAttribute('tab-side');
        },
        set: function set$$1(newVal) {
            this.setAttribute('tab-side', newVal);
        }
    }, {
        key: 'tabs',
        get: function get$$1() {
            return Array.from(this.querySelectorAll('ds-tablist > ds-tab'));
        }
    }, {
        key: 'tabpanels',
        get: function get$$1() {
            return Array.from(this.querySelectorAll('ds-tabpanel'));
        }
    }]);
    return DSTabsetElement;
}(DSElement);



var elements = Object.freeze({
	DSBusyElement: DSBusyElement,
	DSDisclosureElement: DSDisclosureElement,
	DSIconElement: DSIconElement,
	DSProgressElement: DSProgressElement,
	DSRevealElement: DSRevealElement,
	DSTabElement: DSTabElement,
	DSTabcontentElement: DSTabcontentElement,
	DSTablistElement: DSTablistElement,
	DSTabpanelElement: DSTabpanelElement,
	DSTabsetElement: DSTabsetElement
});

function initialize() {
    for (var attr in elements) {
        elements[attr].$define();
    }
}

var Segno = {
    DSElement: DSElement,
    elements: elements,
    initialize: initialize
};

var version = "0.0.2";

Segno.VERSION = version;

// Add Segno to global scope, if not already defined
if (!window.Segno) {
    window.Segno = Segno;
}

// If polyfills are used, initialize when polyfills are ready
// otherwise, initialize immediately
if (window.WebComponents) {
    window.addEventListener('WebComponentsReady', function () {
        Segno.initialize();
    });
} else {
    Segno.initialize();
}

})));
