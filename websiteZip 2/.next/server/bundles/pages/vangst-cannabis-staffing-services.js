module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Config */
var Config = {
  apiUrl: 'http://54.185.129.161:8080/index.php'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mailchimp_subscribe__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_mailchimp_subscribe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_mailchimp_subscribe__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // a basic form

var CustomForm = function CustomForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      onValidated = _ref.onValidated;
  var email, fname, lname, reason;

  var submit = function submit() {
    return email && fname && lname && reason && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      MMERGE5: reason.value
    });
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3480705920"
  }, status === "sending" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      color: "blue"
    },
    className: "jsx-3480705920"
  }, "sending..."), status === "error" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: "jsx-3480705920"
  }), status === "success" && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    className: "jsx-3480705920"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    className: "jsx-3480705920"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3480705920" + " " + "mailchimp-form"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    style: {
      fontSize: "1em",
      padding: 5
    },
    ref: function ref(node) {
      return fname = node;
    },
    type: "text",
    placeholder: "First name",
    className: "jsx-3480705920" + " " + "newsletter-input"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    style: {
      fontSize: "1em",
      padding: 5
    },
    ref: function ref(node) {
      return lname = node;
    },
    type: "text",
    placeholder: "Last name",
    className: "jsx-3480705920" + " " + "newsletter-input"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    style: {
      fontSize: "1em",
      padding: 5
    },
    ref: function ref(node) {
      return email = node;
    },
    type: "email",
    placeholder: "Email",
    className: "jsx-3480705920" + " " + "newsletter-input"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
    style: {
      fontSize: "1em",
      padding: 5
    },
    ref: function ref(node) {
      return reason = node;
    },
    className: "jsx-3480705920" + " " + "newsletter-select"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "",
    disabled: true,
    selected: true,
    hidden: true,
    className: "jsx-3480705920"
  }, "How Can We Help?", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "jsx-3480705920"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/images/vangst-main-page/down-arrow-gray.png",
    className: "jsx-3480705920"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "Hiring Talent",
    className: "jsx-3480705920"
  }, "Hiring Talent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "Looking For Work",
    className: "jsx-3480705920"
  }, "Looking for work"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "Other",
    className: "jsx-3480705920"
  }, "Other")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    id: "footer-signup-button",
    onClick: submit,
    className: "jsx-3480705920" + " " + "btn btn-outline text-white newsletter-button"
  }, "Sign Up")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3480705920",
    css: ["#footer-signup-button.jsx-3480705920{background-color:#f0561f;}"]
  }));
};

var MailChimpForm =
/*#__PURE__*/
function (_Component) {
  _inherits(MailChimpForm, _Component);

  function MailChimpForm() {
    _classCallCheck(this, MailChimpForm);

    return _possibleConstructorReturn(this, (MailChimpForm.__proto__ || Object.getPrototypeOf(MailChimpForm)).apply(this, arguments));
  }

  _createClass(MailChimpForm, [{
    key: "render",
    value: function render() {
      var url = "https://vangsttalent.us11.list-manage.com/subscribe/post?u=8efd9047be67bccfe48fccbf3&amp;id=b86030e328";
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_mailchimp_subscribe___default.a, {
        url: url,
        render: function render(_ref2) {
          var subscribe = _ref2.subscribe,
              status = _ref2.status,
              message = _ref2.message;
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CustomForm, {
            status: status,
            message: message,
            onValidated: function onValidated(formData) {
              return subscribe(formData);
            }
          });
        }
      }));
    }
  }]);

  return MailChimpForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MailChimpForm);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/MailChimpForm.js
var MailChimpForm = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Footer.js




var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("footer", null, external__react__default.a.createElement("div", {
    className: "footer-container"
  }, external__react__default.a.createElement("div", {
    className: "col-12 col-lg-4 footer-logo-container"
  }, external__react__default.a.createElement("img", {
    src: "/static/images/logos/logo.png"
  })), external__react__default.a.createElement("div", {
    className: "col-12 col-lg-8 footer-content"
  }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
    className: "text-white footer-input-title text-center"
  }, "Sign up for our newsletter and stay in the know"), external__react__default.a.createElement("div", {
    className: "mailchimp-form"
  }, external__react__default.a.createElement(MailChimpForm["a" /* default */], null))), external__react__default.a.createElement("div", {
    className: "row footer-links-container col-xl-10"
  }, external__react__default.a.createElement("ul", {
    id: "footer-list-1",
    className: "footer-link-group"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
    href: "/about-vangst-talent"
  }, external__react__default.a.createElement("a", {
    className: "nav-link text-white"
  }, "ABOUT VANGST"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement(link__default.a, {
    href: "/vangst-internal-positions"
  }, external__react__default.a.createElement("a", {
    className: "nav-link text-white"
  }, "WORK FOR VANGST"))), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    className: "nav-link text-white",
    href: "https://blog.vangst.com/"
  }, "BLOG")), external__react__default.a.createElement("li", {
    className: "nav-link footer-copyright"
  }, "\xA9 2018 VANGST")), external__react__default.a.createElement("ul", {
    className: "footer-link-group"
  }, external__react__default.a.createElement("li", {
    className: "nav-link text-white"
  }, "DENVER, CO"), external__react__default.a.createElement("li", {
    className: "nav-link text-white"
  }, "SANTA MONICA, CA"), external__react__default.a.createElement("li", {
    className: "nav-link text-white"
  }, external__react__default.a.createElement("a", {
    id: "email-link",
    href: "mailto:info@vangst.com"
  }, "INFO@VANGST.COM")), external__react__default.a.createElement("li", {
    className: "nav-link text-white"
  }, external__react__default.a.createElement("a", {
    id: "email-link",
    href: "tel:+18444826478"
  }, "(844)-482-6478"))), external__react__default.a.createElement("div", {
    className: "footer-social-icons"
  }, external__react__default.a.createElement("a", {
    href: "https://www.instagram.com/vangsttalent/?hl=en",
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    src: "static/images/social/insta-white.png"
  })), external__react__default.a.createElement("a", {
    href: "https://www.facebook.com/Vangsttalent/",
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    src: "static/images/social/facebook-white.png"
  })), external__react__default.a.createElement("a", {
    href: "https://www.linkedin.com/company/vangst/",
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    src: "static/images/social/linked-in-white.png"
  })), external__react__default.a.createElement("a", {
    href: "https://twitter.com/vangsttalent?lang=en",
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    src: "static/images/social/twitter-white.png"
  })))))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.js



var Layout_Layout = function Layout(props) {
  return external__react__default.a.createElement("div", null, props.children, external__react__default.a.createElement(components_Footer, null));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PageWrapper = function PageWrapper(Comp) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Comp, this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(args) {
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = _objectSpread;
                    _context.t1 = {};

                    if (!Comp.getInitialProps) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 5;
                    return Comp.getInitialProps(args);

                  case 5:
                    _context.t2 = _context.sent;
                    _context.next = 9;
                    break;

                  case 8:
                    _context.t2 = null;

                  case 9:
                    _context.t3 = _context.t2;
                    return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3));

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return _class;
    }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PageWrapper);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var linkStyle = {
  marginRight: 15
};

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Navbar"], {
        className: "nav-menu",
        color: "transparent",
        light: true,
        expand: "lg"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarBrand"], {
        href: "/vangst-main-page"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "brand-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vangst-logo-graphic d-lg-none",
        src: "/static/images/logos/logo-graphic.png",
        alt: "vangst logo"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vangst-logo-text d-lg-none",
        src: "/static/images/logos/logo-text.png",
        alt: "vangst logo text"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "vangst-logo d-none d-lg-block",
        src: "/static/images/logos/logo.png",
        alt: "vangst logo"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavbarToggler"], {
        onClick: this.toggle
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link",
        href: "/vangst-cannabis-staffing-services"
      }, "JOB SEEKERS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link",
        href: "/cannabis-employers"
      }, "EMPLOYERS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link",
        href: "https://blog.vangst.com/cannabis-salary-guide-2018/"
      }, "INDUSTRY INSIGHTS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link",
        href: "/vangst-talent-careerfair"
      }, "CAREER FAIR")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownToggle"], {
        nav: true,
        caret: true,
        className: "nav-link"
      }, "ABOUT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownMenu"], {
        right: true
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownItem"], {
        className: "nav-link"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link dropdown-link",
        href: "https://blog.vangst.com/"
      }, "BLOG")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownItem"], {
        className: "nav-link"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link dropdown-link",
        href: "/about-vangst-talent"
      }, "TEAM")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownItem"], {
        className: "nav-link"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link dropdown-link",
        href: "/vangst-internal-positions"
      }, "WORK FOR VANGST")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-divider"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["DropdownItem"], {
        className: "nav-link"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link dropdown-link",
        href: "/contact-vangst-talent"
      }, "CONTACT")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "\n            .dropdown-link {padding: 0 0 0 10px !important; width: 100%;}\n            .nav-link {padding-right: 0; padding-left: 0; margin: 0;}\n          "));
    }
  }]);

  return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_styles_style_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_styles_style_scss__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      // Rich Social Snippets data
      var data = {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Vangst",
        url: "https://vangst.com",
        sameAs: ["https://www.facebook.com/Vangsttalent/", "https://twitter.com/vangsttalent", "https://www.linkedin.com/company/vangst/", "https://www.instagram.com/vangsttalent/"]
      }; // Rich Card Logo data

      var data2 = {
        "@context": "http://schema.org",
        "@type": "Organization",
        url: "https://vangst.com",
        logo: "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
      };

      var JsonLd = function JsonLd(_ref) {
        var data = _ref.data;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "/static/images/logos/logo-graphic.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: this.props.description
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "keywords",
        content: this.props.keywords
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge, chrome=1"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "robots",
        content: "index, follow"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "language",
        content: "English"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        itemprop: "name",
        content: this.props.title
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        itemprop: "description",
        content: this.props.description
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        itemprop: "image",
        content: "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:site",
        content: "@vangsttalent"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:title",
        content: this.props.title
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:creator",
        content: "@vangsttalent"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:description",
        content: this.props.description
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "twitter:image",
        content: "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:title",
        content: this.props.title
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:url",
        content: this.props.url
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:image",
        content: "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:description",
        content: this.props.description
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        property: "og:site_name",
        content: "Vangst Cannabis Staffing Agency"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(JsonLd, {
        data: data
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(JsonLd, {
        data: data2
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "MUigGFKA_WG2nJQLW__YNcSfxdpKYeliFsTadjNPiHY"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
        crossOrigin: "anonymous"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_4__src_styles_style_scss___default.a
        }
      })));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: Brandon Grotesque Thin;\n  src: url(\"../static/Fonts/Brandon-Grotesque/BrandonGrotesque-Thin.otf\"); }\n\n@font-face {\n  font-family: Brandon Grotesque Regular;\n  src: url(\"../static/Fonts/Brandon-Grotesque/BrandonGrotesque-Regular.otf\"); }\n\n@font-face {\n  font-family: Brandon Grotesque Regular Italic;\n  src: url(\"../static/Fonts/Brandon-Grotesque/BrandonGrotesque-RegularItalic.otf\"); }\n\n@font-face {\n  font-family: Brandon Grotesque Bold Italic;\n  src: url(\"../static/Fonts/Brandon-Grotesque/HVD Fonts - BrandonGrotesque-BlackItalic.otf\"); }\n\n@font-face {\n  font-family: Brandon Grotesque Bold;\n  src: url(\"../static/Fonts/Brandon-Grotesque/BrandonGrotesque-Bold.otf\"); }\n\n@font-face {\n  font-family: Sabon Italic;\n  src: url(\"../static/Fonts/Sabon/SabonLTStd-Italic.otf\"); }\n\n@font-face {\n  font-family: Hennigar;\n  src: url(\"../static/Fonts/Numbers/hennigar/HennigarD.otf\"); }\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  font: 100% verdana, sans-serif;\n  background-color: #fff; }\n\nbody h1,\n  body h2 {\n    color: #000;\n    font-family: Brandon Grotesque Bold Italic; }\n\nh3 {\n  font-family: Sabon Italic;\n  opacity: 0.8;\n  letter-spacing: 3px; }\n\np {\n  font-family: Sabon Italic;\n  letter-spacing: 1.7px;\n  line-height: 1.4em;\n  font-weight: 700; }\n\n.nav-link {\n  font-family: Brandon Grotesque Regular;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  line-height: 1.2em; }\n\n.section-label {\n  padding-top: 2rem; }\n\n.dark-line {\n  background-color: #666666;\n  height: 2px;\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n.white-line {\n  background-color: white;\n  height: 3px;\n  margin-top: 1rem;\n  margin-bottom: 1rem; }\n\n.text-dark {\n  font-weight: 400; }\n\n.small-gray-line-h {\n  background-color: #dadada;\n  height: 2px;\n  width: 150px;\n  margin-bottom: 1rem; }\n\na {\n  text-decoration: none;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\na:hover {\n  text-decoration: none;\n  cursor: pointer; }\n\nfooter {\n  background-image: url(\"/static/images/logos/logo-overlay.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-size: auto 100%;\n  background-position: left;\n  background-color: #242424; }\n\nfooter button {\n    background-color: #f0561f; }\n\n.footer-input-title {\n  font-family: Brandon Grotesque Regular Italic;\n  font-size: 1.25rem;\n  letter-spacing: 1.5px;\n  line-height: 1em; }\n\n.footer-container {\n  height: 100%;\n  width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 2rem; }\n\n.footer-container .nav-link {\n    padding: 3px; }\n\n.footer-logo-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.footer-logo-container img {\n    width: 100%;\n    max-width: 200px;\n    height: auto;\n    margin: 2px; }\n\n.footer-content {\n  margin-top: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.footer-links-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.mailchimp-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: white; }\n\n.mailchimp-form input {\n    margin-right: 1px;\n    margin-top: 5px;\n    height: 2rem; }\n\n.mailchimp-form select {\n    background-color: white;\n    border-radius: 0;\n    color: gray;\n    height: 2rem;\n    margin-right: 1px;\n    margin-top: 5px;\n    border: 0px;\n    width: 201px; }\n\n.mailchimp-form button {\n    height: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 5px;\n    margin-right: 5px;\n    margin-left: 5px;\n    border-radius: 0px; }\n\n#email-link {\n  text-decoration: none;\n  color: white; }\n\n.footer-copyright {\n  color: #f0561f; }\n\n.footer-link-group {\n  padding: 1rem; }\n\n.footer-social-icons {\n  padding: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.footer-social-icons img {\n    padding: 5px;\n    max-height: 30px; }\n\n.input-title {\n  font-family: Sabon; }\n\n.footer-signup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.footer-signup-input {\n  width: 100%;\n  margin-bottom: 1rem; }\n\n.footer-signup-input .email-input {\n    max-width: 500px;\n    min-width: 250px; }\n\n.footer-signup-input .zip-code-input {\n    max-width: 150px; }\n\n.nav-menu {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-right: 2rem;\n  padding-left: 2rem; }\n\n.vangst-logo-graphic {\n  height: 25px; }\n\n.vangst-logo-text {\n  height: 20px;\n  margin-left: 10px; }\n\n.vangst-logo {\n  height: 45px; }\n\n.hero-section {\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.hero-cta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 2rem; }\n\n.hero-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: transparent;\n  border: none; }\n\n.hero-cta p {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-bottom: 0; }\n\n.white-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  background-color: white;\n  width: 250px;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  padding: 0.25rem;\n  opacity: 1; }\n\n.white-div p {\n    padding-top: 3px; }\n\n.hero-cta .whiteText {\n  color: white; }\n\n.hero-cta img {\n  height: 0.4rem; }\n\n.vangst-is-dope {\n  background-image: url(\"static/images/vangst-main-page/Home-Section-2.jpg\");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.section-label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-style: italic; }\n\n.section-number {\n  border: solid 1px white;\n  padding: 3px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  margin-right: 10px;\n  color: white; }\n\n.section-copy {\n  margin: 0;\n  color: white; }\n\n.play-button-container {\n  margin-top: 10rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\n.play-button-container img {\n  width: 16px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-bottom: -9px;\n  z-index: 2; }\n\n.play-button {\n  border: solid white 2px;\n  border-radius: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: 200px; }\n\n.play-button p {\n  margin-bottom: 0;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  color: white;\n  font-style: italic; }\n\n.gigs-section {\n  background-image: url(\"static/images/vangst-main-page/female-phone-2.jpg\");\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n#gigs-steps-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.gigs-step-description {\n  font-family: Brandon Grotesque Regular;\n  letter-spacing: 1px;\n  font-size: 0.9rem;\n  padding-bottom: 2rem; }\n\n#gigs-cta-button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.gigs-cta-button {\n  color: #f0561f;\n  border: solid 1px #f0561f;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0.75rem; }\n\n.gigs-cta-text {\n  margin-bottom: 0; }\n\n.gigs-cta-text:hover {\n  color: #f0561f; }\n\n.gigs-arrow {\n  margin-left: 15px; }\n\n.news-section {\n  padding-top: 4rem;\n  padding-bottom: 2rem; }\n\n.news-logos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.news-logos img {\n    width: auto;\n    height: 30px; }\n\n.entrepreneur-logo {\n  opacity: 0.35;\n  height: 40px !important; }\n\n.fastcompany-logo {\n  opacity: 0.85;\n  height: 26px !important; }\n\n.cnbc-logo {\n  opacity: 0.8;\n  height: 34px !important; }\n\n.time-logo {\n  opacity: 0.75;\n  height: 27px !important; }\n\n.cbs-logo {\n  opacity: 0.3; }\n\n.news-logo-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 1rem; }\n\n.events-section {\n  padding-top: 4rem;\n  padding-bottom: 2rem;\n  background-color: #dadada;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.events-row-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.event-container {\n  position: relative;\n  margin-top: 1.5rem; }\n\n.event-date-icon {\n  background-color: #f0561f;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50px;\n  height: 55px; }\n\n.event-date {\n  font-size: 1.5rem;\n  color: white;\n  margin-bottom: -5px; }\n\n.event-month {\n  font-size: 0.8rem;\n  color: white;\n  margin-bottom: -5px; }\n\n.event-image {\n  margin-top: 15px;\n  width: 100%;\n  height: auto; }\n\n.event-title {\n  font-weight: bold;\n  padding-top: 15px;\n  font-family: Brandon Grotesque Bold;\n  letter-spacing: 1px;\n  font-size: 1rem;\n  opacity: 0.8; }\n\n.event-description {\n  font-family: Brandon Grotesque Regular;\n  opacity: 0.8;\n  margin-top: -5px; }\n\n.section-title-line {\n  width: 125px; }\n\n.vangst-talent-section {\n  padding-top: 4rem;\n  padding-bottom: 2rem;\n  background-color: #dadada; }\n\n.vangst-talent-title-container {\n  margin-bottom: 0;\n  padding-bottom: 0; }\n\n#talent-line {\n  padding-top: 0;\n  margin-top: 8px;\n  margin-bottom: 3rem; }\n\n.vangst-talent-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n.vangst-talent-title img {\n    height: 20px;\n    margin-right: 10px;\n    display: inline; }\n\n.instagram-slider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 100%;\n  min-height: 225px;\n  overflow-x: auto; }\n\n.instagram-post {\n  margin: 2px; }\n\n.instagram-post img {\n  width: auto;\n  height: 225px; }\n\n@media (min-width: 320px) {\n  h1 {\n    font-size: 2.5rem; }\n  .gigs-number {\n    margin-bottom: 0; } }\n\n@media (min-width: 375px) {\n  h1 {\n    font-size: 3.5rem; } }\n\n@media (max-width: 627px) {\n  .footer-social-icons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 80%;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; } }\n\n@media (min-width: 425px) {\n  h1 {\n    font-size: 5rem; }\n  h2 {\n    font-size: 40px; } }\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 7rem; }\n  h2 {\n    font-size: 4rem; } }\n\n@media (min-width: 993px) {\n  .hero-section {\n    height: calc(100vh - 71px); } }\n\n@media (max-width: 992px) {\n  .hero-section {\n    height: calc(100vh - 56px); }\n  .hero-cta {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .white-div {\n    background-color: transparent;\n    margin-bottom: 2rem;\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n    .white-div p {\n      color: white; }\n  .hero-button {\n    border: solid 1px white;\n    padding: 10px;\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    margin-top: 30px;\n    width: 280px; }\n  .color-overlay {\n    background: rgba(0, 0, 0, 0.5);\n    height: 100vh;\n    width: 100vw;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .job-report-number {\n    font-size: 4rem;\n    letter-spacing: 2px;\n    padding-bottom: 5px; }\n  #growth-number {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .job-report-numbers {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .job-report-symbol {\n    font-size: 15px; }\n  .report-graphic {\n    height: 100px; }\n  .play-button-img {\n    display: none; } }\n\n@media (max-width: 768px) {\n  .gigs-cta-button {\n    background-color: rgba(255, 255, 255, 0.95);\n    border: #f0561f solid 1px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 0; }\n  .gigs-cta-text-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start; }\n  .report-graphic {\n    height: 350px;\n    margin: 1rem; } }\n\n@media (min-width: 1024px) {\n  h1 {\n    font-size: 8rem; } }\n\n@media (min-width: 1440px) {\n  h1 {\n    font-size: 9rem; } }\n\n@media (max-width: 566px) {\n  .job-report-number {\n    font-size: 3rem;\n    letter-spacing: 2px;\n    padding-bottom: 5px; }\n  .white-line-div {\n    width: 100%; }\n  .footer-links-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding-left: 0;\n    padding-right: 0; }\n  .footer-link-group {\n    padding: 0; }\n  .footer-social-icons {\n    padding: 0;\n    width: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n\n@media (max-width: 500px) {\n  .mailchimp-form {\n    margin-bottom: 1rem; } }\n\n@media (max-width: 420px) {\n  .job-report-number-column {\n    padding: 0; }\n  .job-report-number {\n    font-size: 2rem;\n    letter-spacing: 2px;\n    padding-bottom: 5px; }\n  .white-line-div {\n    width: 80px;\n    margin: 5px; }\n  .report-graphic {\n    height: 175px; }\n  .mailchimp-form {\n    padding-right: 25px;\n    padding-left: 25px; } }\n\n@media (min-width: 376px) {\n  #gigs-cta-text-1 {\n    display: block; }\n  #gigs-cta-text-2 {\n    display: none; } }\n\n@media (max-width: 375px) {\n  #we-are-ready-text {\n    display: none; }\n  .job-report-number {\n    font-size: 2rem;\n    letter-spacing: 2px; }\n  .report-graphic {\n    margin-top: 5px;\n    height: 80px; }\n  .play-button-container {\n    margin-top: 4rem; }\n  #entreprenuer {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .footer-links-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    padding-left: 0;\n    padding-right: 0; }\n  .footer-link-group {\n    padding: 0; }\n  .footer-social-icons {\n    padding: 0;\n    width: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  #email-input-footer {\n    margin-bottom: 5px;\n    max-width: 100%;\n    width: 100%; }\n  #zip-code-input-footer {\n    max-width: 100%;\n    width: 100%; }\n  .footer-signup-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  #footer-signup-button {\n    border-radius: 0px;\n    margin-top: 10px; } }\n\n@media (max-width: 320px) {\n  h1 {\n    font-size: 30px; }\n  h2 {\n    font-size: 32px; }\n  .play-button-container {\n    margin-top: 4rem; }\n  .vangst-talent-title img {\n    display: none; } }\n";

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/PageWrapper.js
var PageWrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(11);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/candidate-page/hero.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var hero_Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "candidate-page-hero",
        className: "jsx-1868829507" + " " + "hero-section"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "container candidate-page-content"
      }, external__react__default.a.createElement("div", {
        id: "white-leaf",
        className: "jsx-1868829507"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/leaf-white.png",
        className: "jsx-1868829507"
      })), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + 'all-columns-hero'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + 'single-column'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "job-report-number"
      }, "7,500"), external__react__default.a.createElement("p", {
        className: "jsx-1868829507" + " " + "text-white"
      }, "FILLED POSITIONS")), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + 'single-column'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "job-report-number"
      }, "381"), external__react__default.a.createElement("p", {
        className: "jsx-1868829507" + " " + "text-white"
      }, "OPEN POSITIONS")), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + 'single-column'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "d-flex flex-row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        id: "cand-num-1",
        className: "jsx-1868829507" + " " + "job-report-number"
      }, "80,000"), external__react__default.a.createElement("div", {
        id: "cand-num-2",
        className: "jsx-1868829507" + " " + "job-report-number"
      }, "80K"), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "h3 job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1868829507" + " " + "text-white"
      }, "CANDIDATES")), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + 'single-column'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "d-flex flex-row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "job-report-number"
      }, "600"), external__react__default.a.createElement("div", {
        className: "jsx-1868829507" + " " + "h3 job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1868829507" + " " + "text-white"
      }, "COMPANIES")))), external__react__default.a.createElement(style__default.a, {
        styleId: "1868829507",
        css: ["#candidate-page-hero.jsx-1868829507{background-image:url(\"/static/images/candidate-page/woman-orange.jpg\");display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", ".candidate-page-content.jsx-1868829507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", "#white-leaf.jsx-1868829507{margin-bottom:2rem;}", ".single-column.jsx-1868829507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".all-columns-hero.jsx-1868829507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".small-h-line.jsx-1868829507{background-color:white;width:40px;height:4px;}", ".large-v-line-white.jsx-1868829507{background-color:white;width:1px;height:120px;margin-right:2rem;margin-left:2rem;}", ".job-report-number.jsx-1868829507{font-size:5rem;margin-bottom:0;font-family:Hennigar;opacity:1;margin-bottom:-0.5rem;color:white;}", ".job-number-symbol.jsx-1868829507{font-family:Brandon Grotesque Bold;color:white;font-weight:700;}", ".number-with-symbol.jsx-1868829507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "@media (max-width:992px){p.jsx-1868829507{font-size:0.75rem;}.large-v-line-white.jsx-1868829507{margin-right:0.75rem;margin-left:0.75rem;}}", "@media (max-width:768px){.job-report-number.jsx-1868829507{font-size:5rem;}.single-column.jsx-1868829507{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:2rem;}.large-v-line-white.jsx-1868829507{display:none;}.all-columns-hero.jsx-1868829507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}", "@media (max-width:415px){.job-report-number.jsx-1868829507{font-size:4rem;}#cand-num-1.jsx-1868829507{display:none;}}", "@media (min-width:416px){#cand-num-2.jsx-1868829507{display:none;}}", "#job-number-symbol.jsx-1868829507{font-family:Brandon Grotesque Bold;color:black;font-weight:700;font-size:2rem;}"]
      }));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var hero = (hero_Hero);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/candidate-page/featuredJobs.js
function featuredJobs__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { featuredJobs__typeof = function _typeof(obj) { return typeof obj; }; } else { featuredJobs__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return featuredJobs__typeof(obj); }

function featuredJobs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function featuredJobs__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function featuredJobs__createClass(Constructor, protoProps, staticProps) { if (protoProps) featuredJobs__defineProperties(Constructor.prototype, protoProps); if (staticProps) featuredJobs__defineProperties(Constructor, staticProps); return Constructor; }

function featuredJobs__possibleConstructorReturn(self, call) { if (call && (featuredJobs__typeof(call) === "object" || typeof call === "function")) { return call; } return featuredJobs__assertThisInitialized(self); }

function featuredJobs__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function featuredJobs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var featuredJobs_FeaturedJobs =
/*#__PURE__*/
function (_Component) {
  featuredJobs__inherits(FeaturedJobs, _Component);

  function FeaturedJobs() {
    featuredJobs__classCallCheck(this, FeaturedJobs);

    return featuredJobs__possibleConstructorReturn(this, (FeaturedJobs.__proto__ || Object.getPrototypeOf(FeaturedJobs)).apply(this, arguments));
  }

  featuredJobs__createClass(FeaturedJobs, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "featuredjobs-section",
        className: "section section-top section-full"
      }, external__react__default.a.createElement("div", {
        id: "featured-jobs-content",
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "title-container"
      }, external__react__default.a.createElement("h3", {
        id: "featured-jobs-section-title"
      }, "FEATURED JOBS"), external__react__default.a.createElement("div", {
        className: "black-line-h"
      })), external__react__default.a.createElement("div", {
        className: "job-posting"
      }, external__react__default.a.createElement("h3", {
        className: "featured-jobs-titles"
      }, "Director of Extraction | Boston, MA"), external__react__default.a.createElement("p", {
        className: "text-dark featured-job-description"
      }, "Manage day-to-day operations in a regulated, cannabis extraction facility. This includes extracting cannabis, post-extraction processing, product development, packaging, and distribution."), external__react__default.a.createElement(link__default.a, {
        href: "/cannabis-jobseeker"
      }, external__react__default.a.createElement("a", {
        className: "view-link"
      }, "View >"))), external__react__default.a.createElement("div", {
        className: "job-posting"
      }, external__react__default.a.createElement("h3", {
        className: "featured-jobs-titles"
      }, "Director of Cultivation | Los Angeles, CA"), external__react__default.a.createElement("p", {
        className: "text-dark featured-job-description"
      }, "Our Director of Cultivation will provide leadership, oversight and management to our entire Cultivation Department. We\u2019re looking for someone who has extensive cannabis growing experience as well as grow management experience."), external__react__default.a.createElement(link__default.a, {
        href: "/cannabis-jobseeker"
      }, external__react__default.a.createElement("a", {
        className: "view-link"
      }, "View >"))), external__react__default.a.createElement("div", {
        id: "job-3",
        className: "job-posting"
      }, external__react__default.a.createElement("h3", {
        className: "featured-jobs-titles"
      }, "Dispensary Store Manager | Seattle, WA"), external__react__default.a.createElement("p", {
        className: "text-dark featured-job-description"
      }, "Oversee the grand opening of our client\u2019s dispensary, as well as, creating and implementing SOPs, training staff, onboarding a POS system, as well as working closely with the executive team."), external__react__default.a.createElement(link__default.a, {
        href: "/cannabis-jobseeker"
      }, external__react__default.a.createElement("a", {
        className: "view-link"
      }, "View >"))), external__react__default.a.createElement(link__default.a, {
        href: "/cannabis-jobseeker"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("div", {
        id: "featured-button-container"
      }, external__react__default.a.createElement("div", {
        className: "black-line-h"
      }), external__react__default.a.createElement("h3", {
        id: "featured-button-text"
      }, "SHOW MORE JOBS >"), external__react__default.a.createElement("div", {
        className: "black-line-h"
      }))))), external__react__default.a.createElement("style", null, "\n            #featuredjobs-section{\n              min-height: 100vh;\n              background-position: center;\n              background-repeat: no-repeat;\n              background-size: cover;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            }\n\n            #featured-job-content {\n              padding: 2rem;\n            }\n            \n            .title-container {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n            \n            .job-posting{ padding-top: 2rem; } \n\n\n            .view-link {\n              font-family: Sabon Italic;\n              color: #f0561f;\n            }\n\n            .view-link:hover {\n              color: #f0561f;\n            }\n\n            .black-line-h {\n              height: 1px;\n              width: 175px;\n              background-color: black;\n              opacity: 0.8;\n            }\n\n            #featured-button-container {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n              margin-top: 2rem;\n\n            }\n            #featured-button-text {\n              font-size: 1rem;\n              margin: 0.5rem; \n              text-decoration: none;\n              color: black;\n\n            }\n\n            @media (max-width: 575px){\n              h4 {\n                font-size: 1.25rem;\n              }\n              p {font-size: 0.9rem; line-height: 100%}\n            }\n\n            @media (max-width: 420px) {\n              .featured-jobs-titles {font-size: 0.9rem; font-weight: 700; }\n              #featured-jobs-section-title {font-size: 1.5rem;}\n              .featured-job-description {margin-bottom: 1px;}\n              .job-posting {padding-top: 1.25rem;}\n              #featured-button-container {margin-top: 1rem;}\n              .view-link {font-size: 0.8rem;}\n            }\n            @media (max-width: 321px) {\n              #job-3 {display: none;}\n            }\n            \n          "));
    }
  }]);

  return FeaturedJobs;
}(external__react_["Component"]);

/* harmony default export */ var featuredJobs = (featuredJobs_FeaturedJobs);
// CONCATENATED MODULE: ./components/candidate-page/seeGigs.js


function seeGigs__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { seeGigs__typeof = function _typeof(obj) { return typeof obj; }; } else { seeGigs__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return seeGigs__typeof(obj); }

function seeGigs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function seeGigs__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function seeGigs__createClass(Constructor, protoProps, staticProps) { if (protoProps) seeGigs__defineProperties(Constructor.prototype, protoProps); if (staticProps) seeGigs__defineProperties(Constructor, staticProps); return Constructor; }

function seeGigs__possibleConstructorReturn(self, call) { if (call && (seeGigs__typeof(call) === "object" || typeof call === "function")) { return call; } return seeGigs__assertThisInitialized(self); }

function seeGigs__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function seeGigs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var seeGigs_SeeGigs =
/*#__PURE__*/
function (_Component) {
  seeGigs__inherits(SeeGigs, _Component);

  function SeeGigs() {
    seeGigs__classCallCheck(this, SeeGigs);

    return seeGigs__possibleConstructorReturn(this, (SeeGigs.__proto__ || Object.getPrototypeOf(SeeGigs)).apply(this, arguments));
  }

  seeGigs__createClass(SeeGigs, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "seegigs-section",
        className: "jsx-3755704299" + " " + "section section-top section-full"
      }, external__react__default.a.createElement("div", {
        id: "seegigs-content",
        className: "jsx-3755704299" + " " + 'container'
      }, external__react__default.a.createElement("div", {
        id: "text-content",
        className: "jsx-3755704299" + " " + "col-9"
      }, external__react__default.a.createElement("h2", {
        className: "jsx-3755704299" + " " + "text-white"
      }, "TEMPORARY WORK"), external__react__default.a.createElement("h2", {
        className: "jsx-3755704299" + " " + "text-white"
      }, "WITH ", external__react__default.a.createElement("span", {
        id: "black-box",
        className: "jsx-3755704299"
      }, "VANGST GIGS.")), external__react__default.a.createElement("div", {
        id: "link-alignment",
        className: "jsx-3755704299"
      }, external__react__default.a.createElement("a", {
        href: "https://gigs.vangst.com/",
        className: "jsx-3755704299" + " " + "nav-link text-dark"
      }, "SEE GIGS NOW >")))), external__react__default.a.createElement("div", {
        id: "phone-img-container",
        className: "jsx-3755704299"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/Iphone_Hand.png",
        className: "jsx-3755704299"
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "3755704299",
        css: ["#seegigs-section.jsx-3755704299{min-height:40vh;background-position:center;background-repeat:no-repeat;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;overflow:visible;position:relative;}", "img.jsx-3755704299{position:absolute;width:auto;height:35vh;right:5vw;bottom:0px;z-index:1;}", "#seegigs-content.jsx-3755704299{min-height:30vh;min-width:100vw;background-color:#f0561f;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:visible;position:relative;padding-left:5vw;}", "#black-box.jsx-3755704299{background-color:black;padding-left:1rem;padding-right:1rem;}", "#link-alignment.jsx-3755704299{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:1rem;}", "@media (max-width:375px){h2.jsx-3755704299{font-size:1rem;}a.jsx-3755704299{font-size:0.5rem;}#link-alignment.jsx-3755704299{padding-top:5px;padding-right:40px;}#black-box.jsx-3755704299{padding-right:0.25rem;padding-left:0.25rem;}}", "@media (max-width:884px){h2.jsx-3755704299{font-size:3rem;}}", "@media (max-width:724px){h2.jsx-3755704299{font-size:2.5rem;}}", "@media (max-width:724px){h2.jsx-3755704299{font-size:1.8rem;}}", "@media (max-width:535px){h2.jsx-3755704299{font-size:1.3rem;}}", "@media (max-width:455px){h2.jsx-3755704299{font-size:1rem;}}"]
      }));
    }
  }]);

  return SeeGigs;
}(external__react_["Component"]);

/* harmony default export */ var seeGigs = (seeGigs_SeeGigs);
// CONCATENATED MODULE: ./components/candidate-page/gigsDetails.js


function gigsDetails__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { gigsDetails__typeof = function _typeof(obj) { return typeof obj; }; } else { gigsDetails__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return gigsDetails__typeof(obj); }

function gigsDetails__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gigsDetails__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gigsDetails__createClass(Constructor, protoProps, staticProps) { if (protoProps) gigsDetails__defineProperties(Constructor.prototype, protoProps); if (staticProps) gigsDetails__defineProperties(Constructor, staticProps); return Constructor; }

function gigsDetails__possibleConstructorReturn(self, call) { if (call && (gigsDetails__typeof(call) === "object" || typeof call === "function")) { return call; } return gigsDetails__assertThisInitialized(self); }

function gigsDetails__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function gigsDetails__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var gigsDetails_GigsDetails =
/*#__PURE__*/
function (_Component) {
  gigsDetails__inherits(GigsDetails, _Component);

  function GigsDetails() {
    gigsDetails__classCallCheck(this, GigsDetails);

    return gigsDetails__possibleConstructorReturn(this, (GigsDetails.__proto__ || Object.getPrototypeOf(GigsDetails)).apply(this, arguments));
  }

  gigsDetails__createClass(GigsDetails, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "gigs-detail-section",
        className: "jsx-541962341"
      }, external__react__default.a.createElement("div", {
        id: "gigs-detail-content",
        className: "jsx-541962341" + " " + "container"
      }, external__react__default.a.createElement("div", {
        className: "jsx-541962341" + " " + "text-center"
      }, external__react__default.a.createElement("h3", {
        className: "jsx-541962341"
      }, "YOUR SEARCH ENDS HERE")), external__react__default.a.createElement("div", {
        className: "jsx-541962341" + " " + 'all-columns'
      }, external__react__default.a.createElement("div", {
        className: "jsx-541962341" + " " + 'single-column'
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/star.png",
        className: "jsx-541962341"
      }), external__react__default.a.createElement("p", {
        className: "jsx-541962341" + " " + "text-center text-dark"
      }, "Industry leading companies")), external__react__default.a.createElement("div", {
        className: "jsx-541962341" + " " + 'single-column'
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/network.png",
        className: "jsx-541962341"
      }), external__react__default.a.createElement("p", {
        className: "jsx-541962341" + " " + "text-center text-dark"
      }, "Support from network of industry insiders")), external__react__default.a.createElement("div", {
        className: "jsx-541962341" + " " + 'single-column'
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/thumb.png",
        className: "jsx-541962341"
      }), external__react__default.a.createElement("p", {
        className: "jsx-541962341" + " " + "text-center text-dark"
      }, "Real Jobs")))), external__react__default.a.createElement(style__default.a, {
        styleId: "541962341",
        css: ["#gigs-detail-section.jsx-541962341{padding:3rem;min-width:100vw;min-height:60vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", "h3.jsx-541962341{color:#f0561f;}", "img.jsx-541962341{height:10vw;width:10vw;}", "p.jsx-541962341{padding:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".all-columns.jsx-541962341{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", ".single-column.jsx-541962341{width:33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "@media (max-width:770px){p.jsx-541962341{font-size:1rem;padding-right:0px;padding-left:0px;}#gigs-detail-section.jsx-541962341{padding:1rem;}img.jsx-541962341{height:100px;width:100px;}}", ".container.jsx-541962341{padding-left:0px;padding-right:0px;}", "@media (max-width:495px){img.jsx-541962341{height:70px;width:70px;}p.jsx-541962341{font-size:0.9rem;}}", "@media (max-width:375px){img.jsx-541962341{height:65px;width:65px;}p.jsx-541962341{padding-bottom:0rem;}}"]
      }));
    }
  }]);

  return GigsDetails;
}(external__react_["Component"]);

/* harmony default export */ var gigsDetails = (gigsDetails_GigsDetails);
// CONCATENATED MODULE: ./components/candidate-page/createAccount.js


function createAccount__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { createAccount__typeof = function _typeof(obj) { return typeof obj; }; } else { createAccount__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return createAccount__typeof(obj); }

function createAccount__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createAccount__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function createAccount__createClass(Constructor, protoProps, staticProps) { if (protoProps) createAccount__defineProperties(Constructor.prototype, protoProps); if (staticProps) createAccount__defineProperties(Constructor, staticProps); return Constructor; }

function createAccount__possibleConstructorReturn(self, call) { if (call && (createAccount__typeof(call) === "object" || typeof call === "function")) { return call; } return createAccount__assertThisInitialized(self); }

function createAccount__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function createAccount__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var createAccount_CreateAccount =
/*#__PURE__*/
function (_Component) {
  createAccount__inherits(CreateAccount, _Component);

  function CreateAccount() {
    createAccount__classCallCheck(this, CreateAccount);

    return createAccount__possibleConstructorReturn(this, (CreateAccount.__proto__ || Object.getPrototypeOf(CreateAccount)).apply(this, arguments));
  }

  createAccount__createClass(CreateAccount, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "create-account-section",
        className: "jsx-2920873790"
      }, external__react__default.a.createElement("div", {
        id: "mobile-title",
        className: "jsx-2920873790" + " " + "text-center"
      }, external__react__default.a.createElement("h4", {
        id: "title-1",
        className: "jsx-2920873790" + " " + "create-account-title"
      }, "PROFILE BENEFITS")), external__react__default.a.createElement("div", {
        id: "create-account-content",
        className: "jsx-2920873790"
      }, external__react__default.a.createElement("div", {
        id: "img-container",
        className: "jsx-2920873790"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/candidate-page/profile-pic.png",
        className: "jsx-2920873790" + " " + 'circle-picture'
      })), external__react__default.a.createElement("div", {
        id: "text-container",
        className: "jsx-2920873790"
      }, external__react__default.a.createElement("h4", {
        id: "title-2",
        className: "jsx-2920873790" + " " + "create-account-title"
      }, "PROFILE BENEFITS"), external__react__default.a.createElement("p", {
        className: "jsx-2920873790" + " " + "text-dark"
      }, "Create a profile with Vangst and get matched to jobs that align with your skills and career goals."), external__react__default.a.createElement(link__default.a, {
        href: "https://vangsters.com/users/sign_up",
        target: "_blank"
      }, external__react__default.a.createElement("a", {
        className: "jsx-2920873790"
      }, external__react__default.a.createElement("div", {
        className: "jsx-2920873790" + " " + 'create-profile-link-button text-center'
      }, "CREATE A PROFILE"))))), external__react__default.a.createElement(style__default.a, {
        styleId: "2920873790",
        css: ["#create-account-section.jsx-2920873790{min-height:40vh;min-width:100vw;padding:2rem;background-color:#dadada;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "#mobile-title.jsx-2920873790{display:none;}", "#create-account-content.jsx-2920873790{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "#text-container.jsx-2920873790{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50vw;}", "h4.jsx-2920873790{padding-bottom:3vh;}", ".create-account-title.jsx-2920873790{opacity:0.7;}", "#img-container.jsx-2920873790{width:40vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", "img.jsx-2920873790{width:300px;height:300px;padding:2rem;}", "p.jsx-2920873790{padding-bottom:3vh;}", ".create-profile-link-button.jsx-2920873790{background-color:#f0561f;width:170px;padding:0.75rem;border-radius:25px;color:white;font-size:0.75rem;}", "@media (max-width:631px){img.jsx-2920873790{width:250px;height:250px;}p.jsx-2920873790{font-size:0.9rem;padding-bottom:0.8rem;}h4.jsx-2920873790{padding-bottom:0.8rem;}#create-account-section.jsx-2920873790{min-height:35vh;}}", "@media (max-width:500px){img.jsx-2920873790{width:110px;height:110px;padding:0px;}#img-container.jsx-2920873790{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:33%;}#mobile-title.jsx-2920873790{display:inline;}#title-2.jsx-2920873790{display:none;}}", "@media (max-width:430px){img.jsx-2920873790{width:140px;height:140px;margin-right:30px;}#text-container.jsx-2920873790{padding-left:20px;}}"]
      }));
    }
  }]);

  return CreateAccount;
}(external__react_["Component"]);

/* harmony default export */ var createAccount = (createAccount_CreateAccount);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/vangst-cannabis-staffing-services.js
function vangst_cannabis_staffing_services__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vangst_cannabis_staffing_services__typeof = function _typeof(obj) { return typeof obj; }; } else { vangst_cannabis_staffing_services__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vangst_cannabis_staffing_services__typeof(obj); }

function vangst_cannabis_staffing_services__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vangst_cannabis_staffing_services__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vangst_cannabis_staffing_services__createClass(Constructor, protoProps, staticProps) { if (protoProps) vangst_cannabis_staffing_services__defineProperties(Constructor.prototype, protoProps); if (staticProps) vangst_cannabis_staffing_services__defineProperties(Constructor, staticProps); return Constructor; }

function vangst_cannabis_staffing_services__possibleConstructorReturn(self, call) { if (call && (vangst_cannabis_staffing_services__typeof(call) === "object" || typeof call === "function")) { return call; } return vangst_cannabis_staffing_services__assertThisInitialized(self); }

function vangst_cannabis_staffing_services__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vangst_cannabis_staffing_services__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var url = "https://www.vangst.com/vangst-cannabis-staffing-services";
var title = "Direct Hire and Temporary Staffing Services";
var description = "We are the only staffing agency dedicated to the cannabis industry. We offer direct hire, contract to hire and temporary staffing, based on our clients specific needs.";
var keywords = "temp staffing, budtender, weed jobs, trimmers";

var vangst_cannabis_staffing_services_CandidatePage =
/*#__PURE__*/
function (_Component) {
  vangst_cannabis_staffing_services__inherits(CandidatePage, _Component);

  function CandidatePage() {
    vangst_cannabis_staffing_services__classCallCheck(this, CandidatePage);

    return vangst_cannabis_staffing_services__possibleConstructorReturn(this, (CandidatePage.__proto__ || Object.getPrototypeOf(CandidatePage)).apply(this, arguments));
  }

  vangst_cannabis_staffing_services__createClass(CandidatePage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(Header["a" /* default */], {
        url: url,
        title: title,
        description: description,
        keywords: keywords
      }), external__react__default.a.createElement(Menu["a" /* default */], null), external__react__default.a.createElement(hero, null), external__react__default.a.createElement(featuredJobs, null), external__react__default.a.createElement(seeGigs, null), external__react__default.a.createElement(gigsDetails, null), external__react__default.a.createElement(createAccount, null));
    }
  }]);

  return CandidatePage;
}(external__react_["Component"]);

/* harmony default export */ var vangst_cannabis_staffing_services = __webpack_exports__["default"] = (Object(PageWrapper["a" /* default */])(vangst_cannabis_staffing_services_CandidatePage));

/***/ })
/******/ ]);