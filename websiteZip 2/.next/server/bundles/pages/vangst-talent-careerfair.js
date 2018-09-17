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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Companies =
/*#__PURE__*/
function (_Component) {
  _inherits(Companies, _Component);

  function Companies() {
    _classCallCheck(this, Companies);

    return _possibleConstructorReturn(this, (Companies.__proto__ || Object.getPrototypeOf(Companies)).apply(this, arguments));
  }

  _createClass(Companies, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        id: "companies-section"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        id: "companies-title",
        className: "text-center"
      }, "WORKING WITH THE BEST COMPANIES IN CANNABIS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "small-gray-line-h"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "logos-row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/ll-logo.png",
        alt: "LeafLink"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "GTI",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/GTI.png",
        alt: "GTI"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/Cresco.png",
        alt: "Cresco"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "Baker",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/Baker.png",
        alt: "Baker"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/willies.png",
        alt: "Willie\u2019s Reserve"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/PAX.png",
        alt: "PAX"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/verde.png",
        alt: "Verde"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "NR",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/Native-Roots.jpg",
        alt: "Native Roots"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/GreenBits.png",
        alt: "GreenBits"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "greenpeak",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/Greenpeak innovations.png",
        alt: "Green Peak Innovation"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/tikun.png",
        alt: "Tikun Olam"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/TGS.png",
        alt: "TGS"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "company-logo",
        src: "static/images/employer-page/company-logos/VS.png",
        alt: "Vicente Sederberg"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "CA",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/CannaAdvisors.png",
        alt: "Canna Advisors"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "company-logo-container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        id: "HS",
        className: "company-logo",
        src: "static/images/employer-page/company-logos/harborside.jpg",
        alt: "Harborside"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "\n            #companies-section {\n              min-height: 100vh;\n              min-weight: 100vw;\n              padding: 3rem;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n            }\n\n            #logos-row {\n              display: flex;\n              flex-direction: row;\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              \n              \n\n            }\n\n            .company-logo {\n              display: block;\n              width: 50%;\n              height: auto;\n              padding-top: 5vh;\n            }\n\n            .company-logo-container {\n              width: 20%;\n\n             \n              overflow: none;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n\n            @media (max-width: 1025px) {\n              .company-logo-container {\n                width: 25%;\n              }\n              .company-logo {width: 65%;}\n            }\n\n            @media (max-width: 770px) {\n              .company-logo-container {\n                width: 25%;\n              }\n              .company-logo {width: 65%;}\n            }\n\n\n            @media (max-width: 530px) {\n              #companies-section {padding: 2rem;}\n              .company-logo-container {\n                width: 33%;\n              }\n              .company-logo {width: 50%; padding-top: 2vh;}\n              #companies-title {\n                font-size: 1.2rem;\n              }\n            }\n\n            @media (max-width: 450px) {\n              #companies-section {padding: 2rem;}\n              .company-logo-container {\n                width: 33%;\n              }\n              .company-logo {width: 60%; padding-top: 2vh;}\n              #companies-title {\n                font-size: 1rem;\n              }\n            }\n\n          \n          "));
    }
  }]);

  return Companies;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Companies);

/***/ }),
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
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(11);

// EXTERNAL MODULE: ./components/PageWrapper.js
var PageWrapper = __webpack_require__(9);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/career-fair/hero.js


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
        id: "career-fair-hero-section",
        className: "jsx-1764514944"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1764514944"
      }, external__react__default.a.createElement("h1", {
        id: "career-fair-title",
        className: "jsx-1764514944" + " " + "text-center text-white"
      }, "Hosting the worlds largest cannabis career fair since 2015")), external__react__default.a.createElement(style__default.a, {
        styleId: "1764514944",
        css: ["#career-fair-hero-section.jsx-1764514944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:50vh;padding:4rem;background-image:url(\"/static/images/employer-page/sec_01/orange-background.jpg\");background-position:center;background-repeat:no-repeat;background-size:cover;}", "#career-fair-title.jsx-1764514944{font-size:6rem;}", "@media (max-width:420px){#career-fair-title.jsx-1764514944{font-size:3rem;}}", "@media (max-width:361px){#career-fair-title.jsx-1764514944{font-size:2.25rem;}}"]
      }));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var hero = (hero_Hero);
// CONCATENATED MODULE: ./components/career-fair/stats.js


function stats__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { stats__typeof = function _typeof(obj) { return typeof obj; }; } else { stats__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return stats__typeof(obj); }

function stats__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stats__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function stats__createClass(Constructor, protoProps, staticProps) { if (protoProps) stats__defineProperties(Constructor.prototype, protoProps); if (staticProps) stats__defineProperties(Constructor, staticProps); return Constructor; }

function stats__possibleConstructorReturn(self, call) { if (call && (stats__typeof(call) === "object" || typeof call === "function")) { return call; } return stats__assertThisInitialized(self); }

function stats__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function stats__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var stats_Stats =
/*#__PURE__*/
function (_Component) {
  stats__inherits(Stats, _Component);

  function Stats() {
    stats__classCallCheck(this, Stats);

    return stats__possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).apply(this, arguments));
  }

  stats__createClass(Stats, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "career-fair-section",
        className: "jsx-1297329390"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "container candidate-page-content"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "all-columns-hero"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "single-column"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "d-flex flex-row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-report-number"
      }, "2K"), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1297329390" + " " + "text-center"
      }, "JOB SEEKERS")), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "single-column"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "d-flex flex-row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-report-number"
      }, "45"), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1297329390" + " " + "text-center"
      }, "RECRUITING", external__react__default.a.createElement("br", {
        className: "jsx-1297329390"
      }), " COMPANIES")), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "single-column"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "d-flex flex-row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-report-number"
      }, "600"), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1297329390" + " " + "text-center"
      }, "INTERVIEWS")), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "large-v-line-white"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "single-column"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "small-h-line"
      }), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "d-flex flex-row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-report-number"
      }, "500"), external__react__default.a.createElement("div", {
        className: "jsx-1297329390" + " " + "job-number-symbol"
      }, "+")), external__react__default.a.createElement("p", {
        className: "jsx-1297329390" + " " + "text-center"
      }, "POSITIONS FILLED")))), external__react__default.a.createElement(style__default.a, {
        styleId: "1297329390",
        css: ["#career-fair-section.jsx-1297329390{background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", ".career-fair-content.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}", ".single-column.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap: align-content:flex-start;-ms-flex-wrap:wrap: align-content:flex-start;flex-wrap:wrap: align-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".all-columns-hero.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:3rem;}", ".job-report-number.jsx-1297329390{font-size:5rem;margin-bottom:0;font-family:Hennigar;opacity:1;margin-bottom:-0.5rem;}", ".job-report-number.jsx-1297329390{color:#505050;}", "p.jsx-1297329390{color:#505050;}", ".small-h-line.jsx-1297329390{background-color:#505050;width:40px;height:4px;}", ".large-v-line-white.jsx-1297329390{background-color:#505050;width:1px;height:120px;margin-right:2rem;margin-left:2rem;}", ".job-number-symbol.jsx-1297329390{font-family:Brandon Grotesque Bold;color:black;font-weight:500;font-size:3rem;color:#505050;}", ".number-with-symbol.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "@media (max-width:992px){p.jsx-1297329390{font-size:0.75rem;}.large-v-line-white.jsx-1297329390{margin-right:0.75rem;margin-left:0.75rem;}}", "@media (max-width:768px){.job-report-number.jsx-1297329390{font-size:5rem;}.single-column.jsx-1297329390{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:2rem;}.large-v-line-white.jsx-1297329390{display:none;}.all-columns-hero.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}", "@media (max-width:415px){.job-report-number.jsx-1297329390{font-size:4rem;}}", "#job-number-symbol.jsx-1297329390{font-family:Brandon Grotesque Bold;color:black;font-weight:700;font-size:2rem;}"]
      }));
    }
  }]);

  return Stats;
}(external__react_["Component"]);

/* harmony default export */ var stats = (stats_Stats);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/career-fair/upcomingFair.js
function upcomingFair__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { upcomingFair__typeof = function _typeof(obj) { return typeof obj; }; } else { upcomingFair__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return upcomingFair__typeof(obj); }

function upcomingFair__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function upcomingFair__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function upcomingFair__createClass(Constructor, protoProps, staticProps) { if (protoProps) upcomingFair__defineProperties(Constructor.prototype, protoProps); if (staticProps) upcomingFair__defineProperties(Constructor, staticProps); return Constructor; }

function upcomingFair__possibleConstructorReturn(self, call) { if (call && (upcomingFair__typeof(call) === "object" || typeof call === "function")) { return call; } return upcomingFair__assertThisInitialized(self); }

function upcomingFair__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function upcomingFair__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var upcomingFair_UpcomingFair =
/*#__PURE__*/
function (_Component) {
  upcomingFair__inherits(UpcomingFair, _Component);

  function UpcomingFair() {
    upcomingFair__classCallCheck(this, UpcomingFair);

    return upcomingFair__possibleConstructorReturn(this, (UpcomingFair.__proto__ || Object.getPrototypeOf(UpcomingFair)).apply(this, arguments));
  }

  upcomingFair__createClass(UpcomingFair, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "upcoming-fair-section"
      }, external__react__default.a.createElement("div", {
        id: "upcoming-fair-container"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h5", {
        id: "event-title"
      }, "Upcoming Fair"), external__react__default.a.createElement("div", {
        className: "gray-line-h"
      }), external__react__default.a.createElement("h2", {
        id: "event-date"
      }, "October 11, 2018"), external__react__default.a.createElement("h5", {
        id: "event-time"
      }, "10:00am-4:00pm"), external__react__default.a.createElement("div", {
        className: "gray-line-h"
      }), external__react__default.a.createElement("p", {
        className: "event-address"
      }, "Oakland Marriot City Center"), external__react__default.a.createElement("p", {
        className: "event-address"
      }, "1001 Broadway"), external__react__default.a.createElement("p", {
        className: "event-address"
      }, "Oakland, California"), external__react__default.a.createElement("p", {
        className: "event-address"
      }, "94607"), external__react__default.a.createElement("div", {
        className: "gray-line-h"
      }), external__react__default.a.createElement("a", {
        id: "ticket-link",
        href: "https://www.eventbrite.com/e/new-west-summit-40-tickets-45670651147?aff=ebdssbdestsearch",
        target: "_blank"
      }, "Purchase Tickets >")), external__react__default.a.createElement("div", {
        id: "event-column-2"
      }, external__react__default.a.createElement("p", {
        className: "event-address"
      }, "Presented by:"), external__react__default.a.createElement("img", {
        id: "sponsor-logo",
        src: "static/images/logos/logo.png"
      }))), external__react__default.a.createElement("style", null, "\n            #upcoming-fair-section {\n              width: 100vw;\n              height: 50vh;\n              background-color: #fafafa;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              padding: 4rem;\n            }\n            #upcoming-fair-container {\n              display: flex;\n              flex-direction: row;\n              justify-content: space-around;\n            }\n            #event-column-2 {display: flex; flex-direction: column; align-items: center; justify-content: center;}\n\n            #event-title {font-family: Sabon Italic; font-size: 1.5rem; color: #505050;}\n            #event-date {color: #505050;}\n            #event-time {font-family: Brandon Grotesque Regular Italic; font-size: 1.5rem; color: #505050;}\n            .event-address {font-family: Brandon Grotesque Regular; line-height: 10px; font-weight: 400; color: #505050;}\n\n            .gray-line-h {height: 2px; width: 250px; background-color: #505050; margin: 15px 0 15px 0;}\n\n            #ticket-link {color: #f0561f; font-family: Brandon Grotesque Regular Italic}\n\n            #sponsor-logo {width: 300px; height: auto;}\n\n            @media (max-width: 770px) {\n              #sponsor-logo {width: 200px; height: auto;}\n              #event-date {font-size: 3rem;}\n            }\n\n            @media (max-width: 420px) {\n              #upcoming-fair-section {height: 100vh; padding: 2rem;}\n              #upcoming-fair-container {min-height: 100%; display: flex; flex-direction: column; justify-content: space-evenly;}\n              #sponsor-logo {width: 150px; height: auto;}\n            }\n          "));
    }
  }]);

  return UpcomingFair;
}(external__react_["Component"]);

/* harmony default export */ var upcomingFair = (upcomingFair_UpcomingFair);
// CONCATENATED MODULE: ./components/career-fair/pastEvents.js


function pastEvents__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pastEvents__typeof = function _typeof(obj) { return typeof obj; }; } else { pastEvents__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pastEvents__typeof(obj); }

function pastEvents__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pastEvents__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pastEvents__createClass(Constructor, protoProps, staticProps) { if (protoProps) pastEvents__defineProperties(Constructor.prototype, protoProps); if (staticProps) pastEvents__defineProperties(Constructor, staticProps); return Constructor; }

function pastEvents__possibleConstructorReturn(self, call) { if (call && (pastEvents__typeof(call) === "object" || typeof call === "function")) { return call; } return pastEvents__assertThisInitialized(self); }

function pastEvents__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pastEvents__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var pastEvents_PastEvents =
/*#__PURE__*/
function (_Component) {
  pastEvents__inherits(PastEvents, _Component);

  function PastEvents() {
    pastEvents__classCallCheck(this, PastEvents);

    return pastEvents__possibleConstructorReturn(this, (PastEvents.__proto__ || Object.getPrototypeOf(PastEvents)).apply(this, arguments));
  }

  pastEvents__createClass(PastEvents, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "past-events-section",
        className: "jsx-2024426468"
      }, external__react__default.a.createElement("div", {
        id: "past-events-container",
        className: "jsx-2024426468"
      }, external__react__default.a.createElement("div", {
        id: "video-column",
        className: "jsx-2024426468"
      }, external__react__default.a.createElement("iframe", {
        hedi: true,
        id: "video-player",
        src: "https://www.youtube.com/embed/d_Q7gszt-KM",
        frameBorder: "0",
        allow: "autoplay; encrypted-media",
        allowfullscreen: true,
        className: "jsx-2024426468"
      })), external__react__default.a.createElement("div", {
        id: "quotes-column",
        className: "jsx-2024426468"
      }, external__react__default.a.createElement("h3", {
        id: "past-events-title",
        className: "jsx-2024426468"
      }, "Past Events"), external__react__default.a.createElement("div", {
        className: "jsx-2024426468" + " " + "gray-line-h"
      }), external__react__default.a.createElement("div", {
        className: "jsx-2024426468" + " " + 'first-testimony'
      }, external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "past-event-quote"
      }, "\"We filled over 70 positions through participating in both Vangst Career Fairs. We will definitely be participating in more upcoming career fairs because it is an efficient way to get in front of qualified job seekers as well as advertise our brand.\""), external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "event-quote-author"
      }, "-Jonathan McCann, LivWell")), external__react__default.a.createElement("div", {
        className: "jsx-2024426468" + " " + 'second-testimony'
      }, external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "past-event-quote"
      }, "\"Dixie Elixirs has participated in two career fairs with Vangst and both times have left with immediate hires.  Great job Vangst Team!\""), external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "event-quote-author"
      }, "-Michael Tudor, Dixie Elixirs")), external__react__default.a.createElement("div", {
        className: "jsx-2024426468" + " " + 'third-testimony'
      }, external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "past-event-quote"
      }, "\"Success for Green Man at Cannabis Career Fair! We met such a wide variety of people, from every walk of life. People living in other states looking for a reason to move to Colorado, some who had 10+ years in other industries but are searching for a new career path, even people already in the industry just ready for a change.\""), external__react__default.a.createElement("p", {
        className: "jsx-2024426468" + " " + "event-quote-author"
      }, "-Green Man Cannabis")))), external__react__default.a.createElement(style__default.a, {
        styleId: "2024426468",
        css: ["#past-events-section.jsx-2024426468{min-width:100vw;min-height:100vh;padding:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#past-events-container.jsx-2024426468{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#video-column.jsx-2024426468{position:relative;width:84%;height:0;padding-top:35%;}", "#video-player.jsx-2024426468{position:absolute;top:5%;left:5%;bottom:0;right:0;width:90%;height:90%;}", "#quotes-column.jsx-2024426468{padding:1rem;width:50%;height:100%;}", ".past-event-quote.jsx-2024426468{font-family:Brandon Grotesque Regular;margin-bottom:0;font-weight:400;}", "@media (max-width:780px){#past-events-container.jsx-2024426468{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#quotes-column.jsx-2024426468{width:100%;margin-top:3rem;}}", "@media (max-width:420px){#past-events-section.jsx-2024426468{padding:1rem;}#quotes-column.jsx-2024426468{min-height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}#past-events-title.jsx-2024426468{font-size:1.25rem;}.past-event-quote.jsx-2024426468{font-size:1rem;line-height:18px;}.event-quote-author.jsx-2024426468{font-size:0.9rem;}.gray-line-h.jsx-2024426468{margin:5px 0 10px 0;}#video-column.jsx-2024426468{position:relative;width:100%;height:0;padding-top:55%;}#video-player.jsx-2024426468{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;}}", ".event-quote-author.jsx-2024426468{font-family:Brandon Grotesque Bold;}"]
      }));
    }
  }]);

  return PastEvents;
}(external__react_["Component"]);

/* harmony default export */ var pastEvents = (pastEvents_PastEvents);
// EXTERNAL MODULE: ./components/MailChimpForm.js
var MailChimpForm = __webpack_require__(6);

// CONCATENATED MODULE: ./components/career-fair/futureCareerFairs.js


function futureCareerFairs__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { futureCareerFairs__typeof = function _typeof(obj) { return typeof obj; }; } else { futureCareerFairs__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return futureCareerFairs__typeof(obj); }

function futureCareerFairs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function futureCareerFairs__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function futureCareerFairs__createClass(Constructor, protoProps, staticProps) { if (protoProps) futureCareerFairs__defineProperties(Constructor.prototype, protoProps); if (staticProps) futureCareerFairs__defineProperties(Constructor, staticProps); return Constructor; }

function futureCareerFairs__possibleConstructorReturn(self, call) { if (call && (futureCareerFairs__typeof(call) === "object" || typeof call === "function")) { return call; } return futureCareerFairs__assertThisInitialized(self); }

function futureCareerFairs__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function futureCareerFairs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var futureCareerFairs_FutureCareerFairs =
/*#__PURE__*/
function (_Component) {
  futureCareerFairs__inherits(FutureCareerFairs, _Component);

  function FutureCareerFairs() {
    futureCareerFairs__classCallCheck(this, FutureCareerFairs);

    return futureCareerFairs__possibleConstructorReturn(this, (FutureCareerFairs.__proto__ || Object.getPrototypeOf(FutureCareerFairs)).apply(this, arguments));
  }

  futureCareerFairs__createClass(FutureCareerFairs, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "future-career-fairs",
        className: "jsx-1379448650"
      }, external__react__default.a.createElement("div", {
        id: "future-career-fair-container",
        className: "jsx-1379448650"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1379448650" + " " + 'mailing-and-booth'
      }, external__react__default.a.createElement("div", {
        className: "jsx-1379448650" + " " + 'mailing'
      }, external__react__default.a.createElement("img", {
        src: "",
        className: "jsx-1379448650"
      }), external__react__default.a.createElement("p", {
        className: "jsx-1379448650" + " " + "text-center fair-title"
      }, "Join our mailing list to stay informed on future career fairs."), external__react__default.a.createElement(MailChimpForm["a" /* default */], null)), external__react__default.a.createElement("div", {
        className: "jsx-1379448650" + " " + 'booth'
      }, external__react__default.a.createElement("img", {
        src: "",
        className: "jsx-1379448650"
      }), external__react__default.a.createElement("p", {
        className: "jsx-1379448650" + " " + "text-center fair-title"
      }, "Contact us about having your own booth at the next career fair"), external__react__default.a.createElement(link__default.a, {
        href: "/contact-vangst-talent"
      }, external__react__default.a.createElement("div", {
        id: "contact-us-button",
        className: "jsx-1379448650" + " " + "text-center"
      }, "Click Here >"))))), external__react__default.a.createElement(style__default.a, {
        styleId: "1379448650",
        css: ["#future-career-fairs.jsx-1379448650{min-height:50vh;min-width:100vw;padding:4rem;background-image:url('/static/images/employer-page/sec_01/orange-background.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#future-career-fair-container.jsx-1379448650{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".fair-title.jsx-1379448650{color:white;font-family:Brandon Grotesque Regular;font-size:1.5rem;margin-bottom:0;}", ".booth.jsx-1379448650{margin-top:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#contact-us-button.jsx-1379448650{border:solid 2px white;padding:10px 3px 10px 3px;width:175px;margin-top:1rem;font-family:Sabon Italic;font-size:1.2rem;color:white;}"]
      }));
    }
  }]);

  return FutureCareerFairs;
}(external__react_["Component"]);

/* harmony default export */ var futureCareerFairs = (futureCareerFairs_FutureCareerFairs);
// EXTERNAL MODULE: ./components/cannabis-employers/companies.js
var companies = __webpack_require__(16);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/vangst-talent-careerfair.js
function vangst_talent_careerfair__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vangst_talent_careerfair__typeof = function _typeof(obj) { return typeof obj; }; } else { vangst_talent_careerfair__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vangst_talent_careerfair__typeof(obj); }

function vangst_talent_careerfair__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vangst_talent_careerfair__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vangst_talent_careerfair__createClass(Constructor, protoProps, staticProps) { if (protoProps) vangst_talent_careerfair__defineProperties(Constructor.prototype, protoProps); if (staticProps) vangst_talent_careerfair__defineProperties(Constructor, staticProps); return Constructor; }

function vangst_talent_careerfair__possibleConstructorReturn(self, call) { if (call && (vangst_talent_careerfair__typeof(call) === "object" || typeof call === "function")) { return call; } return vangst_talent_careerfair__assertThisInitialized(self); }

function vangst_talent_careerfair__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vangst_talent_careerfair__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var url = "https://vangst.com/vangst-talent-careerfair";
var title = "Vangst Cannabis Career Fairs";
var description = "Vangst Cannabis Staffing and Vangsters.com hosts cannabis job fairs in Denver, Las Vegas, Las Angeles, New York, and more to come as the weed industry grows.";
var keywords = "job fair denver, cannabis jobs, job fairs near me, 420 jobs";

var vangst_talent_careerfair_CareerFair =
/*#__PURE__*/
function (_Component) {
  vangst_talent_careerfair__inherits(CareerFair, _Component);

  function CareerFair() {
    vangst_talent_careerfair__classCallCheck(this, CareerFair);

    return vangst_talent_careerfair__possibleConstructorReturn(this, (CareerFair.__proto__ || Object.getPrototypeOf(CareerFair)).apply(this, arguments));
  }

  vangst_talent_careerfair__createClass(CareerFair, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(Header["a" /* default */], {
        url: url,
        title: title,
        description: description,
        keywords: keywords
      }), external__react__default.a.createElement(Menu["a" /* default */], null), external__react__default.a.createElement(hero, null), external__react__default.a.createElement(stats, null), external__react__default.a.createElement(upcomingFair, null), external__react__default.a.createElement(pastEvents, null), external__react__default.a.createElement(futureCareerFairs, null), external__react__default.a.createElement(companies["a" /* default */], null));
    }
  }]);

  return CareerFair;
}(external__react_["Component"]);

/* harmony default export */ var vangst_talent_careerfair = __webpack_exports__["default"] = (Object(PageWrapper["a" /* default */])(vangst_talent_careerfair_CareerFair));

/***/ })
/******/ ]);