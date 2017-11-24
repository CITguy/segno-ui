/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS = __webpack_require__(1);

var DsElement = function (_HTMLElement) {
    _inherits(DsElement, _HTMLElement);

    function DsElement(tagName, template) {
        _classCallCheck(this, DsElement);

        // Don't attach shadow DOM unless specified
        var _this = _possibleConstructorReturn(this, (DsElement.__proto__ || Object.getPrototypeOf(DsElement)).call(this));

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


    _createClass(DsElement, [{
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
        key: '$setAttribute',
        value: function $setAttribute(name, val) {
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

    return DsElement;
}(HTMLElement);

module.exports = DsElement;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYCODE = {
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
KEYCODE['Ctrl'] = KEYCODE['Control'];
KEYCODE['Del'] = KEYCODE['Delete'];
KEYCODE['Esc'] = KEYCODE['Escape'];
KEYCODE['Ins'] = KEYCODE['Insert'];
KEYCODE['Option'] = KEYCODE['Alt'];
KEYCODE['PgDown'] = KEYCODE['PageDown'];
KEYCODE['PgUp'] = KEYCODE['PageUp'];
KEYCODE['Return'] = KEYCODE['Enter'];

module.exports = KEYCODE;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsReveal, _DsElement);

    function DsReveal() {
        _classCallCheck(this, DsReveal);

        return _possibleConstructorReturn(this, (DsReveal.__proto__ || Object.getPrototypeOf(DsReveal)).apply(this, arguments));
    }

    _createClass(DsReveal, [{
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
        set: function set(value) {
            if (!!value) {
                this.setAttribute('open', '');
            } else {
                this.removeAttribute('open');
            }
        },
        get: function get() {
            return this.hasAttribute('open');
        }
    }], [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-reveal';
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['open'];
        }
    }]);

    return DsReveal;
}(DsElement);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('WebComponentsReady', function () {
    __webpack_require__(4).$define();
    __webpack_require__(6).$define();
    __webpack_require__(7).$define();
    __webpack_require__(77).$define();
    __webpack_require__(2).$define();
    __webpack_require__(79).$define();
    __webpack_require__(80).$define();
    __webpack_require__(81).$define();
    __webpack_require__(82).$define();
    __webpack_require__(83).$define();
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);
var _tagName = 'ds-busy';
var _template = document.createElement('template');

_template.innerHTML = '<style>' + __webpack_require__(5) + '</style>';

module.exports = function (_DsElement) {
    _inherits(DsBusy, _DsElement);

    _createClass(DsBusy, null, [{
        key: '$define',
        value: function $define() {
            customElements.define(_tagName, this);
        }
    }]);

    function DsBusy() {
        _classCallCheck(this, DsBusy);

        return _possibleConstructorReturn(this, (DsBusy.__proto__ || Object.getPrototypeOf(DsBusy)).call(this, _tagName, _template));
    }

    _createClass(DsBusy, [{
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
        get: function get() {
            return this.hasAttribute('paused');
        },
        set: function set(val) {
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
    }]);

    return DsBusy;
}(DsElement);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ":host{display:inline-block;height:1em;width:1em;animation:spin .8s linear infinite;animation-play-state:running;border-color:transparent transparent currentColor currentColor;border-radius:1em;border-style:solid;border-width:1px}*{box-sizing:border-box;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}:host([paused]){animation-play-state:paused}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS = __webpack_require__(1);
var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsDisclosure, _DsElement);

    function DsDisclosure() {
        _classCallCheck(this, DsDisclosure);

        return _possibleConstructorReturn(this, (DsDisclosure.__proto__ || Object.getPrototypeOf(DsDisclosure)).apply(this, arguments));
    }

    _createClass(DsDisclosure, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$setAttribute('role', 'button');
            this.$setAttribute('tabindex', 0);

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
            if (this.target) {
                this.target.open = newVal === 'true';
            }
        }
    }, {
        key: '_keyUp',
        //target

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
            this.expanded = !this.expanded;
        } //_toggle();

    }, {
        key: 'expanded',
        get: function get() {
            return this.getAttribute('aria-expanded') === 'true';
        },
        set: function set(newVal) {
            this.setAttribute('aria-expanded', !!newVal);
        }
    }, {
        key: 'target',
        get: function get() {
            if (!this._target) {
                // memoize target
                var targetId = this.getAttribute('aria-controls');
                this._target = document.getElementById(targetId);
            }

            return this._target;
        }
    }], [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-disclosure';
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['aria-expanded'];
        }
    }]);

    return DsDisclosure;
}(DsElement);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);
var _tagName = 'ds-icon';
var _template = document.createElement('template');
var _icons = {
    'angle-down': __webpack_require__(8),
    'angle-left': __webpack_require__(9),
    'angle-right': __webpack_require__(10),
    'angle-up': __webpack_require__(11),
    'arrow-down': __webpack_require__(12),
    'arrow-left': __webpack_require__(13),
    'arrow-right': __webpack_require__(14),
    'arrow-up': __webpack_require__(15),
    'ban': __webpack_require__(16),
    'bell': __webpack_require__(17),
    'bookmark': __webpack_require__(18),
    'calendar': __webpack_require__(19),
    'caret-down': __webpack_require__(20),
    'caret-left': __webpack_require__(21),
    'caret-right': __webpack_require__(22),
    'caret-up': __webpack_require__(23),
    'check': __webpack_require__(24),
    'check-circle': __webpack_require__(25),
    'check-circle-fill': __webpack_require__(26),
    'clock': __webpack_require__(27),
    'cog': __webpack_require__(28),
    'download': __webpack_require__(29),
    'envelope': __webpack_require__(30),
    'exclamation': __webpack_require__(31),
    'exclamation-circle': __webpack_require__(32),
    'exclamation-circle-fill': __webpack_require__(33),
    'exclamation-triangle': __webpack_require__(34),
    'exclamation-triangle-fill': __webpack_require__(35),
    'external-link': __webpack_require__(36),
    'filter': __webpack_require__(37),
    'folder': __webpack_require__(38),
    'heart': __webpack_require__(39),
    'image': __webpack_require__(40),
    'info': __webpack_require__(41),
    'info-circle': __webpack_require__(42),
    'info-circle-fill': __webpack_require__(43),
    'key': __webpack_require__(44),
    'link': __webpack_require__(45),
    'map-marker': __webpack_require__(46),
    'menu-bento': __webpack_require__(47),
    'menu-doner': __webpack_require__(48),
    'menu-hamburger': __webpack_require__(49),
    'menu-kebab': __webpack_require__(50),
    'menu-meatball': __webpack_require__(51),
    'minus': __webpack_require__(52),
    'padlock-locked': __webpack_require__(53),
    'padlock-unlocked': __webpack_require__(54),
    'paperclip': __webpack_require__(55),
    'pencil': __webpack_require__(56),
    'phone': __webpack_require__(57),
    'plus': __webpack_require__(58),
    'question': __webpack_require__(59),
    'question-circle': __webpack_require__(60),
    'question-circle-fill': __webpack_require__(61),
    'redo': __webpack_require__(62),
    'refresh': __webpack_require__(63),
    'search': __webpack_require__(64),
    'sortable': __webpack_require__(65),
    'sorted-down': __webpack_require__(66),
    'sorted-up': __webpack_require__(67),
    'star': __webpack_require__(68),
    'times': __webpack_require__(69),
    'times-circle': __webpack_require__(70),
    'times-circle-fill': __webpack_require__(71),
    'trash': __webpack_require__(72),
    'undo': __webpack_require__(73),
    'upload': __webpack_require__(74),
    'user': __webpack_require__(75)
};

_template.innerHTML = '\n    <style>' + __webpack_require__(76) + '</style>\n    <slot></slot>\n';

module.exports = function (_DsElement) {
    _inherits(DsIcon, _DsElement);

    _createClass(DsIcon, null, [{
        key: '$define',
        value: function $define() {
            customElements.define(_tagName, this);
        }
    }, {
        key: 'icons',
        get: function get() {
            return _icons;
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['type'];
        }
    }]);

    function DsIcon(type) {
        _classCallCheck(this, DsIcon);

        var _this = _possibleConstructorReturn(this, (DsIcon.__proto__ || Object.getPrototypeOf(DsIcon)).call(this, _tagName, _template));

        if (type) {
            _this.type = type;
        }
        return _this;
    }

    _createClass(DsIcon, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('type');
            this.$setAttribute('aria-hidden', true);
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
            if (this.type in _icons) {
                var elSurrogate = document.createElement('div');
                elSurrogate.innerHTML = _icons[this.type];
                this.appendChild(elSurrogate.firstElementChild);
            }
        }
    }, {
        key: 'type',
        get: function get() {
            return this.getAttribute('type');
        },
        set: function set(newVal) {
            this.setAttribute('type', newVal);
        }
    }]);

    return DsIcon;
}(DsElement);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 8.325l-4.55-4.55-1.95 1.95 6.5 6.5 6.5-6.5-1.95-1.95z\"/>\n</svg>\n"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.692 8L12 3.692l-1.846-1.846L4 8l6.154 6.154L12 12.308z\"/>\n</svg>\n"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.308 8L4 3.692l1.846-1.846L12 8l-6.154 6.154L4 12.308z\"/>\n</svg>\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 7.675l-4.55 4.55-1.95-1.95 6.5-6.5 6.5 6.5-1.95 1.95z\"/>\n</svg>\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7 10.5H3.5L8 15l4.5-4.5H9V1H7v9.5z\"/>\n</svg>\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.5 7V3.5L1 8l4.5 4.5V9H15V7H5.5z\"/>\n</svg>\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10.5 9v3.5L15 8l-4.5-4.5V7H1v2h9.5z\"/>\n</svg>\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9 5.5h3.5L8 1 3.5 5.5H7V15h2V5.5z\"/>\n</svg>\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.124 12.689a5.5 5.5 0 0 0 7.238-8.04l-7.238 8.04zM3.638 11.35l7.238-8.039a5.5 5.5 0 0 0-7.238 8.04zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z\"/>\n</svg>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.444 12.125H13c-1.193-1.193-1.745-3.096-1.658-5.71A3.344 3.344 0 0 0 8.827 3.06a.833.833 0 1 0-1.654 0 3.345 3.345 0 0 0-2.515 3.353C4.745 9.03 4.193 10.932 3 12.125h3.556a1.459 1.459 0 0 0 2.888 0z\"/>\n</svg>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.5 13.469V2.531h-7v10.938l3.5-3.5z\"/>\n</svg>\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.707 7.293A.997.997 0 0 1 12 8v3.715a.997.997 0 0 1-1 1H8.571v-1.143h2.286v-1.143H8.571V9.286h2.286V8.143H8.571V7H11c.276 0 .526.112.707.293zM4 10.358v-.072a1 1 0 0 1 1-1h1.286V8.143H4V7h2.429a.997.997 0 0 1 1 1v1.429a.997.997 0 0 1-1 1H5.143v1.143h2.286v1.143H4v-2.357zM13 3h2v12H1V3h2V1h2v2h6V1h2v2zM2 6v8h12V6H2z\"/>\n</svg>\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.75L8 10.25l-4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10.25 12.5L5.75 8l4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.75 12.5l4.5-4.5-4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.25L8 5.75l-4.5 4.5z\"/>\n</svg>\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.017 8.088l5.304 5.304 8.662-8.662-2.122-2.122-6.54 6.541-3.182-3.182z\"/>\n</svg>\n"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4 8.05l1.215-1.215 1.823 1.823 3.747-3.747L12 6.127l-4.962 4.962L4 8.05z\"/>\n</svg>\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM3 8.063l3.797 3.798L13 5.658 11.481 4.14 6.797 8.823 4.52 6.544 3 8.064z\"/>\n</svg>\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4.62 9.11V7.64h2.578V3.11h1.718v6H4.62z\"/>\n</svg>\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.5 2.707c.416.118.812.283 1.182.49l1.207-1.207 2.121 2.12-1.207 1.208c.207.37.372.766.49 1.182H15v3h-1.707a5.466 5.466 0 0 1-.49 1.182l1.207 1.207-2.12 2.121-1.208-1.207c-.37.207-.766.372-1.182.49V15h-3v-1.707a5.466 5.466 0 0 1-1.182-.49L4.111 14.01 1.99 11.89l1.207-1.208a5.466 5.466 0 0 1-.49-1.182H1v-3h1.707c.118-.416.283-.812.49-1.182L1.99 4.111 4.11 1.99l1.208 1.207c.37-.207.766-.372 1.182-.49V1h3v1.707zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"/>\n</svg>\n"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 7L8 11.5 3.5 7h9zm-6-6h3v6h-3V1zM2 13h12v2H2v-2z\"/>\n</svg>\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15 6v7.5H1V6l7 3.498 7-3.499zm0-2L8 7.497 1 3.999V2.5h14V4z\"/>\n</svg>\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 11h3v3h-3v-3zM6 2h4l-.5 7h-3L6 2z\"/>\n</svg>\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM7 10h2v2H7v-2zm-.5-6h3L9 9H7l-.5-5z\"/>\n</svg>\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-1.333-4.333v2.666h2.666v-2.666H6.667zm-.667-8l.667 6.666h2.666L10 2.667H6z\"/>\n</svg>\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 1l7 14H1L8 1zm0 2.236L2.618 14h10.764L8 3.236zm-.75 8.769h1.5v1.25h-1.5v-1.25zM7 6.25h2L8.75 11h-1.5L7 6.25z\"/>\n</svg>\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 1l7 14H1L8 1zm-.95 11.458v1.582h1.9v-1.582h-1.9zm-.27-7.36l.304 5.8h1.832l.305-5.8H6.779z\"/>\n</svg>\n"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.884 13.5H13.5V9H15v6H1V1h6v1.5H2.5v11h5.384zm0-3.616L6.116 8.116l5-5L9 1h6v6l-2.116-2.116-5 5z\"/>\n</svg>\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.65 8.285L14 3.5H2l4.35 4.785V14.5l3.3-1.1V8.285z\"/>\n</svg>\n"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 4.571h6v8.572H2V2.857h5.012z\"/>\n</svg>\n"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 4.246a3.515 3.515 0 1 1 4.97 4.97L8 14.188l-4.97-4.97A3.515 3.515 0 0 1 8 4.247z\"/>\n</svg>\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15 11v4H1V1h14v10zm-1.5-3.25V2.5h-11v10.75l11-5.5zM6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"/>\n</svg>\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 12h-2v1.5h7V12h-2V6.5h-5V8h2v4zM8 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>\n</svg>\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.045 10.5V8.045H5.773v-1h3.182V10.5h1.272v1H5.773v-1h1.272zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-7.59A.955.955 0 1 1 8 4a.955.955 0 0 1 0 1.91z\"/>\n</svg>\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-1.145-3.95H5.327v1.2h5.346v-1.2H9.145V6.905H5.327v1.2h1.528v2.945zM8 5.54a1.145 1.145 0 1 0 0-2.29 1.145 1.145 0 0 0 0 2.29z\"/>\n</svg>\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.907 6.555l4.053 4.053v2.342h-2.342V11.39h-1.56V9.828H7.495l-.931-.931a3.513 3.513 0 1 1 2.342-2.342zm-4.143-.63a1.17 1.17 0 1 0 0-2.342 1.17 1.17 0 0 0 0 2.342z\"/>\n</svg>\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.64 6.573l-1.217.95a1.5 1.5 0 0 0-2.346-.705l-3.94 3.078a1.5 1.5 0 0 0 1.846 2.364l.596-.465c.5.319 1.053.531 1.625.634l-1.297 1.013a3 3 0 1 1-3.694-4.728l3.94-3.078a3 3 0 0 1 4.486.937zM5.36 9.427l1.217-.95a1.5 1.5 0 0 0 2.346.705l3.94-3.078a1.5 1.5 0 0 0-1.846-2.364l-.596.465a4.497 4.497 0 0 0-1.625-.634l1.297-1.013a3 3 0 0 1 3.694 4.728l-3.94 3.078a3 3 0 0 1-4.486-.937z\"/>\n</svg>\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M3.77 9.395a5.5 5.5 0 1 1 8.457.003l.016.016-3.41 5.116a1 1 0 0 1-1.665 0l-3.41-5.116.013-.019zM5.88 8a3 3 0 1 0 4.242-4.243A3 3 0 0 0 5.88 8z\"/>\n</svg>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3zM15.087 1v3h-3V1h3zM4 1v3H1V1h3zm5.587 0v3h-3V1h3zm5.5 11v3h-3v-3h3zM4 12v3H1v-3h3zm5.587 0v3h-3v-3h3z\"/>\n</svg>\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5 12.044h6v3H5v-3zM3 6.456h10v3H3v-3zm-2-5.5h14v3H1v-3z\"/>\n</svg>\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 1h14v3H1V1zm0 11.087h14v3H1v-3zM1 6.5h14v3H1v-3z\"/>\n</svg>\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5.956h3v3h-3v-3zm0 11.088h3v3h-3v-3zm0-5.588h3v3h-3v-3z\"/>\n</svg>\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3z\"/>\n</svg>\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M2 6.5h12v3H2z\"/>\n</svg>\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 1 1 8 0h-1.5a2.5 2.5 0 0 0-5 0H4zm0 0h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z\"/>\n</svg>\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 0 1 6.828-2.828l-1.06 1.06A2.5 2.5 0 0 0 5.5 6H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z\"/>\n</svg>\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.475 7.146L6.232 11.39a.5.5 0 0 1-.707-.707l4.243-4.243.177.177-.177-.177a.5.5 0 1 0-.707-.707l-.177-.177.177.177-4.243 4.243-.707-.707 4.243-4.243a1.5 1.5 0 1 1 2.12 2.121zM7.646 2.904a3.5 3.5 0 0 1 4.95 4.95l-.707-.708a2.5 2.5 0 0 0-3.535-3.535l-.708-.707zM4.111 9.268l.707.707a1.5 1.5 0 0 0 2.121 2.121l.707.707a2.5 2.5 0 0 1-3.535-3.535zm3.535-6.364l.708.707-4.95 4.95a.5.5 0 1 1-.707-.707l4.95-4.95zm4.243 4.242l.707.708-4.95 4.95-.707-.708 4.95-4.95z\"/>\n</svg>\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.5 1.938a1.5 1.5 0 0 1 .549 2.049l-.25.433-2.598-1.5.25-.433a1.5 1.5 0 0 1 2.049-.55zM8.701 3.786l2.598 1.5-4 6.928-2.598-1.5 4-6.928zm-4.5 7.794l2.598 1.5-2.299.982-.299-2.482z\"/>\n</svg>\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.686 13.545c-2.19 1.264-5.4-.198-7.171-3.266-1.771-3.067-1.432-6.58.757-7.843l.596-.344a.687.687 0 0 1 .938.252l1.49 2.579a.687.687 0 0 1-.252.938l-.397.23a1.146 1.146 0 0 1-1.253-.07l-.083.047.002.003a1.123 1.123 0 0 0-.08.043c-.834.48-.893 1.936-.134 3.251s2.05 1.99 2.882 1.51c.027-.015.052-.032.077-.049l.002.003.083-.047c-.05-.439.159-.886.566-1.12l.396-.23a.687.687 0 0 1 .94.252l1.488 2.579a.687.687 0 0 1-.251.939l-.596.343z\"/>\n</svg>\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 6.5H2v3h4.5V14h3V9.5H14v-3H9.5V2h-3v4.5z\"/>\n</svg>\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M7 13h2v2H7v-2zm1-5.25A2.25 2.25 0 1 0 5.75 5.5l-2.244-.231A4.5 4.5 0 1 1 9 9.889v1.361H7l.197-3.5H8z\"/>\n</svg>\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm-.8-2.1h1.6V13H7.2v-1.6zm.042-3.579h.759a1.607 1.607 0 1 0-1.607-1.607L4.79 6.05a3.214 3.214 0 0 1 6.424.165c0 1.488-1.047 2.763-2.42 3.13l-.016.977H7.242v-2.5z\"/>\n</svg>\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-.872-3.295v1.743h1.743v-1.743H7.128zm.046-3.9v2.724H8.85l.018-1.066c1.495-.398 2.636-1.787 2.636-3.409a3.502 3.502 0 0 0-7-.18l1.747.18A1.751 1.751 0 1 1 8 7.805h-.826z\"/>\n</svg>\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.95 3.05l-1.06 1.06A5.5 5.5 0 1 0 13.41 9h1.52A7.002 7.002 0 0 1 1 8a7 7 0 0 1 11.95-4.95zM15 1v5.833H9.167L15 1z\"/>\n</svg>\n"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.07 7a7.002 7.002 0 0 1 11.88-3.95l-1.06 1.06A5.502 5.502 0 0 0 2.591 7H1.07zm1.98 5.95l1.06-1.06A5.502 5.502 0 0 0 13.409 9h1.521A7.002 7.002 0 0 1 3.05 12.95zM15 1v5.833H9.167L15 1zM1 15V9.167h5.833L1 15z\"/>\n</svg>\n"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.04 9.606l3.867 3.868-1.433 1.433-3.868-3.867a5.5 5.5 0 1 1 1.433-1.433zM6.5 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"/>\n</svg>\n"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.5L8 15l-4.5-4.5h9zm0-5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.5L8 15l-4.5-4.5h9zm-6-5h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 11.06l-4.017 2.453 1.092-4.578L1.5 5.872l4.692-.376L8 1.15l1.808 4.346 4.692.376-3.575 3.063 1.092 4.578z\"/>\n</svg>\n"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 5.879L4.818 2.697 2.697 4.818 5.879 8l-3.182 3.182 2.121 2.121L8 10.121l3.182 3.182 2.121-2.121L10.121 8l3.182-3.182-2.121-2.121z\"/>\n</svg>\n"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-6.9l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6z\"/>\n</svg>\n"

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-8.6L5.6 4 4 5.6 6.4 8 4 10.4 5.6 12 8 9.6l2.4 2.4 1.6-1.6L9.6 8 12 5.6 10.4 4 8 6.4z\"/>\n</svg>\n"

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M4.126 4a4.002 4.002 0 0 1 7.748 0H13a1 1 0 0 1 0 2v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 1 1 0-2h1.126zm1.582 0h4.584a2.5 2.5 0 0 0-4.584 0zM7.28 6v7.58H8.7V6H7.28zm2.88 0v7.58h1.42V6h-1.42zM4.4 6v7.58h1.42V6H4.4z\"/>\n</svg>\n"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.07 9h1.52A5.502 5.502 0 0 0 13.5 8a5.5 5.5 0 0 0-9.39-3.89L3.05 3.05A7 7 0 1 1 1.07 9zM1 1l5.833 5.833H1V1z\"/>\n</svg>\n"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.5L8 1 3.5 5.5h9zm-6 6v-6h3v6h-3zM2 13h12v2H2v-2z\"/>\n</svg>\n"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.022 9.929C4.244 10.427 3 11.576 3 12.915c0 .2.028.395.08.585h9.84c.052-.19.08-.386.08-.585 0-1.339-1.244-2.488-3.022-2.986A4.984 4.984 0 0 1 8 10.335a4.984 4.984 0 0 1-1.978-.406zM8 8.335a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/>\n</svg>\n"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = ":host{display:inline-block;flex-shrink:0;height:1em;vertical-align:-2px;width:1em;background-color:inherit;color:inherit}*{box-sizing:border-box;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}::slotted(svg){fill:currentColor;stroke:none}"

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);
var _tagName = 'ds-progress';
var _template = document.createElement('template');

_template.innerHTML = '\n    <style>' + __webpack_require__(78) + '</style>\n    <div id="fill"></div>\n';

module.exports = function (_DsElement) {
    _inherits(DsProgress, _DsElement);

    _createClass(DsProgress, null, [{
        key: '$define',
        value: function $define() {
            customElements.define(_tagName, this);
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['value'];
        }
    }]);

    function DsProgress() {
        _classCallCheck(this, DsProgress);

        var _this = _possibleConstructorReturn(this, (DsProgress.__proto__ || Object.getPrototypeOf(DsProgress)).call(this, _tagName, _template));

        _this.$fill = _this.shadowRoot.getElementById('fill');
        _this.value = Number(_this.getAttribute('value')) || 0;
        return _this;
    }

    _createClass(DsProgress, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('indeterminate');
            this.$upgradeProperty('value');
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attrName, oldVal, newVal) {
            this.value = Number(newVal);

            this.$setAttribute('role', 'progressbar');
            this.$setAttribute('aria-valuemin', 0);
            this.$setAttribute('aria-valuemax', 100);
        }
    }, {
        key: 'value',
        get: function get() {
            return this._value;
        },
        set: function set(newVal) {
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
        get: function get() {
            return this.hasAttribute('indeterminate');
        },
        set: function set(newVal) {
            if (Boolean(newVal)) {
                this.setAttribute('indeterminate', true);
            } else {
                this.removeAttribute('indeterminate');
            }
        }
    }]);

    return DsProgress;
}(DsElement);

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "#fill,*{box-sizing:border-box}:host{background-color:#e6e6e6;border:1px solid;box-sizing:border-box;color:grey;display:block;height:.5em;margin:0;padding:0}*{font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}:host([indeterminate]) #fill{width:0!important}#fill{background-color:currentColor;height:100%}"

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsTab, _DsElement);

    function DsTab() {
        _classCallCheck(this, DsTab);

        return _possibleConstructorReturn(this, (DsTab.__proto__ || Object.getPrototypeOf(DsTab)).apply(this, arguments));
    }

    _createClass(DsTab, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('current');
            this.$setAttribute('role', 'tab');
            // use vanilla setAttribute here
            this.setAttribute('aria-selected', this.current);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {
            this.setAttribute('aria-selected', newVal !== null);
        }
    }, {
        key: 'current',
        get: function get() {
            return this.hasAttribute('current');
        },
        set: function set(newVal) {
            if (newVal) {
                this.setAttribute('current', true);
            } else {
                this.removeAttribute('current');
            }
        }
    }], [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-tab';
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['current'];
        }
    }]);

    return DsTab;
}(DsElement);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsTabcontent, _DsElement);

    function DsTabcontent() {
        _classCallCheck(this, DsTabcontent);

        return _possibleConstructorReturn(this, (DsTabcontent.__proto__ || Object.getPrototypeOf(DsTabcontent)).apply(this, arguments));
    }

    _createClass(DsTabcontent, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$setAttribute('role', 'presentation');
        }
    }], [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-tabcontent';
        }
    }]);

    return DsTabcontent;
}(DsElement);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsTablist, _DsElement);

    function DsTablist() {
        _classCallCheck(this, DsTablist);

        return _possibleConstructorReturn(this, (DsTablist.__proto__ || Object.getPrototypeOf(DsTablist)).apply(this, arguments));
    }

    _createClass(DsTablist, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$setAttribute('role', 'tablist');
        }
    }], [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-tablist';
        }
    }]);

    return DsTablist;
}(DsElement);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsReveal = __webpack_require__(2);

module.exports = function (_DsReveal) {
    _inherits(DsTabpanel, _DsReveal);

    function DsTabpanel() {
        _classCallCheck(this, DsTabpanel);

        return _possibleConstructorReturn(this, (DsTabpanel.__proto__ || Object.getPrototypeOf(DsTabpanel)).apply(this, arguments));
    }

    _createClass(DsTabpanel, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$upgradeProperty('open');
            this.$setAttribute('role', 'tabpanel');
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
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-tabpanel';
        }
    }]);

    return DsTabpanel;
}(DsReveal);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS = __webpack_require__(1);
var DsElement = __webpack_require__(0);

module.exports = function (_DsElement) {
    _inherits(DsTabset, _DsElement);

    _createClass(DsTabset, null, [{
        key: '$define',
        value: function $define() {
            customElements.define(this.is, this);
        }
    }, {
        key: 'is',
        get: function get() {
            return 'ds-tabset';
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['current-tab', 'tab-side'];
        }

        /* LIFECYCLE CALLBACKS */

    }]);

    function DsTabset() {
        _classCallCheck(this, DsTabset);

        var _this = _possibleConstructorReturn(this, (DsTabset.__proto__ || Object.getPrototypeOf(DsTabset)).call(this));

        _this.$tablist = _this.querySelector('ds-tablist');

        _this._onKeyUp = _this._onKeyUp.bind(_this);
        _this._onTabClick = _this._onTabClick.bind(_this);
        return _this;
    } //constructor()

    _createClass(DsTabset, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            this.$upgradeProperty('current-tab');
            this.$setAttribute('tab-side', 'top');

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

        /* PROPERTIES */

    }, {
        key: '_selectNext',


        /* PRIVATE FUNCTIONS */

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
                // Default IDs
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
        get: function get() {
            return this._currentTab || 0;
        },
        set: function set(idx) {
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
        get: function get() {
            return this.getAttribute('tab-side');
        },
        set: function set(newVal) {
            this.setAttribute('tab-side', newVal);
        }
    }, {
        key: 'tabs',
        get: function get() {
            return Array.from(this.querySelectorAll('ds-tablist > ds-tab'));
        }
    }, {
        key: 'tabpanels',
        get: function get() {
            return Array.from(this.querySelectorAll('ds-tabpanel'));
        }
    }]);

    return DsTabset;
}(DsElement);

/***/ })
/******/ ]);