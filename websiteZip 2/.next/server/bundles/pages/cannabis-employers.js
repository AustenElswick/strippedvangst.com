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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(11);

// CONCATENATED MODULE: ./components/cannabis-employers/hero.js
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
        className: "hero-section",
        id: "employee-hero-section"
      }, external__react__default.a.createElement("div", {
        id: "hero-content",
        className: "container"
      }, external__react__default.a.createElement("h1", {
        id: "employer-hero-title",
        className: "text-center"
      }, "Hiring made simple"), external__react__default.a.createElement("div", {
        id: "white-div-employee",
        className: "text-center"
      }, external__react__default.a.createElement("p", {
        id: "employer-hero-button-text"
      }, "See how easy it is."))), external__react__default.a.createElement("style", null, "\n          #employee-hero-section {\n            background-image: url(\"/static/images/employer-page/hero/man-hero.jpg\");\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            align-content: center;\n            min-height: 100vh;\n            min-width: 100vw;\n          }\n          #hero-content {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n          }\n          h1 {color: white !important; margin-top: 4rem;}\n          p {color: #f0561f !important; font-size: 1.5rem; margin-bottom: 0px; font-weight: 400; }\n        \n          #white-div-employee {\n            background-color: white;\n            padding-left: 35px;\n            padding-right: 35px;\n            padding-top: 0.3rem;\n            padding-bottom: 0.3rem;\n            margin-top: 1.5rem;\n          }\n          @media (max-width: 1200px) {\n            #employer-hero-title {\n              font-size: 6rem;\n            }\n          }\n          @media (max-width: 995px) {\n            #employer-hero-title {\n              font-size: 4rem;\n            }\n          }\n\n          @media (max-width: 510px) {\n            #employer-hero-title {font-size: 3rem;}\n            #employer-hero-button-text {font-size: 0.9rem;}\n          }\n\n          @media (max-width: 392px) {\n            #employer-hero-title {font-size: 2.5rem;}\n            #white-div-employee {\n              padding-right: 10px;\n              padding-left: 10px;\n            }\n          }\n\n\n        "));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var hero = (hero_Hero);
// CONCATENATED MODULE: ./components/cannabis-employers/candidateDataBase.js
function candidateDataBase__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { candidateDataBase__typeof = function _typeof(obj) { return typeof obj; }; } else { candidateDataBase__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return candidateDataBase__typeof(obj); }

function candidateDataBase__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function candidateDataBase__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function candidateDataBase__createClass(Constructor, protoProps, staticProps) { if (protoProps) candidateDataBase__defineProperties(Constructor.prototype, protoProps); if (staticProps) candidateDataBase__defineProperties(Constructor, staticProps); return Constructor; }

function candidateDataBase__possibleConstructorReturn(self, call) { if (call && (candidateDataBase__typeof(call) === "object" || typeof call === "function")) { return call; } return candidateDataBase__assertThisInitialized(self); }

function candidateDataBase__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function candidateDataBase__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var candidateDataBase_CandidateDataBase =
/*#__PURE__*/
function (_Component) {
  candidateDataBase__inherits(CandidateDataBase, _Component);

  function CandidateDataBase() {
    candidateDataBase__classCallCheck(this, CandidateDataBase);

    return candidateDataBase__possibleConstructorReturn(this, (CandidateDataBase.__proto__ || Object.getPrototypeOf(CandidateDataBase)).apply(this, arguments));
  }

  candidateDataBase__createClass(CandidateDataBase, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "database-section",
        className: "hero-section"
      }, external__react__default.a.createElement("div", {
        id: "database-section-content",
        className: "container"
      }, external__react__default.a.createElement("div", {
        id: "left-column"
      }, external__react__default.a.createElement("div", {
        id: "db-section-label",
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        className: "section-number text-white"
      }, ".01"), external__react__default.a.createElement("p", {
        className: "section-text text-white"
      }, "We have the best people in the business")), external__react__default.a.createElement("h2", {
        id: "db-title"
      }, "We have the largest candidate database"), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("p", {
        id: "db-main-text",
        className: "text-white"
      }, "With over 80,000 job seekers in our database, we cover the most extensive range of skill sets that vary from entry level to executive positions. All of our candidates are pre-qualified and screened to ensure we provide you with the best talent pool from both inside and outside the industry."), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("div", {
        id: "stats-row"
      }, external__react__default.a.createElement("div", {
        className: "stat-container text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-white stat-text"
      }, "80,000+ ", external__react__default.a.createElement("br", null), "job seekers.")), external__react__default.a.createElement("div", {
        className: "stat-container text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-white stat-text"
      }, "The best talent from inside", external__react__default.a.createElement("br", null), " & outside the industry.")), external__react__default.a.createElement("div", {
        className: "stat-container text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-white stat-text"
      }, "Pre-qualified ", external__react__default.a.createElement("br", null), " and ready to work.")))), external__react__default.a.createElement("div", {
        id: "db-right-column"
      }, external__react__default.a.createElement("div", {
        id: "db-img-container"
      }, external__react__default.a.createElement("img", {
        id: "db-img",
        src: "/static/images/employer-page/sec_01/jeff-radway.jpg"
      })), external__react__default.a.createElement("div", {
        id: "testimonial-container"
      }, external__react__default.a.createElement("p", {
        id: "testimonial-quote",
        className: "text-white text-center"
      }, "\"Vangst is the clear choice for cannabis industry recruiting.\""), external__react__default.a.createElement("p", {
        id: "testimonial-name",
        className: "text-white"
      }, "- Jeff Radway, CEO,", external__react__default.a.createElement("br", null), " Green Peak Industries")))), external__react__default.a.createElement("style", null, "\n            h2 {color: white !important}\n            p {color: white; font-size: 1.2rem;}\n            \n            #db-img {width: 250px; height: auto;}\n            \n            #database-section {\n              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');\n              min-height: 100vh;\n              min-width: 100vw;\n              display: flex; \n              flex-direction: column;\n              align-items: center;\n              justify-content: center;\n              overflow: hidden;\n            \n            }\n          #database-section-content {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            align-content: center;\n          }\n\n          #left-column {\n            margin-right: 2rem;\n          }\n\n          #db-section-label {\n            padding-bottom: 2rem;\n          }\n\n          #stats-row {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n          }\n\n          .stat-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n            color: white;\n            padding-right: 10px;\n            padding-left: 10px;\n          }\n\n          .stat-text {\n            font-family: Brandon Grotesque Regular Italic;\n            font-weight: 700;\n            font-size: 1.4rem;\n            line-height: 25px;\n          }\n\n          #db-img-container {\n            padding: 1rem;\n            border: solid 1px #FFFFFF;\n            margin: 2rem;\n          }\n\n          #testimonial-container {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n            padding-right: 2rem;\n            padding-left: 2rem;\n          }\n          #testimonial-quote {\n            font-weight: 700;\n            font-size: 1.2rem;\n          }\n\n          #testimonial-name {\n            font-weight: 400;\n            padding-top: 20px;\n            font-size: 1.2rem;\n          }\n\n          @media (max-width: 1200px) {\n            .stat-text {font-size: 1.2rem;}\n          }\n\n          @media (max-width: 992px) {\n            #db-title {font-size: 3rem;}\n            #db-right-column {display:none;}\n            .stat-text {font-size: 1rem; line-height: 20px;}\n            #db-main-text {font-size: 1.2rem;}\n          }\n\n          @media (max-width: 600px) {\n            #db-title {font-size: 3rem;}\n            .stat-text {font-size: 1rem;}\n          }\n\n          @media (max-width: 530px) {\n            #db-title {font-size: 3rem;}\n            .stat-text {font-size: 0.8rem;}\n            .section-text {font-size: 1rem;}\n            #db-main-text {font-size: 1rem;}\n          }\n\n          @media (max-width: 424px) {\n            #db-title {font-size: 2.3rem;}\n            .stat-text {font-size: 0.8rem; line-height:15px;}\n            .section-text {font-size: 0.9rem;}\n            #db-main-text {font-size: 1rem;}\n          }\n\n          @media (max-width: 376px) {\n            .stat-text {font-size: 1.1rem; line-height:17px;}\n            .stat-container {padding: 0 2px 0 2px;}\n            .section-text {font-size: 1rem;}\n            #left-column {margin-right: 0;}\n          }\n\n\n\n          "));
    }
  }]);

  return CandidateDataBase;
}(external__react_["Component"]);

/* harmony default export */ var candidateDataBase = (candidateDataBase_CandidateDataBase);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/cannabis-employers/bestRecruiters.js
function bestRecruiters__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { bestRecruiters__typeof = function _typeof(obj) { return typeof obj; }; } else { bestRecruiters__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return bestRecruiters__typeof(obj); }

function bestRecruiters__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bestRecruiters__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bestRecruiters__createClass(Constructor, protoProps, staticProps) { if (protoProps) bestRecruiters__defineProperties(Constructor.prototype, protoProps); if (staticProps) bestRecruiters__defineProperties(Constructor, staticProps); return Constructor; }

function bestRecruiters__possibleConstructorReturn(self, call) { if (call && (bestRecruiters__typeof(call) === "object" || typeof call === "function")) { return call; } return bestRecruiters__assertThisInitialized(self); }

function bestRecruiters__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function bestRecruiters__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var bestRecruiters_BestRecruiters =
/*#__PURE__*/
function (_Component) {
  bestRecruiters__inherits(BestRecruiters, _Component);

  function BestRecruiters() {
    bestRecruiters__classCallCheck(this, BestRecruiters);

    return bestRecruiters__possibleConstructorReturn(this, (BestRecruiters.__proto__ || Object.getPrototypeOf(BestRecruiters)).apply(this, arguments));
  }

  bestRecruiters__createClass(BestRecruiters, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "recruiter-section",
        className: "hero-section"
      }, external__react__default.a.createElement("div", {
        id: "recruiter-section-content"
      }, external__react__default.a.createElement("div", {
        id: "recruiter-section-label",
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        id: "recruiter-label-number",
        className: "section-number text-white"
      }, ".02"), external__react__default.a.createElement("p", {
        id: "recruiter-label-text",
        className: "section-text text-white"
      }, "The best recruiters")), external__react__default.a.createElement("h2", {
        id: "recruiter-section-title"
      }, "Seasoned recruiters with ", external__react__default.a.createElement("br", null), "deep industry knowledge"), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("p", {
        id: "recruiter-main-text",
        className: "text-white"
      }, "Growing has its pains. Finding and keeping the right talent shouldn\u2019t be one of them. Rooted in deep industry expertise and expansive networks, our recruiters augment the complicated process of qualifying capable people so you can focus on your business. We communicate every step of the way to ensure effective long-term hires."), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("p", {
        id: "recruiter-quote"
      }, "\u201CVangst doubled our team with finance, sales, engineering, marketing, and customer success talent while maintaining the high standards we employ in our hiring process.\u201D"), external__react__default.a.createElement("div", {
        id: "recruiter-author-container"
      }, external__react__default.a.createElement("p", {
        id: "recruiter-quote-author-name",
        className: "justify-content-right"
      }, "-Roger Obando, CTO, Baker Technologies")), external__react__default.a.createElement("div", {
        id: "recruiter-button-container"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/about-vangst-talent"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("div", {
        id: "recruiter-button-outline"
      }, external__react__default.a.createElement("div", {
        id: "recruiter-button-link"
      }, "Meet our team of experts >")))))), external__react__default.a.createElement("style", null, "\n\n          #recruiter-section {\n            background-image: url('/static/images/employer-page/sec_02/background-image.jpg');\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            min-height: 100vh;\n            min-width: 100vw;\n            overflow: hidden;\n          }\n\n          #recruiter-section-content {\n            padding: 4rem;\n            max-width: 64%;\n          }\n\n          #recruiter-section-label {\n            padding-bottom: 2rem;\n          }\n\n          #recruiter-quote {\n            color: #ffffff !important;\n            font-family: Brandon Grotesque Regular Italic;\n            font-weight: 900 !important;\n            font-size: 1.5rem;\n            line-height: 28px;\n            padding: 1rem 2rem 0.5rem 2rem;\n          }\n\n          #recruiter-quote-author-name {\n            color: white !important;\n            font-weight: 400;\n            padding-right: 2rem;\n          }\n\n          #recruiter-author-container {\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-end;\n            margin-bottom: 2rem;\n          }\n\n          #recruiter-button-link {\n            text-decoration: none;\n            color: white;\n            font-family: Sabon Italic;\n            font-size: 1.2rem;\n\n          }\n\n          #recruiter-button-outline {\n            border: 1px solid #ffffff;\n            padding: 0.4rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            width: 300px;\n          }\n\n          #recruiter-button-container {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            padding: 1rem;\n          }\n\n          @media (max-width: 1140px) {\n            #recruiter-section-title {font-size: 3rem;}\n            #recruiter-quote {font-size: 1.2rem;}\n            #recruiter-quote-author-name {font-size: 1rem;}\n          }\n\n          @media (max-width: 1010px) {\n            #recruiter-section-title {font-size: 3rem;}\n            #recruiter-quote {font-size: 1.2rem; line-height: 22px; padding: 0 0 20px 0;}\n            #recruiter-quote-author-name {font-size: 1rem; padding-top: 0;}\n            #recruiter-main-text {line-height: 22px;}\n            #recruiter-section-content {max-width: 68%;}\n          }\n\n          @media (max-width: 847px) {\n            #recruiter-section-title {font-size: 2.5rem;}\n            #recruiter-quote {font-size: 1.1rem; line-height: 22px; padding: 0 0 20px 0;}\n            #recruiter-quote-author-name {font-size: 1rem; padding-top: 0;}\n            #recruiter-main-text {line-height: 22px; font-size: 1rem;}\n            #recruiter-section-content {max-width: 72%; padding: 3rem;}\n          }\n\n          @media (max-width: 655px) {\n            #recruiter-section-title {font-size: 2rem;}\n            #recruiter-quote {display:none;}\n            #recruiter-quote-author-name {display:none;}\n            #recruiter-main-text {line-height: 22px; font-size: 1.1rem;}\n            #recruiter-section-content {max-width: 70%; padding: 3rem;}\n            #recruiter-label-number {font-size: 1rem;}\n            #recruiter-label-text {font-size: 1rem;}\n            #recruiter-button-container {padding: 0;}\n          }\n\n          @media (max-width: 565px) {\n            #recruiter-section-title {font-size: 1.5rem;}\n            #recruiter-main-text {line-height: 19px; font-size: 1rem;}\n            #recruiter-section-content {max-width: 70%; padding: 2rem;}\n            #recruiter-label-number {font-size: 0.9rem;}\n            #recruiter-label-text {font-size: 0.9rem;}\n            #recruiter-button-container {padding: 0;}\n            #recruiter-section-label {padding: 0 0 1rem 0;}\n          }\n\n          @media (max-width: 480px) {\n            #recruiter-section-title {font-size: 1.5rem;}\n            #recruiter-main-text {line-height: 19px; font-size: 1rem;}\n            #recruiter-section-content {max-width: 75%; padding: 2rem;}\n            #recruiter-label-number {font-size: 0.9rem;}\n            #recruiter-label-text {font-size: 0.9rem;}\n            #recruiter-button-container {padding: 0;}\n            #recruiter-section-label {padding: 0 0 1rem 0;}\n          }\n\n          @media (max-width: 400px) {\n            #recruiter-section-content {max-width: 75%; padding: 1rem;}\n            #recruiter-button-link {font-size: 1rem;}\n            #recruiter-button-outline {width: 250px; margin-left: 15px}\n          }\n          @media (max-width: 321px) {\n            #recruiter-section-title {font-size: 1.25rem;}\n            #recruiter-button-outline {width: 250px; margin-left: 35px}\n        }\n          \n          \n          "));
    }
  }]);

  return BestRecruiters;
}(external__react_["Component"]);

/* harmony default export */ var bestRecruiters = (bestRecruiters_BestRecruiters);
// CONCATENATED MODULE: ./components/cannabis-employers/guaranteePlaced.js
function guaranteePlaced__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { guaranteePlaced__typeof = function _typeof(obj) { return typeof obj; }; } else { guaranteePlaced__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return guaranteePlaced__typeof(obj); }

function guaranteePlaced__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function guaranteePlaced__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function guaranteePlaced__createClass(Constructor, protoProps, staticProps) { if (protoProps) guaranteePlaced__defineProperties(Constructor.prototype, protoProps); if (staticProps) guaranteePlaced__defineProperties(Constructor, staticProps); return Constructor; }

function guaranteePlaced__possibleConstructorReturn(self, call) { if (call && (guaranteePlaced__typeof(call) === "object" || typeof call === "function")) { return call; } return guaranteePlaced__assertThisInitialized(self); }

function guaranteePlaced__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function guaranteePlaced__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var guaranteePlaced_GuaranteePlaced =
/*#__PURE__*/
function (_Component) {
  guaranteePlaced__inherits(GuaranteePlaced, _Component);

  function GuaranteePlaced() {
    guaranteePlaced__classCallCheck(this, GuaranteePlaced);

    return guaranteePlaced__possibleConstructorReturn(this, (GuaranteePlaced.__proto__ || Object.getPrototypeOf(GuaranteePlaced)).apply(this, arguments));
  }

  guaranteePlaced__createClass(GuaranteePlaced, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "placement-section",
        className: "hero-section"
      }, external__react__default.a.createElement("div", {
        id: "placement-section-content"
      }, external__react__default.a.createElement("div", {
        id: "db-section-label",
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        id: "placement-section-number",
        className: "section-number text-white"
      }, ".03"), external__react__default.a.createElement("p", {
        id: "placement-section-text",
        className: "section-text text-white"
      }, "We back every one of our candidates")), external__react__default.a.createElement("h2", {
        id: "placement-title"
      }, "100% guarantee of placed candidates"), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("p", {
        className: "text-white",
        id: "placement-quote"
      }, "\u201CVangst was enthusiastic and attentive to our resource need and worked diligently to source and qualify candidates for the position. They provided attuned service over the course of the engagement and maintained consistent communication with coordinating an exceptional solution.\u201D"), external__react__default.a.createElement("div", {
        id: "placement-quote-container"
      }, external__react__default.a.createElement("p", {
        id: "placement-quote-author"
      }, "- Nelson Oliver, Controller, O.pen Vape")), external__react__default.a.createElement("div", {
        className: "white-line"
      })), external__react__default.a.createElement("style", null, "\n            #placement-section {\n              background-image: url('/static/images/employer-page/sec_03/background-image.jpg');\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-start;\n              align-items: center;\n              min-height: 100vh;\n              min-width: 100vw;\n              overflow: hidden;\n            }\n\n            #placement-section-content {\n              padding: 4rem;\n              max-width: 70%;\n            }\n}           \n            #placement-section-number {\n              font-weight: 700;\n            }\n\n            #placement-section-text {\n              font-weight: 400;\n            }\n          \n            #placement-title {\n              font-size: 6rem;\n              line-height: 100px;\n            }\n\n            #placement-quote {\n              font-weight: 700;\n            }\n\n            #placement-quote-author {\n              font-weight: 400;\n              margin: 10px;\n              color: white !important;\n            }\n\n            #placement-quote-container {\n              display: flex;\n              flex-direction: row;\n              justify-content: flex-end;\n            }\n\n            @media (max-width: 1175px) {\n              #placement-section-content {max-width: 100%;}\n              #placement-title {font-size: 4rem;}\n            }\n\n            @media (max-width: 1035px) {\n              #placement-section-content {max-width: 100%;}\n              #placement-title {font-size: 5rem;}\n            }\n\n            @media (max-width: 710px) {\n              #placement-title {font-size: 4rem; line-height: 70px;}\n            }\n\n            @media (max-width: 600px) {\n              #placement-section-content {padding: 2rem;}\n            }\n\n            @media (max-width: 527px) {\n              #placement-section-content {padding: 2rem;}\n              #placement-title {font-size: 3rem; line-height: 50px;}\n              #placement-quote {font-size: 1.1rem; line-height: 20px;}\n              #placement-quote-author {font-size: 1rem;}\n              #db-section-label {padding-top: 0;}\n            }\n\n            @media (max-width: 410px) {\n              #placement-title {font-size: 2rem; line-height: 30px;}\n              #placement-quote {font-size: 1rem; line-height: 20px;}\n            }\n          "));
    }
  }]);

  return GuaranteePlaced;
}(external__react_["Component"]);

/* harmony default export */ var guaranteePlaced = (guaranteePlaced_GuaranteePlaced);
// CONCATENATED MODULE: ./components/cannabis-employers/testimonyCarousel.js
function testimonyCarousel__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { testimonyCarousel__typeof = function _typeof(obj) { return typeof obj; }; } else { testimonyCarousel__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return testimonyCarousel__typeof(obj); }

function testimonyCarousel__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testimonyCarousel__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function testimonyCarousel__createClass(Constructor, protoProps, staticProps) { if (protoProps) testimonyCarousel__defineProperties(Constructor.prototype, protoProps); if (staticProps) testimonyCarousel__defineProperties(Constructor, staticProps); return Constructor; }

function testimonyCarousel__possibleConstructorReturn(self, call) { if (call && (testimonyCarousel__typeof(call) === "object" || typeof call === "function")) { return call; } return testimonyCarousel__assertThisInitialized(self); }

function testimonyCarousel__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function testimonyCarousel__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var testimonyCarousel_TestimonyCarousel =
/*#__PURE__*/
function (_Component) {
  testimonyCarousel__inherits(TestimonyCarousel, _Component);

  function TestimonyCarousel() {
    testimonyCarousel__classCallCheck(this, TestimonyCarousel);

    return testimonyCarousel__possibleConstructorReturn(this, (TestimonyCarousel.__proto__ || Object.getPrototypeOf(TestimonyCarousel)).apply(this, arguments));
  }

  testimonyCarousel__createClass(TestimonyCarousel, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "carousel-section"
      }, external__react__default.a.createElement("div", {
        id: "carousel-section-content"
      }, external__react__default.a.createElement("div", {
        id: "left-carousel-column"
      }, external__react__default.a.createElement("h3", {
        id: "carousel-quote"
      }, "\u201CVangst added 9+ members to our team that have been incredibly valuable for LeafLink. The CEO and team at Vangst understand the industry and their clients on a level we\u2019ve not seen with any other recruiting firms.\u201D")), external__react__default.a.createElement("div", {
        id: "author-container"
      }, external__react__default.a.createElement("div", {
        className: "small-vertical-line-white"
      }), external__react__default.a.createElement("h4", {
        id: "quote-author-name"
      }, "RYAN G. SMITH,", external__react__default.a.createElement("br", null), "CO-FOUNDER AND CEO,", external__react__default.a.createElement("br", null), "LEAFLINK"), external__react__default.a.createElement("div", {
        className: "small-vertical-line-white"
      }))), external__react__default.a.createElement("style", null, "\n          #carousel-section {\n            min-height: 33vh;\n            min-width: 100vw;\n            background-image: url('/static/images/employer-page/testimonials/carousel-image.jpg');\n            background-position: center-top;\n            background-repeat: no-repeat;\n            background-size: cover;\n            padding: 2rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n          }\n\n          #carousel-section-content {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-content: center;\n            align-items: center;\n          }\n\n          #left-carousel-column {\n            display: flex;\n            flex-dirction: column;\n            justify-content: center;\n            width: 60%;\n            padding-right: 2rem;\n          }\n\n          #carousel-quote {\n            color: white;\n            line-height: 33px;\n            font-size: 1.5rem;\n            opacity: 1;\n\n          }\n\n\n          .quotation-marks {\n            font-size: 3rem;\n          }\n\n          #author-container {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            align-content: center;\n          }\n\n          #quote-author-name {\n            color: white;\n            font-family: Brandon Grotesque Regular;\n            padding-left: 10px;\n            padding-right: 10px;\n            padding-top: 4px;\n          }\n\n          .small-vertical-line-white {\n            width: 2px;\n            height: 35px;\n            background-color: white;\n            border: none;\n          }\n\n          @media (max-width: 1300px) {\n            #carousel-section-content {\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n            }\n            #left-carousel-column {\n              width: 100%;\n              padding: 0;\n            }\n          }\n\n          @media (max-width: 1100px){\n            #carousel-quote {font-size: 1.2rem;}\n          }\n\n          @media (max-width: 900px){\n            #carousel-quote {font-size: 1rem; line-height: 22px;}\n          }\n\n          @media (max-width: 565px){\n            #carousel-quote {font-size: 1rem; line-height: 18px;}\n            #quote-author-name {font-size: 1rem;}\n          }\n          \n          "));
    }
  }]);

  return TestimonyCarousel;
}(external__react_["Component"]);

/* harmony default export */ var testimonyCarousel = (testimonyCarousel_TestimonyCarousel);
// EXTERNAL MODULE: ./components/cannabis-employers/companies.js
var companies = __webpack_require__(16);

// EXTERNAL MODULE: external "react-mailchimp-subscribe"
var external__react_mailchimp_subscribe_ = __webpack_require__(8);
var external__react_mailchimp_subscribe__default = /*#__PURE__*/__webpack_require__.n(external__react_mailchimp_subscribe_);

// CONCATENATED MODULE: ./components/EmailFormVangsters.js
function EmailFormVangsters__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EmailFormVangsters__typeof = function _typeof(obj) { return typeof obj; }; } else { EmailFormVangsters__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EmailFormVangsters__typeof(obj); }

function EmailFormVangsters__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EmailFormVangsters__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EmailFormVangsters__createClass(Constructor, protoProps, staticProps) { if (protoProps) EmailFormVangsters__defineProperties(Constructor.prototype, protoProps); if (staticProps) EmailFormVangsters__defineProperties(Constructor, staticProps); return Constructor; }

function EmailFormVangsters__possibleConstructorReturn(self, call) { if (call && (EmailFormVangsters__typeof(call) === "object" || typeof call === "function")) { return call; } return EmailFormVangsters__assertThisInitialized(self); }

function EmailFormVangsters__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EmailFormVangsters__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // a basic form

var EmailFormVangsters_CustomForm = function CustomForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      onValidated = _ref.onValidated;
  var email, fname, lname;

  var submit = function submit() {
    return email && fname && lname && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    });
  };

  return external__react__default.a.createElement("div", null, status === "sending" && external__react__default.a.createElement("div", {
    style: {
      color: "blue"
    }
  }, "sending..."), status === "error" && external__react__default.a.createElement("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && external__react__default.a.createElement("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), external__react__default.a.createElement("br", null), external__react__default.a.createElement("div", {
    className: "mailchimp-form"
  }, external__react__default.a.createElement("input", {
    className: "email-form-input",
    style: {
      fontSize: "1em",
      padding: 5,
      margin: 2
    },
    ref: function ref(node) {
      return fname = node;
    },
    type: "text",
    placeholder: "First name"
  }), external__react__default.a.createElement("input", {
    className: "email-form-input",
    style: {
      fontSize: "1em",
      padding: 5,
      margin: 2
    },
    ref: function ref(node) {
      return lname = node;
    },
    type: "text",
    placeholder: "Last name"
  }), external__react__default.a.createElement("input", {
    className: "email-form-input",
    style: {
      fontSize: "1em",
      padding: 5,
      margin: 2
    },
    ref: function ref(node) {
      return email = node;
    },
    type: "email",
    placeholder: "Email"
  }), external__react__default.a.createElement("button", {
    id: "subscribe-button",
    onClick: submit
  }, "Subscribe")), external__react__default.a.createElement("style", null, "\n\n\n          .email-form-input {\n              height: 2.2rem;\n              box-shadow: none;\n              padding: 1rem;\n              border: solid 1px #dadada;\n          }\n          #subscribe-button {\n              background-color: #f0561f;\n              color: white;\n              font-family: Sabon Italic;\n                letter-spacing: 1.7px;\n                line-height: 1.4em;\n                font-weight: 700;\n                padding: 1rem;\n                box-shadow: none;\n                border: none;\n                margin-top: 0;\n          }\n          "));
};

var EmailFormVangsters_EmailFormVangsters =
/*#__PURE__*/
function (_Component) {
  EmailFormVangsters__inherits(EmailFormVangsters, _Component);

  function EmailFormVangsters() {
    EmailFormVangsters__classCallCheck(this, EmailFormVangsters);

    return EmailFormVangsters__possibleConstructorReturn(this, (EmailFormVangsters.__proto__ || Object.getPrototypeOf(EmailFormVangsters)).apply(this, arguments));
  }

  EmailFormVangsters__createClass(EmailFormVangsters, [{
    key: "render",
    value: function render() {
      var url = "https://vangsttalent.us11.list-manage.com/subscribe/post?u=8efd9047be67bccfe48fccbf3&amp;id=080f236213";
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(external__react_mailchimp_subscribe__default.a, {
        url: url,
        render: function render(_ref2) {
          var subscribe = _ref2.subscribe,
              status = _ref2.status,
              message = _ref2.message;
          return external__react__default.a.createElement(EmailFormVangsters_CustomForm, {
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

  return EmailFormVangsters;
}(external__react_["Component"]);

/* harmony default export */ var components_EmailFormVangsters = (EmailFormVangsters_EmailFormVangsters);
// CONCATENATED MODULE: ./components/cannabis-employers/emailForm.js
function emailForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { emailForm__typeof = function _typeof(obj) { return typeof obj; }; } else { emailForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return emailForm__typeof(obj); }

function emailForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function emailForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function emailForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) emailForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) emailForm__defineProperties(Constructor, staticProps); return Constructor; }

function emailForm__possibleConstructorReturn(self, call) { if (call && (emailForm__typeof(call) === "object" || typeof call === "function")) { return call; } return emailForm__assertThisInitialized(self); }

function emailForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function emailForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var emailForm_EmailForm =
/*#__PURE__*/
function (_Component) {
  emailForm__inherits(EmailForm, _Component);

  function EmailForm() {
    emailForm__classCallCheck(this, EmailForm);

    return emailForm__possibleConstructorReturn(this, (EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).apply(this, arguments));
  }

  emailForm__createClass(EmailForm, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "email-form-section"
      }, external__react__default.a.createElement("div", {
        id: "email-form-section-container"
      }, external__react__default.a.createElement("div", {
        id: "email-form-section-title"
      }, external__react__default.a.createElement("h3", {
        id: "lets-get-going-title",
        className: "text-center"
      }, "LET'S GET GOING."), external__react__default.a.createElement("div", {
        id: "small-gray-line-h"
      })), external__react__default.a.createElement("div", {
        id: "email-form-container"
      }, external__react__default.a.createElement(components_EmailFormVangsters, null))), external__react__default.a.createElement("style", null, "\n                    #email-form-section {\n                        display: flex;\n                        flex-direction: row;\n                        justify-content: center;\n                        align-items: center;\n                        padding: 3rem 0 3rem 0;\n                        min-height: 30vh;\n                    }\n\n                    #email-form-section-container {\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                    }\n\n                    #email-form-section-title {\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                        align-content: center;\n                    }\n\n                    #small-gray-line-h {\n                        background-color: #dadada;\n                        height: 2px;\n                        width: 150px;\n                    }\n\n                    #email-form-container {\n                        padding: 2rem;\n                    }\n\n                    #email-submit-button {\n                        background-color: #f0561f;\n                        color: white;\n                    }\n\n                    #email-button-text {\n                        color: white !important;\n                    }\n\n                    @media (max-width: 389px) {\n                        #email-form-section {\n                            padding: 2rem 0 0 0;\n                        }\n                        #subscribe-button {\n                            margin-top: 1rem;\n                        }\n\n                    }\n                    @media (max-width: 321px) {\n                        #lets-get-going-title {font-size: 1.5rem;}\n                    }\n\n\n                    "));
    }
  }]);

  return EmailForm;
}(external__react_["Component"]);

/* harmony default export */ var emailForm = (emailForm_EmailForm);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "reactstrap"
var external__reactstrap_ = __webpack_require__(4);
var external__reactstrap__default = /*#__PURE__*/__webpack_require__.n(external__reactstrap_);

// CONCATENATED MODULE: ./components/cannabis-employers/contactSales.js


function contactSales__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contactSales__typeof = function _typeof(obj) { return typeof obj; }; } else { contactSales__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contactSales__typeof(obj); }

function contactSales__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contactSales__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contactSales__createClass(Constructor, protoProps, staticProps) { if (protoProps) contactSales__defineProperties(Constructor.prototype, protoProps); if (staticProps) contactSales__defineProperties(Constructor, staticProps); return Constructor; }

function contactSales__possibleConstructorReturn(self, call) { if (call && (contactSales__typeof(call) === "object" || typeof call === "function")) { return call; } return contactSales__assertThisInitialized(self); }

function contactSales__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function contactSales__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var contactSales_ContactSales =
/*#__PURE__*/
function (_Component) {
  contactSales__inherits(ContactSales, _Component);

  function ContactSales() {
    var _this;

    contactSales__classCallCheck(this, ContactSales);

    _this = contactSales__possibleConstructorReturn(this, (ContactSales.__proto__ || Object.getPrototypeOf(ContactSales)).call(this));
    Object.defineProperty(contactSales__assertThisInitialized(_this), "companyNameChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          companyName: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "firstNameChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          firstName: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "lastNameChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          lastName: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "emailChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          emailFrom: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "locationChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          location: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "positionChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          position: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "phoneNumberChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          phoneNumber: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "marketingSourceChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          marketingSource: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "subjectChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          subject: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "contentChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          content: e.target.value
        });
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "sendEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          successMessage: "Sending..."
        });

        var formData = new FormData();
        formData.append("companyName", _this.state.companyName);
        formData.append("firstName", _this.state.firstName);
        formData.append("lastName", _this.state.lastName);
        formData.append("email", _this.state.emailFrom);
        formData.append("location", _this.state.location);
        formData.append("position", _this.state.position);
        formData.append("phoneNumber", _this.state.phoneNumber);
        formData.append("marketingSource", _this.state.marketingSource);
        formData.append("subject", _this.state.subject);
        formData.append("content", _this.state.content);
        fetch("/sendgridsalescontact", {
          method: "POST",
          body: formData
        }).catch(function (err) {
          return console.log(err);
        });

        _this.setState({
          successMessage: "You have reached out"
        });

        setTimeout(_this.toggle, 3000);
      }
    });
    Object.defineProperty(contactSales__assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          modal: !_this.state.modal
        });
      }
    });
    _this.state = {
      modal: false,
      companyName: "",
      firstName: "",
      lastName: "",
      emailFrom: "",
      location: "",
      position: "",
      phoneNumber: "",
      marketingSource: "",
      subject: "",
      content: "",
      successMessage: ""
    };
    return _this;
  }

  contactSales__createClass(ContactSales, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        id: "contact-sales-form-section",
        className: "jsx-3731960749"
      }, external__react__default.a.createElement("div", {
        id: "section-title-container",
        className: "jsx-3731960749"
      }, external__react__default.a.createElement("h3", {
        id: "contact-sales-form-title",
        className: "jsx-3731960749" + " " + "text-center"
      }, "GET STARTED"), external__react__default.a.createElement("div", {
        id: "small-gray-line-h",
        className: "jsx-3731960749"
      })), external__react__default.a.createElement("div", {
        className: "jsx-3731960749" + " " + "d-flex justify-content-center"
      }, external__react__default.a.createElement("input", {
        id: "contact-sales-submit-button",
        type: "button",
        value: "Contact Us",
        onClick: this.toggle,
        className: "jsx-3731960749"
      })), external__react__default.a.createElement(external__reactstrap_["Modal"], {
        isOpen: this.state.modal,
        toggle: this.toggle
      }, external__react__default.a.createElement(external__reactstrap_["ModalHeader"], {
        id: "modal-header",
        toggle: this.toggle
      }, external__react__default.a.createElement("div", {
        className: "jsx-3731960749"
      }, external__react__default.a.createElement("img", {
        id: "logo-img",
        src: "/static/images/logos/logo-graphic.png",
        alt: "vangst logo",
        className: "jsx-3731960749"
      }), external__react__default.a.createElement("img", {
        id: "logo-text",
        src: "/static/images/logos/logo-text.png",
        alt: "vangst logo text",
        className: "jsx-3731960749"
      }))), external__react__default.a.createElement(external__reactstrap_["ModalBody"], {
        id: "modal-body"
      }, external__react__default.a.createElement(external__reactstrap_["Form"], null, external__react__default.a.createElement("div", {
        id: "contact-inputs",
        className: "jsx-3731960749"
      }, external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "First Name",
        onChange: this.firstNameChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Last Name",
        onChange: this.lastNameChange
      })), external__react__default.a.createElement("div", {
        id: "contact-inputs",
        className: "jsx-3731960749"
      }, external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "email",
        placeholder: "Email",
        onChange: this.emailChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Phone",
        onChange: this.phoneNumberChange
      })), external__react__default.a.createElement("div", {
        id: "contact-inputs",
        className: "jsx-3731960749"
      }, external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Company Name",
        onChange: this.companyNameChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Location",
        onChange: this.locationChange
      })), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Position",
        onChange: this.positionChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "How did you hear about us?",
        onChange: this.marketingSourceChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        type: "text",
        placeholder: "Subject",
        onChange: this.subjectChange
      }), external__react__default.a.createElement(external__reactstrap_["Input"], {
        className: "contact-sales-input",
        id: "contact-textarea",
        type: "textarea",
        onChange: this.contentChange,
        rows: "7",
        cols: "42",
        placeholder: "Message"
      }), this.state.successMessage ? external__react__default.a.createElement("div", {
        className: "jsx-3731960749" + " " + "text-success text-center"
      }, this.state.successMessage) : null, external__react__default.a.createElement("div", {
        className: "jsx-3731960749" + " " + "d-flex justify-content-center"
      }, external__react__default.a.createElement("input", {
        id: "contact-sales-submit-button",
        type: "button",
        value: "Submit",
        onClick: this.sendEmail,
        className: "jsx-3731960749"
      }))))), external__react__default.a.createElement(style__default.a, {
        styleId: "3731960749",
        css: ["#contact-sales-form-section.jsx-3731960749{padding:2rem;}", "#contact-sales-form-title.jsx-3731960749{color:black !important;}", "#contact-inputs.jsx-3731960749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", "#contact-sales-submit-button.jsx-3731960749{background-color:#f0561f;padding:8px 35px 5px 35px;color:white;font-family:Sabon Italic;margin-top:1rem;}", ".form-control.jsx-3731960749{border-radius:0 !important;}", "#section-title-container.jsx-3731960749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:1rem;}", "#small-gray-line-h.jsx-3731960749{background-color:#dadada;height:2px;width:150px;}", "#logo-img.jsx-3731960749{height:30px;padding-right:15px;}", "#logo-text.jsx-3731960749{height:25px;}", "@media (max-width:420px){#contact-inputs.jsx-3731960749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]
      }));
    }
  }]);

  return ContactSales;
}(external__react_["Component"]);

/* harmony default export */ var contactSales = (contactSales_ContactSales);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: ./components/PageWrapper.js
var PageWrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/cannabis-employers.js
function cannabis_employers__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { cannabis_employers__typeof = function _typeof(obj) { return typeof obj; }; } else { cannabis_employers__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return cannabis_employers__typeof(obj); }

function cannabis_employers__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cannabis_employers__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cannabis_employers__createClass(Constructor, protoProps, staticProps) { if (protoProps) cannabis_employers__defineProperties(Constructor.prototype, protoProps); if (staticProps) cannabis_employers__defineProperties(Constructor, staticProps); return Constructor; }

function cannabis_employers__possibleConstructorReturn(self, call) { if (call && (cannabis_employers__typeof(call) === "object" || typeof call === "function")) { return call; } return cannabis_employers__assertThisInitialized(self); }

function cannabis_employers__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function cannabis_employers__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var cannabis_employers_url = "https://vangst.com/cannabis-employers";
var title = "Employers | Hire Cannabis Professionals";
var description = "Vangst Cannabis Staffing has successfully connected over 7,500 cannabis professionals with high level cannabis careers in the rapidly emerging mmj industry.";
var keywords = "mmj, staffing agencies near me, temp agencies near me, job agency, staffing companies";

var cannabis_employers_EmployerPage =
/*#__PURE__*/
function (_Component) {
  cannabis_employers__inherits(EmployerPage, _Component);

  function EmployerPage() {
    cannabis_employers__classCallCheck(this, EmployerPage);

    return cannabis_employers__possibleConstructorReturn(this, (EmployerPage.__proto__ || Object.getPrototypeOf(EmployerPage)).apply(this, arguments));
  }

  cannabis_employers__createClass(EmployerPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(Header["a" /* default */], {
        url: cannabis_employers_url,
        title: title,
        description: description,
        keywords: keywords
      }), external__react__default.a.createElement(Menu["a" /* default */], null), external__react__default.a.createElement(hero, null), external__react__default.a.createElement(contactSales, null), external__react__default.a.createElement(candidateDataBase, null), external__react__default.a.createElement(bestRecruiters, null), external__react__default.a.createElement(guaranteePlaced, null), external__react__default.a.createElement(emailForm, null), external__react__default.a.createElement(testimonyCarousel, null), external__react__default.a.createElement(companies["a" /* default */], null)));
    }
  }]);

  return EmployerPage;
}(external__react_["Component"]);

/* harmony default export */ var cannabis_employers = __webpack_exports__["default"] = (Object(PageWrapper["a" /* default */])(cannabis_employers_EmployerPage));

/***/ })
/******/ ]);