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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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
        href: "/employer-page"
      }, "EMPLOYERS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
        className: "nav-link",
        href: "https://blog.vangst.com/cannabis-salary-guide-2018/"
      }, "INDUSTRY INSIGHT")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavLink"], {
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
      }, "CONTACT")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", null, "\n                    .dropdown-link {padding: 0 0 0 10px !important; width: 100%;}\n                    .nav-link {padding-right: 0; padding-left: 0; margin: 0;}\n                "));
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
        crossorigin: "anonymous"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_4__src_styles_style_scss___default.a
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        href: "static/images/logos/logo-graphic.png"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "utf-8"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "9BhI-hpsNwP0y9WxS_E0yo1ztIl7iz3lAItuWPSAeAQ"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Vangst | The Cannabis Industry's Top Staffing Agency")));
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/error");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(5);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(15);
var error__default = /*#__PURE__*/__webpack_require__.n(error_);

// EXTERNAL MODULE: ./components/PageWrapper.js
var PageWrapper = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Menu.js
var Menu = __webpack_require__(11);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/vangst-main-page.js/Hero.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Hero_Hero =
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
        id: "vangst-main-page-hero",
        className: "hero-section"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "col-lg-12"
      }, external__react__default.a.createElement("h1", {
        className: "text-white text-center hero-title"
      }, "Cannabis is hiring."), external__react__default.a.createElement("div", {
        className: "hero-cta"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/employer-page"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("div", {
        className: "hero-button"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/arrow-left.png"
      }), external__react__default.a.createElement("p", {
        className: "text-light text-center"
      }, "Hire the perfect person")))), external__react__default.a.createElement("div", {
        id: "we-are-ready-text",
        className: "white-div"
      }, external__react__default.a.createElement("p", {
        className: "text-center"
      }, "We're growing.  Are you?")), external__react__default.a.createElement(link__default.a, {
        href: "/vangst-cannabis-staffing-services"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("div", {
        className: "hero-button"
      }, external__react__default.a.createElement("p", {
        className: "text-light text-center"
      }, "Find your perfect job"), external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/arrow-right.png"
      })))))))), external__react__default.a.createElement("style", null, "\n\n                    #vangst-main-page-hero {\n                        background-image: url(\"/static/images/vangst-main-page/plant-in-hand-1472.jpg\");\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                    }\n\n                    @media (max-width: 770px) {\n                        #we-are-ready-text {display:none};\n                    }\n                \n                "));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./components/vangst-main-page.js/VangstIsDope.js
function VangstIsDope__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VangstIsDope__typeof = function _typeof(obj) { return typeof obj; }; } else { VangstIsDope__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VangstIsDope__typeof(obj); }

function VangstIsDope__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VangstIsDope__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VangstIsDope__createClass(Constructor, protoProps, staticProps) { if (protoProps) VangstIsDope__defineProperties(Constructor.prototype, protoProps); if (staticProps) VangstIsDope__defineProperties(Constructor, staticProps); return Constructor; }

function VangstIsDope__possibleConstructorReturn(self, call) { if (call && (VangstIsDope__typeof(call) === "object" || typeof call === "function")) { return call; } return VangstIsDope__assertThisInitialized(self); }

function VangstIsDope__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VangstIsDope__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var VangstIsDope_VangstIsDope =
/*#__PURE__*/
function (_Component) {
  VangstIsDope__inherits(VangstIsDope, _Component);

  function VangstIsDope() {
    VangstIsDope__classCallCheck(this, VangstIsDope);

    return VangstIsDope__possibleConstructorReturn(this, (VangstIsDope.__proto__ || Object.getPrototypeOf(VangstIsDope)).apply(this, arguments));
  }

  VangstIsDope__createClass(VangstIsDope, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section section-top section-full vangst-is-dope"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "col-lg-8"
      }, external__react__default.a.createElement("div", {
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        className: "section-number text-white"
      }, ".01"), external__react__default.a.createElement("p", {
        className: "section-text text-white"
      }, "Vangst")), external__react__default.a.createElement("h2", {
        className: "text-white text-left"
      }, "The cannabis industry's #1 recruiting resource."), external__react__default.a.createElement("div", {
        className: "white-line"
      }), external__react__default.a.createElement("p", {
        className: "text-white section-copy"
      }, "Since launching in 2015, we\u2019ve connected over 7,500 candidates with jobs in the rapidly emerging cannabis industry. Through direct hire, Vangst GIGS, career fairs, and our job board, our team continues to pioneer recruiting solutions tailored specifically to the cannabis industry."), external__react__default.a.createElement("div", {
        className: "white-line"
      })), external__react__default.a.createElement("div", {
        id: "play-button-container",
        className: "col-lg-4"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/employer-page"
      }, external__react__default.a.createElement("div", {
        className: "play-button-container"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/play-button.png",
        alt: ""
      }), external__react__default.a.createElement("a", {
        className: "play-button"
      }, external__react__default.a.createElement("p", null, "See how it works"))))))), external__react__default.a.createElement("style", null, "\n                    @media (max-width: 770px){\n                        #play-button-container {display: flex; flex-direction: row; justify-content: center;}\n\n                    }\n                "));
    }
  }]);

  return VangstIsDope;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_VangstIsDope = (VangstIsDope_VangstIsDope);
// CONCATENATED MODULE: ./components/vangst-main-page.js/JobReport.js
function JobReport__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { JobReport__typeof = function _typeof(obj) { return typeof obj; }; } else { JobReport__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return JobReport__typeof(obj); }

function JobReport__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function JobReport__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function JobReport__createClass(Constructor, protoProps, staticProps) { if (protoProps) JobReport__defineProperties(Constructor.prototype, protoProps); if (staticProps) JobReport__defineProperties(Constructor, staticProps); return Constructor; }

function JobReport__possibleConstructorReturn(self, call) { if (call && (JobReport__typeof(call) === "object" || typeof call === "function")) { return call; } return JobReport__assertThisInitialized(self); }

function JobReport__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function JobReport__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var JobReport_JobReport =
/*#__PURE__*/
function (_Component) {
  JobReport__inherits(JobReport, _Component);

  function JobReport() {
    JobReport__classCallCheck(this, JobReport);

    return JobReport__possibleConstructorReturn(this, (JobReport.__proto__ || Object.getPrototypeOf(JobReport)).apply(this, arguments));
  }

  JobReport__createClass(JobReport, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section section-top section-full job-report"
      }, external__react__default.a.createElement("div", {
        className: "color-overlay"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row justify-content-center align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "col-lg-8"
      }, external__react__default.a.createElement("div", {
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        className: "section-number job-report-section-number"
      }, ".02"), external__react__default.a.createElement("p", {
        className: "section-text text-white"
      }, "The Job Report")), external__react__default.a.createElement("h2", {
        className: "text-left job-report-title"
      }, "Download the ", external__react__default.a.createElement("br", null), "Vangst Salary Report"), external__react__default.a.createElement("div", {
        className: "white-line job-report-line"
      }), external__react__default.a.createElement("p", {
        className: "section-copy job-report-section-copy"
      }, "The Vangst Cannabis Industry Salary Guide is the first-ever report to establish the average salary of specific roles within the cannabis industry. As the cannabis industry grows at an exponential rate, we will continue to report the most accurate and reliable data possible from leading companies."), external__react__default.a.createElement("div", {
        className: "white-line job-report-line"
      })), external__react__default.a.createElement("a", {
        id: "salary-report-link",
        className: "col-lg-4 report-column",
        href: "https://blog.vangst.com/cannabis-salary-guide-2018/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "report-graphic",
        src: "/static/images/vangst-main-page/report-img.png",
        alt: "vangst salary report graphic"
      }), external__react__default.a.createElement("img", {
        className: "play-button-img",
        src: "/static/images/vangst-main-page/play-button.png",
        alt: ""
      }), external__react__default.a.createElement("div", {
        className: "text-light"
      }, external__react__default.a.createElement("p", null, "See full report")))))), external__react__default.a.createElement("style", null, "\n                    .job-report {\n                        background-image: url('static/images/vangst-main-page/Home-Section-3-Cropped.jpg');\n                        min-height: 100vh;\n                        background-position: center;\n                        background-repeat: no-repeat;\n                        background-size: cover;\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                        justify-content: center;\n                      }\n                      \n                      .job-report-title {\n                        color: white;\n                      }\n                      \n                      .report-column {\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                        \n                      }\n                      \n                      .play-button-img {\n                        width: 16px;\n                        margin-bottom: 0.5rem;\n                        transform: rotate(90deg);\n                      }\n                      \n                     .job-report-number  {\n                        font-size: 5rem;\n                        margin-bottom: 0;\n                        font-family: Hennigar;\n                        opacity: 1;\n                        margin-bottom: -0.5rem;\n                      }\n                      \n                      .job-report-numbers {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                      }\n                      \n                      .job-report-number-column {\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-content: center;\n                        align-items: center;\n                      }\n                      \n                      .white-line-div {\n                        background-color:white;\n                        height: 1px;\n                        width: 150px;\n                      }\n                      \n                      .section-number-orange {\n                        border: solid 1px #f0561f;\n                        padding: 3px;\n                        padding-top: 6px;\n                        padding-bottom: 6px;\n                        margin-right: 10px;\n                        color: #f0561f;\n                      }\n                      \n                      .section-text-orange {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                        font-style: italic; \n                        color: #f0561f;\n                      }\n                      \n                    #salary-report-link {text-decoration: none;}\n\n                    @media (max-width: 992px) {\n                        .color-overlay {\n                          background: rgba(0,0,0,0.5);\n                          height: 100vh;\n                          width: 100vw;\n                          display: flex;\n                          flex-direction: row;\n                          align-items: center;\n                        }\n                      \n                        .job-report-number {\n                          font-size: 4rem;\n                          letter-spacing: 2px;\n                          padding-bottom: 5px;\n                        }\n                      \n                        #growth-number {\n                          order: -1;\n                        }\n                      \n                        .job-report-numbers {\n                          display: flex;\n                          flex-direction: row;\n                        }\n                      \n                        .job-report-symbol {\n                          font-size: 15px;\n                        }\n                      \n                        .report-graphic {\n                          height: 100px;\n                        }\n                      \n                        .play-button-img {\n                          display: none;\n                        }\n                      }\n\n                      @media (max-width: 321px) {\n                          .report-graphic {display:none;}\n                      }\n\n                      \n                      \n                "));
    }
  }]);

  return JobReport;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_JobReport = (JobReport_JobReport);
// CONCATENATED MODULE: ./components/vangst-main-page.js/Gigs.js
function Gigs__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gigs__typeof = function _typeof(obj) { return typeof obj; }; } else { Gigs__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gigs__typeof(obj); }

function Gigs__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gigs__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gigs__createClass(Constructor, protoProps, staticProps) { if (protoProps) Gigs__defineProperties(Constructor.prototype, protoProps); if (staticProps) Gigs__defineProperties(Constructor, staticProps); return Constructor; }

function Gigs__possibleConstructorReturn(self, call) { if (call && (Gigs__typeof(call) === "object" || typeof call === "function")) { return call; } return Gigs__assertThisInitialized(self); }

function Gigs__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gigs__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Gigs_Gigs =
/*#__PURE__*/
function (_Component) {
  Gigs__inherits(Gigs, _Component);

  function Gigs() {
    Gigs__classCallCheck(this, Gigs);

    return Gigs__possibleConstructorReturn(this, (Gigs.__proto__ || Object.getPrototypeOf(Gigs)).apply(this, arguments));
  }

  Gigs__createClass(Gigs, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section section-top section-full gigs-section"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row justify-content-left align-items-center"
      }, external__react__default.a.createElement("div", {
        className: "col-8 col-lg-7"
      }, external__react__default.a.createElement("div", {
        className: "section-label"
      }, external__react__default.a.createElement("p", {
        className: "section-number-orange"
      }, ".03"), external__react__default.a.createElement("p", {
        className: "section-text-orange"
      }, "Vangst Gigs")), external__react__default.a.createElement("h2", {
        className: "text-dark text-left"
      }, "Work today. ", external__react__default.a.createElement("br", null), "Get paid fast."), external__react__default.a.createElement("div", {
        className: "dark-line"
      }), external__react__default.a.createElement("p", {
        className: "text-dark section-copy"
      }, "Vangst GIGS is the first and only fully compliant temporary employment service in cannabis. Vangst GIGS connects cannabis companies with temporary labor and allows cannabis temporary workers to build their own schedules and get paid quickly."), external__react__default.a.createElement("div", {
        className: "dark-line"
      }), external__react__default.a.createElement("div", {
        id: "gigs-steps-container",
        className: "job-report-numbers col-11"
      }, external__react__default.a.createElement("div", {
        className: "col-12 col-lg-4 text-dark job-report-number-column text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-dark gigs-number"
      }, "1."), external__react__default.a.createElement("p", {
        className: "gigs-step-description"
      }, "SIGN UP FOR GIGS AND GET PRE-QUALIFIED.")), external__react__default.a.createElement("div", {
        className: "col-12 col-lg-4 job-report-number-column text-dark text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-dark gigs-number"
      }, "2."), external__react__default.a.createElement("p", {
        className: "gigs-step-description"
      }, "PICK THE GIGS YOU WANT.")), external__react__default.a.createElement("div", {
        className: " col-12 col-lg-4 job-report-number-column text-dark text-center"
      }, external__react__default.a.createElement("p", {
        className: "text-dark gigs-number"
      }, "3."), external__react__default.a.createElement("p", {
        className: "gigs-step-description"
      }, "GET PAID WEEKLY."))), external__react__default.a.createElement("div", {
        id: "gigs-cta-button-container",
        className: "row col-12"
      }, external__react__default.a.createElement("a", {
        href: "https://gigs.vangst.com/",
        target: "_blank"
      }, external__react__default.a.createElement("div", {
        className: "gigs-cta-button"
      }, external__react__default.a.createElement("div", {
        className: "gigs-cta-text-container"
      }, external__react__default.a.createElement("p", {
        id: "gigs-cta-text-1",
        className: "gigs-cta-text"
      }, "Sign up for Vangst GIGS and get paid >"), external__react__default.a.createElement("p", {
        id: "gigs-cta-text-2",
        className: "gigs-cta-text"
      }, "Sign up >")))))))), external__react__default.a.createElement("style", null, "\n                    @media (max-width: 420px) {\n                        #gigs-cta-button-container {\n                            display: flex;\n                            flex-direction: column;\n                            align-items: flex-start;\n                        }\n\n                        .section-copy {padding-right: 10px;}\n                        \n                        #gigs-steps-container {display: none;}\n                            \n                        .gigs-cta-button { margin-top: 2rem;}\n                        \n                        #gigs-cta-text-1 {display: none;}\n                        #gigs-cta-text-2 {display: block;}\n                    }\n\n                    @media (min-width: 419px) {\n                        #gigs-cta-text-1 { display: block; }\n                        #gigs-cta-text-2 { display: none; }\n                        \n                      }\n\n                      @media (max-width: 321px) {\n                        .gigs-cta-button {margin-top: 1rem; margin-bottom: 1rem; background-color: #ffffff;}\n                    }\n                "));
    }
  }]);

  return Gigs;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_Gigs = (Gigs_Gigs);
// CONCATENATED MODULE: ./components/vangst-main-page.js/News.js
function News__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { News__typeof = function _typeof(obj) { return typeof obj; }; } else { News__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return News__typeof(obj); }

function News__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function News__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function News__createClass(Constructor, protoProps, staticProps) { if (protoProps) News__defineProperties(Constructor.prototype, protoProps); if (staticProps) News__defineProperties(Constructor, staticProps); return Constructor; }

function News__possibleConstructorReturn(self, call) { if (call && (News__typeof(call) === "object" || typeof call === "function")) { return call; } return News__assertThisInitialized(self); }

function News__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function News__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var News_News =
/*#__PURE__*/
function (_Component) {
  News__inherits(News, _Component);

  function News() {
    News__classCallCheck(this, News);

    return News__possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  News__createClass(News, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section news-section"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "text-center"
      }, external__react__default.a.createElement("h3", {
        className: "text-dark"
      }, "VANGST IN THE NEWS"), external__react__default.a.createElement("hr", {
        className: "section-title-line"
      })), external__react__default.a.createElement("div", {
        className: "row news-logos"
      }, external__react__default.a.createElement("div", {
        id: "entreprenuer",
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "https://www.entrepreneur.com/article/313579",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image entrepreneur-logo",
        src: "/static/images/vangst-main-page/entrepreneur-logo.png",
        target: "_blank"
      }))), external__react__default.a.createElement("div", {
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "https://www.fastcompany.com/40471045/this-24-year-old-built-a-linkedin-for-weed-jobs-no-experience-required",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image fastcompany-logo",
        src: "/static/images/vangst-main-page/fast-company-logo.png"
      }))), external__react__default.a.createElement("div", {
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "https://www.forbes.com/sites/heathercabot/2018/03/21/why-this-founder-waited-to-fundraise-and-how-it-paid-off/#206a52d6db93",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image",
        src: "/static/images/vangst-main-page/forbes-logo.png"
      }))), external__react__default.a.createElement("div", {
        id: "cnbc",
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "https://www.cnbc.com/2017/10/18/meet-the-24-year-old-founder-behind-the-career-site-for-cannabis-jobs.html",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image cnbc-logo",
        src: "/static/images/vangst-main-page/cnbc-logo.png"
      }))), external__react__default.a.createElement("div", {
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "http://time.com/money/4923221/meet-the-24-year-old-entrepreneur-who-just-launched-a-careers-site-for-pot-jobs/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image time-logo",
        src: "/static/images/vangst-main-page/time-logo.png"
      }))), external__react__default.a.createElement("div", {
        className: "news-logo-container"
      }, external__react__default.a.createElement("a", {
        href: "https://www.cbsnews.com/news/how-to-get-a-job-in-the-legal-weed-business/",
        target: "_blank"
      }, external__react__default.a.createElement("img", {
        className: "event-image cbs-logo",
        src: "/static/images/vangst-main-page/cbs-logo.png"
      }))))));
    }
  }]);

  return News;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_News = (News_News);
// CONCATENATED MODULE: ./components/vangst-main-page.js/VangstTalent.js
function VangstTalent__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VangstTalent__typeof = function _typeof(obj) { return typeof obj; }; } else { VangstTalent__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VangstTalent__typeof(obj); }

function VangstTalent__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VangstTalent__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VangstTalent__createClass(Constructor, protoProps, staticProps) { if (protoProps) VangstTalent__defineProperties(Constructor.prototype, protoProps); if (staticProps) VangstTalent__defineProperties(Constructor, staticProps); return Constructor; }

function VangstTalent__possibleConstructorReturn(self, call) { if (call && (VangstTalent__typeof(call) === "object" || typeof call === "function")) { return call; } return VangstTalent__assertThisInitialized(self); }

function VangstTalent__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VangstTalent__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var VangstTalent_VangstTalent =
/*#__PURE__*/
function (_Component) {
  VangstTalent__inherits(VangstTalent, _Component);

  function VangstTalent() {
    VangstTalent__classCallCheck(this, VangstTalent);

    return VangstTalent__possibleConstructorReturn(this, (VangstTalent.__proto__ || Object.getPrototypeOf(VangstTalent)).apply(this, arguments));
  }

  VangstTalent__createClass(VangstTalent, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section vangst-talent-section"
      }, external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "vangst-talent-title-container"
      }, external__react__default.a.createElement("div", {
        className: "vangst-talent-title"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/social/instagram-gray.png",
        className: "insta-logo-talent"
      }), external__react__default.a.createElement("h3", {
        className: "text-dark"
      }, "VANGST TALENT")), external__react__default.a.createElement("hr", {
        id: "talent-line",
        className: "section-title-line"
      })), external__react__default.a.createElement("a", {
        href: "https://www.instagram.com/vangsttalent/?hl=en",
        target: "_blank"
      }, external__react__default.a.createElement("section", {
        "class": "instagram-slider"
      }, external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-1.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-2.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-3.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-4.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-5.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-6.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-7.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-8.png"
      })), external__react__default.a.createElement("div", {
        "class": "instagram-post"
      }, external__react__default.a.createElement("img", {
        src: "/static/images/vangst-main-page/instagram/insta-9.png"
      }))))));
    }
  }]);

  return VangstTalent;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page_js_VangstTalent = (VangstTalent_VangstTalent);
// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/vangst-main-page.js
function vangst_main_page__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vangst_main_page__typeof = function _typeof(obj) { return typeof obj; }; } else { vangst_main_page__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vangst_main_page__typeof(obj); }

function vangst_main_page__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vangst_main_page__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vangst_main_page__createClass(Constructor, protoProps, staticProps) { if (protoProps) vangst_main_page__defineProperties(Constructor.prototype, protoProps); if (staticProps) vangst_main_page__defineProperties(Constructor, staticProps); return Constructor; }

function vangst_main_page__possibleConstructorReturn(self, call) { if (call && (vangst_main_page__typeof(call) === "object" || typeof call === "function")) { return call; } return vangst_main_page__assertThisInitialized(self); }

function vangst_main_page__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vangst_main_page__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var vangst_main_page_VangstMainPage =
/*#__PURE__*/
function (_Component) {
  vangst_main_page__inherits(VangstMainPage, _Component);

  function VangstMainPage() {
    vangst_main_page__classCallCheck(this, VangstMainPage);

    return vangst_main_page__possibleConstructorReturn(this, (VangstMainPage.__proto__ || Object.getPrototypeOf(VangstMainPage)).apply(this, arguments));
  }

  vangst_main_page__createClass(VangstMainPage, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(Header["a" /* default */], null), external__react__default.a.createElement(Menu["a" /* default */], null), external__react__default.a.createElement(vangst_main_page_js_Hero, null), external__react__default.a.createElement(vangst_main_page_js_VangstIsDope, null), external__react__default.a.createElement(vangst_main_page_js_JobReport, null), external__react__default.a.createElement(vangst_main_page_js_Gigs, null), external__react__default.a.createElement(vangst_main_page_js_News, null), external__react__default.a.createElement(vangst_main_page_js_VangstTalent, null));
    }
  }]);

  return VangstMainPage;
}(external__react_["Component"]);

/* harmony default export */ var vangst_main_page = __webpack_exports__["default"] = (Object(PageWrapper["a" /* default */])(vangst_main_page_VangstMainPage));

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Layout_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PageWrapper_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vangst_main_page__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__components_PageWrapper_js__["a" /* default */])(Index));

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })
/******/ ]);