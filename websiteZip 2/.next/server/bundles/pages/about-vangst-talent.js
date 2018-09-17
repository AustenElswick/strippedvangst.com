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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/PageWrapper.js
var PageWrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(11);

// CONCATENATED MODULE: ./components/team-page/hero.js
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
      return external__react__default.a.createElement("main", {
        id: "team-section",
        className: "hero-section"
      }, external__react__default.a.createElement("div", {
        id: "team-section-content"
      }, external__react__default.a.createElement("h1", {
        id: "team-title",
        className: "text-center"
      }, "Who We Are")), external__react__default.a.createElement("style", null, "\n          #team-section {\n            background-image: url('/static/images/team-page/hero-image.jpg');\n            min-height: 100vh;\n            min-width: 100vw;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n            padding: 3rem;\n          }\n\n          #team-title {\n            color: white;\n          }\n          "));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var hero = (hero_Hero);
// CONCATENATED MODULE: ./components/team-page/headshots.js
function headshots__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { headshots__typeof = function _typeof(obj) { return typeof obj; }; } else { headshots__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return headshots__typeof(obj); }

function headshots__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function headshots__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function headshots__createClass(Constructor, protoProps, staticProps) { if (protoProps) headshots__defineProperties(Constructor.prototype, protoProps); if (staticProps) headshots__defineProperties(Constructor, staticProps); return Constructor; }

function headshots__possibleConstructorReturn(self, call) { if (call && (headshots__typeof(call) === "object" || typeof call === "function")) { return call; } return headshots__assertThisInitialized(self); }

function headshots__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function headshots__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var headshots_Headshots =
/*#__PURE__*/
function (_Component) {
  headshots__inherits(Headshots, _Component);

  function Headshots() {
    headshots__classCallCheck(this, Headshots);

    return headshots__possibleConstructorReturn(this, (Headshots.__proto__ || Object.getPrototypeOf(Headshots)).apply(this, arguments));
  }

  headshots__createClass(Headshots, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "headshot-section"
      }, external__react__default.a.createElement("div", {
        id: "headshot-content"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h2", {
        id: "headshots-title",
        className: "text-center"
      }, "Meet our team.")), external__react__default.a.createElement("div", {
        id: "intro-columns"
      }, external__react__default.a.createElement("div", {
        id: "intro-column-1"
      }, external__react__default.a.createElement("p", {
        className: "intro-column-text"
      }, "We believe that having an exceptional internal team allows us to best serve our clients. That\u2019s why we pride ourselves on hiring the most talented internal staff for every aspect of our business. Our constant growth is a testament to our devotion to being ahead of the game in the rapidly growing cannabis space.")), external__react__default.a.createElement("div", {
        id: "intro-column-2"
      }, external__react__default.a.createElement("p", {
        className: "intro-column-text"
      }, "We vow to use our vast resources and expertise to connect you with the best talent and opportunities in the industry. You can always count on open communication and continuous support from every member of our team."))), external__react__default.a.createElement("div", {
        id: "headshot-container"
      }, external__react__default.a.createElement("div", {
        id: "karson-humiston",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Karson", external__react__default.a.createElement("br", null), "Humiston"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Founder, CEO"))), external__react__default.a.createElement("div", {
        id: "davyd-smith",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Davyd", external__react__default.a.createElement("br", null), "Smith"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "CTO"))), external__react__default.a.createElement("div", {
        id: "dena-gellmann",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Dena", external__react__default.a.createElement("br", null), "Gellmann"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Director of Recruiting"))), external__react__default.a.createElement("div", {
        id: "jordan-smith",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Jordan", external__react__default.a.createElement("br", null), "Smith"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Brand Director"))), external__react__default.a.createElement("div", {
        id: "kyle-arfsten",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Kyle", external__react__default.a.createElement("br", null), "Arfsten"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Director of Growth"))), external__react__default.a.createElement("div", {
        id: "amanda-guerrero",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Amanda", external__react__default.a.createElement("br", null), "Guerrero"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Business Development Manager"))), external__react__default.a.createElement("div", {
        id: "mike-olson",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Mike", external__react__default.a.createElement("br", null), "Olson"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Front End Developer"))), external__react__default.a.createElement("div", {
        id: "andrew-freeman",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Andrew", external__react__default.a.createElement("br", null), "Freeman"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "kendall-kelleher",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Kendall", external__react__default.a.createElement("br", null), "Kelleher"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "max-ireland",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Max", external__react__default.a.createElement("br", null), "Ireland"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "kelsea-appelbaum",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Kelsea", external__react__default.a.createElement("br", null), "Appelbaum"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "jonte-major",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Jonte", external__react__default.a.createElement("br", null), "Major"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "samson-oneil",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Samson", external__react__default.a.createElement("br", null), "O'Neil"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Recruiter"))), external__react__default.a.createElement("div", {
        id: "jenny-surratt",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Jenny", external__react__default.a.createElement("br", null), "Surratt"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Accountant"))), external__react__default.a.createElement("div", {
        id: "patrick-bailey",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Patrick", external__react__default.a.createElement("br", null), "Bailey"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Architect Lead"))), external__react__default.a.createElement("div", {
        id: "zach-schulz",
        className: "headshot-card"
      }, external__react__default.a.createElement("div", {
        className: "headshot-label"
      }, external__react__default.a.createElement("div", {
        className: "headshot-name"
      }, "Zach", external__react__default.a.createElement("br", null), "Schulz"), external__react__default.a.createElement("div", {
        className: "headshot-position"
      }, "Chief Architect"))))), external__react__default.a.createElement("style", null, "\n            #karson-humiston {background-image: url('/static/images/team-page/headshots/karson-humiston.jpg');}\n            #davyd-smith {background-image: url('/static/images/team-page/headshots/davyd-smith.jpg');}\n            #dena-gellmann {background-image: url('/static/images/team-page/headshots/dena-gellmann.jpg');}\n            #jordan-smith {background-image: url('/static/images/team-page/headshots/jordan-smith.jpg');}\n            #kyle-arfsten {background-image: url('/static/images/team-page/headshots/kyle-arfsten.jpg');}\n            #amanda-guerrero {background-image: url('/static/images/team-page/headshots/amanda-guerrero.jpg');}\n            #mike-olson {background-image: url('/static/images/team-page/headshots/mike-olson.jpg');}\n            #andrew-freeman {background-image: url('/static/images/team-page/headshots/andrew-freeman.jpg');}\n            #kendall-kelleher {background-image: url('/static/images/team-page/headshots/kendall-kelleher.jpg');}\n            // #mohammed-imran {background-image: url('/static/images/team-page/headshots/mohammed-imran.jpg');}\n            #max-ireland {background-image: url('/static/images/team-page/headshots/max-ireland.jpg');}\n            #max-ireland {background-image: url('/static/images/team-page/headshots/max-ireland.jpg');}\n            #kelsea-appelbaum {background-image: url('/static/images/team-page/headshots/kelsea-appelbaum.jpg');}\n            #jonte-major {background-image: url('/static/images/team-page/headshots/jonte-major.jpg');}\n            #samson-oneil {background-image: url('/static/images/team-page/headshots/samson-oneil.jpg');}\n            #jenny-surratt {background-image: url('/static/images/team-page/headshots/jenny-surratt.jpg');}\n            // #jacob-krushall {background-image: url('/static/images/team-page/headshots/jacob-krushall.jpg');}\n            #patrick-bailey {background-image: url('/static/images/team-page/headshots/patrick-bailey.jpg');}\n            #zach-schulz {background-image: url('/static/images/team-page/headshots/zach-schulz.jpg');}\n\n\n\n        \n\n\n            #headshot-section {\n              min-height: 100vh;\n              min-width: 100vw;\n              padding: 3rem;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            }\n\n            #headshots-title {\n              padding-left: 3rem;\n            }\n\n            #intro-columns {\n              display:flex;\n              flex-direction: row;\n            }\n\n            .intro-column-text {\n              font-weight: 400;\n            }\n\n            #intro-column-1 {\n              width: 50vw;\n              padding: 0 1rem 0 3rem;\n            }\n\n            #intro-column-2 {\n              width: 50vw;\n              padding: 0 3rem 0 1rem;\n            }\n\n            #headshot-container {\n              display: flex;\n              flex-direction: row;\n              justify-content: center;\n              flex-wrap: wrap;\n            }\n\n            .headshot-card {\n              width: 150px;\n              height: 200px;\n              margin: 5px;\n              background-color: lightgray;\n              border-radius: 5px 5px 0 0; \n              display: flex;\n              flex-direction: column;\n              justify-content: flex-end;\n              background-position: top center;\n              background-repeat: no-repeat;\n              background-size: cover;\n            }\n\n            .headshot-label {\n              width: 100%;\n              height: auto;\n              padding: 10px;\n              background-image: linear-gradient(to bottom, rgba(240, 86, 31, 0) 0, #f0561f 100%);\n              background-position: center;\n              background-repeat: no-repeat;\n              background-size: cover;\n            }\n\n            .headshot-name {\n              font-family: Brandon Grotesque Bold;\n              color: white;\n              font-size: 1.5rem;\n              line-height: 20px;\n              font-weight: 600;\n            }\n\n            .headshot-position {\n              font-family: Brandon Grotesque Bold;\n              color: white;\n              font-size: 1rem;\n              font-weight: 700;\n              padding-top: 3px;\n              line-height: 15px;\n            }\n            \n            @media (max-width: 420px) {\n              #headshot-section {\n                padding: 2rem;\n              }\n\n              #headshots-title {\n                padding: 0;\n              }\n\n              #intro-column-2 {\n                display: none;\n              }\n\n              #intro-column-1 {\n                width: 100%;\n                padding: 0.5rem;\n              }\n\n            }\n\n          \n          \n          "));
    }
  }]);

  return Headshots;
}(external__react_["Component"]);

/* harmony default export */ var headshots = (headshots_Headshots);
// CONCATENATED MODULE: ./components/team-page/map.js
function map__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { map__typeof = function _typeof(obj) { return typeof obj; }; } else { map__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return map__typeof(obj); }

function map__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function map__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function map__createClass(Constructor, protoProps, staticProps) { if (protoProps) map__defineProperties(Constructor.prototype, protoProps); if (staticProps) map__defineProperties(Constructor, staticProps); return Constructor; }

function map__possibleConstructorReturn(self, call) { if (call && (map__typeof(call) === "object" || typeof call === "function")) { return call; } return map__assertThisInitialized(self); }

function map__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function map__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var map_Map =
/*#__PURE__*/
function (_Component) {
  map__inherits(Map, _Component);

  function Map() {
    map__classCallCheck(this, Map);

    return map__possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
  }

  map__createClass(Map, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "map-section"
      }, external__react__default.a.createElement("div", {
        id: "map-section-container"
      }, external__react__default.a.createElement("div", {
        id: "map-section-label",
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        id: "map-label-number",
        className: "section-number text-white"
      }, ".01"), external__react__default.a.createElement("p", {
        id: "map-label-text",
        className: "section-text text-white"
      }, "The hard facts")), external__react__default.a.createElement("div", {
        id: "map-column-container"
      }, external__react__default.a.createElement("div", {
        className: "map-section-column"
      }, external__react__default.a.createElement("div", {
        className: "map-number"
      }, "12"), external__react__default.a.createElement("div", {
        className: "map-small-h-line"
      }), external__react__default.a.createElement("p", {
        className: "map-text text-center"
      }, "states served")), external__react__default.a.createElement("div", {
        className: "map-section-column"
      }, external__react__default.a.createElement("div", {
        className: "d-flex flex-row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "map-number"
      }, "600"), external__react__default.a.createElement("div", {
        className: "h3 text-white"
      }, "+")), external__react__default.a.createElement("div", {
        className: "map-small-h-line"
      }), external__react__default.a.createElement("p", {
        className: "map-text text-center"
      }, "partnering companies")), external__react__default.a.createElement("div", {
        className: "map-section-column"
      }, external__react__default.a.createElement("div", {
        className: "map-number"
      }, "7,500"), external__react__default.a.createElement("div", {
        className: "map-small-h-line"
      }), external__react__default.a.createElement("p", {
        className: "map-text text-center"
      }, "jobs placed")))), external__react__default.a.createElement("style", null, "\n            #map-section {\n              height: 100vh;\n              width: 100vw;\n              padding: 6rem;\n              background-image: url('/static/images/team-page/map.jpg');\n              background-position: left center;\n              background-repeat: no-repeat;\n              background-size: cover;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            }\n            #map-column-container {\n              display: flex;\n              flex-direction: row;\n              align-items: center;\n              align-content: center;\n              justify-content: center;\n              height: 100%;\n            }\n\n            .map-section-column {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n              padding: 1rem;\n              width: 33%;\n            }\n\n            .section-label {\n              padding-top: 0;\n            }\n\n            .map-number {\n              color: white;\n              font-size: 9rem;\n              margin-bottom: -20px;\n              font-family: Hennigar;\n              opacity: 1;\n            }\n\n\n\n            .map-small-h-line {\n              background-color: white;\n              width: 60px;\n              height: 2px;\n            }\n\n            .map-text {\n              color: white;\n              font-family: Sabon;\n              font-size: 1.5rem;\n              font-weight: 500;\n              margin-top: 20px;\n            }\n\n            @media (max-width: 800px) {\n              #map-column-container {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                align-content: center;\n                justify-content: center;\n                height: 100%;\n              }\n              .map-number {\n                font-size: 7rem;\n                letter-spacing: 2px;\n              }\n              .map-text {\n                font-size: 1.5rem;\n                margin-top: 5px;\n                margin-bottom: 5px;\n                line-height: 22px;\n              }\n              .map-small-h-line {\n                margin: 10px 0 12px 0 ;\n              }\n              #map-section-label {\n                margin-bottom: 2rem !important;\n              }\n\n            }\n\n            @media (max-width: 420px) {\n              #map-section {\n                padding: 2rem;\n              }\n              #map-column-container {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                align-content: center;\n                justify-content: center;\n                height: 100%;\n              }\n              #map-section-label {\n                margin-bottom: 0 !important;\n                padding-left: 0 !important;\n              }\n\n              .map-number {\n                font-size: 4rem;\n                letter-spacing: 2px;\n              }\n\n              .map-small-h-line {\n                margin: 15px 0 2px 0 !important;\n              }\n              .map-text {\n                font-size: 1.2rem;\n                margin-top: 5px;\n                margin-bottom: 5px;\n                line-height: 19px;\n              }\n\n              #map-section {\n                background-position: center;\n              }\n            }\n\n            @media (max-width: 321px) {\n              .map-number {font-size: 3rem;}\n            }\n          \n          "));
    }
  }]);

  return Map;
}(external__react_["Component"]);

/* harmony default export */ var map = (map_Map);
// EXTERNAL MODULE: ./components/MailChimpForm.js
var MailChimpForm = __webpack_require__(6);

// CONCATENATED MODULE: ./components/team-page/contactUs.js
function contactUs__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contactUs__typeof = function _typeof(obj) { return typeof obj; }; } else { contactUs__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contactUs__typeof(obj); }

function contactUs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contactUs__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contactUs__createClass(Constructor, protoProps, staticProps) { if (protoProps) contactUs__defineProperties(Constructor.prototype, protoProps); if (staticProps) contactUs__defineProperties(Constructor, staticProps); return Constructor; }

function contactUs__possibleConstructorReturn(self, call) { if (call && (contactUs__typeof(call) === "object" || typeof call === "function")) { return call; } return contactUs__assertThisInitialized(self); }

function contactUs__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function contactUs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var contactUs_ContactUs =
/*#__PURE__*/
function (_Component) {
  contactUs__inherits(ContactUs, _Component);

  function ContactUs() {
    contactUs__classCallCheck(this, ContactUs);

    return contactUs__possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  contactUs__createClass(ContactUs, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "contact-us-section"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        id: "contact-us-text"
      }, external__react__default.a.createElement("h3", {
        id: "contact-us-title",
        className: "text-center"
      }, "Join our mailing list."), external__react__default.a.createElement("p", {
        className: "text-dark"
      }, "Stay in the know. Be the first to receive career opportunities, industry news, Vangst updates, and more.")), external__react__default.a.createElement("div", {
        id: "contact-us-form-container"
      }, external__react__default.a.createElement(MailChimpForm["a" /* default */], null))), external__react__default.a.createElement("style", null, "\n            #contact-us-section {\n              width: 100vw;\n              height: 50vh;\n              padding: 4rem;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n            }\n\n            #contact-us-text {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n\n\n            #contact-us-title {\n              font-family: Brandon Grotesque Bold Italic;\n              letter-spacing: 1px;\n              font-size: 2rem;\n            }\n            .newsletter-input {\n              border: solid 1px #dadada;\n              margin: 2px;\n              padding: 2px;\n            }\n\n            .newsletter-select {\n              border: solid 1px #dadada !important;\n              margin: 2px;\n            }\n\n            .newsletter-button {\n              background-color: #f0561f;\n              margin: 2px;\n            }\n\n        \n\n\n            @media (max-width: 420px) {\n              #contact-us-section {\n                height: 100vh;\n                padding: 2rem;\n              }\n\n              #contact-us-title {\n                font-size: 2.3rem;\n                padding-bottom: 1rem;\n              }\n\n              #contact-us-form {\n                background-color: black;\n              }\n              .newsletter-input {\n                border: solid 1px #dadada;\n              }\n              #contact-us-form-container {\n                padding-right: 2rem;\n                padding-left: 2rem;\n              }\n            }\n\n          \n          "));
    }
  }]);

  return ContactUs;
}(external__react_["Component"]);

/* harmony default export */ var contactUs = (contactUs_ContactUs);
// CONCATENATED MODULE: ./components/team-page/testimony.js
function testimony__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { testimony__typeof = function _typeof(obj) { return typeof obj; }; } else { testimony__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return testimony__typeof(obj); }

function testimony__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testimony__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function testimony__createClass(Constructor, protoProps, staticProps) { if (protoProps) testimony__defineProperties(Constructor.prototype, protoProps); if (staticProps) testimony__defineProperties(Constructor, staticProps); return Constructor; }

function testimony__possibleConstructorReturn(self, call) { if (call && (testimony__typeof(call) === "object" || typeof call === "function")) { return call; } return testimony__assertThisInitialized(self); }

function testimony__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function testimony__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var testimony_Testimony =
/*#__PURE__*/
function (_Component) {
  testimony__inherits(Testimony, _Component);

  function Testimony() {
    testimony__classCallCheck(this, Testimony);

    return testimony__possibleConstructorReturn(this, (Testimony.__proto__ || Object.getPrototypeOf(Testimony)).apply(this, arguments));
  }

  testimony__createClass(Testimony, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "testimony-section"
      }, external__react__default.a.createElement("div", {
        id: "testimony-content"
      }, external__react__default.a.createElement("div", {
        className: "testimony-column"
      }, external__react__default.a.createElement("h3", {
        id: "testimony-title",
        className: "text-center"
      }, "\u201CVangst has the secret sauce: great people.\u201D"), external__react__default.a.createElement("div", {
        id: "testimony-quote-container"
      }, external__react__default.a.createElement("p", {
        id: "testimony-quote-text",
        className: "text-dark"
      }, "\u201CVangst has been a force multiplier for our business. Together with our in-house recruiting team they hired over 200 GTI team members this calendar year across eight states. Vangst has the secret sauce: they hire great people to recruit great people.\u201D"))), external__react__default.a.createElement("div", {
        className: "testimony-column"
      }, external__react__default.a.createElement("img", {
        id: "testimony-headshot",
        src: "/static/images/team-page/pete-kadens.jpg"
      }), external__react__default.a.createElement("p", {
        id: "testimony-author-details",
        className: "text-center"
      }, "Peter Kadens | CEO | Green Thumb Industries (GTI)"))), external__react__default.a.createElement("style", null, "\n            #testimony-section {\n              height: 50vh;\n              width: 100vw;\n              padding: 4rem;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              border-bottom: solid 1px #dadada;\n            }\n\n            #testimony-content {\n              display: flex;\n              flex-direction: row;\n              justify-content: space-around;\n              align-items: center;\n            }\n\n            .testimony-column {\n              width: 50%;\n              height: 100%;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n\n            #testimony-title {\n              font-family: Brandon Grotesque Bold Italic;\n              letter-spacing: 1px;\n              font-size: 2rem;\n            }\n\n            #testimony-quote-container {\n              padding: 1rem 3rem 1rem 3rem;\n            }\n\n            #testimony-headshot {\n              display: block;\n              height: auto;\n              width: 35%;\n            }\n\n            #testimony-author-details {\n              font-family: Brandon Grotesque Regular;\n              font-weight: 400;\n              letter-spacing: 1px;\n              margin-top: 1rem;\n            }\n\n            @media (max-width: 800px) {\n              #testimony-section {\n                padding: 2rem;\n              }\n              #testimony-headshot {\n                width: 60%;\n              }\n              #testimony-quote-container {\n                padding: 1rem 0 1rem 0;\n              }\n              #testimony-author-details {\n                padding-left: 1rem;\n                padding-right: 1rem;\n              }\n            }\n\n            @media (max-width: 420px) {\n              #testimony-section {\n                height: 100vh;\n                padding: 2rem;\n              }\n              #testimony-content {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n              }\n              .testimony-column {\n                width: 100vw;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                align-content: center;\n              }\n              #testimony-headshot {\n                width: 50%;\n              }\n              #testimony-author-details {\n                font-size: 1rem;\n                letter-spacing: 0px;\n              }\n            }\n\n            @media (max-width: 380px) {\n              #testimony-quote-container {\n                padding-left: 2rem;\n                padding-right: 1rem;\n              }\n              #testimony-author-details {\n                margin-top: 2rem;\n              }\n            }\n\n            @media (max-width: 321px) {\n              #testimony-quote-text {font-size: 0.9rem; line-height: 18px;}\n            }\n          "));
    }
  }]);

  return Testimony;
}(external__react_["Component"]);

/* harmony default export */ var testimony = (testimony_Testimony);
// CONCATENATED MODULE: ./components/team-page/offices.js
function offices__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { offices__typeof = function _typeof(obj) { return typeof obj; }; } else { offices__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return offices__typeof(obj); }

function offices__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function offices__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function offices__createClass(Constructor, protoProps, staticProps) { if (protoProps) offices__defineProperties(Constructor.prototype, protoProps); if (staticProps) offices__defineProperties(Constructor, staticProps); return Constructor; }

function offices__possibleConstructorReturn(self, call) { if (call && (offices__typeof(call) === "object" || typeof call === "function")) { return call; } return offices__assertThisInitialized(self); }

function offices__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function offices__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var offices_Offices =
/*#__PURE__*/
function (_Component) {
  offices__inherits(Offices, _Component);

  function Offices() {
    offices__classCallCheck(this, Offices);

    return offices__possibleConstructorReturn(this, (Offices.__proto__ || Object.getPrototypeOf(Offices)).apply(this, arguments));
  }

  offices__createClass(Offices, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "offices-section",
        className: "hero-section"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        id: "map-section-label",
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        id: "map-label-number",
        className: "section-number text-white"
      }, ".02"), external__react__default.a.createElement("p", {
        id: "map-label-text",
        className: "section-text text-white"
      }, "Offices")), external__react__default.a.createElement("div", {
        id: "offices-column-container"
      }, external__react__default.a.createElement("div", {
        className: "offices-column"
      }, external__react__default.a.createElement("h5", null, "Santa Monica, CA"), external__react__default.a.createElement("div", {
        className: "offices-small-h-line"
      }), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "520 Broadway #3016"), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "Santa Monica, CA"), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "90401")), external__react__default.a.createElement("div", {
        className: "offices-column"
      }, external__react__default.a.createElement("h5", null, "Denver, CO"), external__react__default.a.createElement("div", {
        className: "offices-small-h-line"
      }), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "518 17th St"), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "Denver, CO"), external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "80202")), external__react__default.a.createElement("div", {
        className: "offices-column"
      }, external__react__default.a.createElement("h5", null, "Contact us"), external__react__default.a.createElement("div", {
        className: "offices-small-h-line"
      }), external__react__default.a.createElement("a", {
        id: "email-link",
        href: "mailto:info@vangst.com"
      }, external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "info@vangst.com")), external__react__default.a.createElement("a", {
        id: "email-link",
        href: "tel:+18444826478"
      }, external__react__default.a.createElement("p", {
        className: "offices-text"
      }, "(844)-482-6478"))))), external__react__default.a.createElement("style", null, "\n\n          h5 {\n            color: white;\n            font-family: Brandon Grotesque Bold Italic;\n            font-size: 2.1rem;\n          }\n          \n          #offices-section {\n            padding: 4rem;\n            min-width: 100vw;\n            height: 50vh;\n            background-image: url('/static/images/team-page/ca-background.jpg');\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n          }\n\n          #map-section-label {\n            margin-bottom: 4rem;\n            padding-left: 3rem;\n          }\n\n          #offices-column-container {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-content: center;\n            padding-right: 10%;\n            padding-right: 10%;\n          }\n\n          .offices-column {\n            margin-bottom: 25px;\n          }\n\n          .small-h-line {\n            margin: 15px 0 15px 0;\n          }\n\n          .offices-text {\n            color: white;\n            font-family: Brandon Grotesque Regular;\n            font-size: 1.3rem;\n            margin: 1px 0 1px 0;\n          }\n\n          @media (max-width: 800px) {\n            #offices-section {\n              padding: 2rem;\n            }\n            #offices-column-container {\n              padding: 0;\n            }\n          }\n\n          @media (max-width: 420px) {\n            #offices-section {\n              height: 100vh;\n              padding: 2rem;\n            }\n\n            #offices-column-container {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-content: center;\n              padding-left: 1rem;\n              padding-top: 1rem;\n            }\n\n            .offices-small-h-line {\n              margin: 5px !important;\n            }\n            .offices-text {\n              font-size: 1.1rem;\n              line-height: 20px;\n\n            }\n          }\n\n      \n          \n          "));
    }
  }]);

  return Offices;
}(external__react_["Component"]);

/* harmony default export */ var offices = (offices_Offices);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/about-vangst-talent.js
function about_vangst_talent__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { about_vangst_talent__typeof = function _typeof(obj) { return typeof obj; }; } else { about_vangst_talent__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return about_vangst_talent__typeof(obj); }

function about_vangst_talent__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function about_vangst_talent__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function about_vangst_talent__createClass(Constructor, protoProps, staticProps) { if (protoProps) about_vangst_talent__defineProperties(Constructor.prototype, protoProps); if (staticProps) about_vangst_talent__defineProperties(Constructor, staticProps); return Constructor; }

function about_vangst_talent__possibleConstructorReturn(self, call) { if (call && (about_vangst_talent__typeof(call) === "object" || typeof call === "function")) { return call; } return about_vangst_talent__assertThisInitialized(self); }

function about_vangst_talent__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function about_vangst_talent__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var url = "https://www.vangst.com/about-vangst-talent";
var title = "About The Vangst Team";
var description = "Vangst, the cannabis industry's top staffing agency, has successfully connected over 7,500 professionals with careers in the rapidly emerging cannabis industry.";
var keywords = "mmj, staffing agencies near me, temp agencies near me";

var about_vangst_talent_TeamPage =
/*#__PURE__*/
function (_Component) {
  about_vangst_talent__inherits(TeamPage, _Component);

  function TeamPage() {
    about_vangst_talent__classCallCheck(this, TeamPage);

    return about_vangst_talent__possibleConstructorReturn(this, (TeamPage.__proto__ || Object.getPrototypeOf(TeamPage)).apply(this, arguments));
  }

  about_vangst_talent__createClass(TeamPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(Header["a" /* default */], {
        url: url,
        title: title,
        description: description,
        keywords: keywords
      }), external__react__default.a.createElement(Menu["a" /* default */], null), external__react__default.a.createElement(hero, null), external__react__default.a.createElement(headshots, null), external__react__default.a.createElement(map, null), external__react__default.a.createElement(offices, null), external__react__default.a.createElement(testimony, null), external__react__default.a.createElement(contactUs, null));
    }
  }]);

  return TeamPage;
}(external__react_["Component"]);

/* harmony default export */ var about_vangst_talent = __webpack_exports__["default"] = (Object(PageWrapper["a" /* default */])(about_vangst_talent_TeamPage));

/***/ })
/******/ ]);