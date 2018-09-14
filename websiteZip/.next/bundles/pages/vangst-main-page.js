module.exports=__NEXT_REGISTER_PAGE("/vangst-main-page",function(){return{page:webpackJsonp([4],{191:function(e,t,n){e.exports=n(192)},192:function(e,t,n){"use strict";var a=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(26)),o=a(n(10)),i=a(n(11)),c=a(n(27)),l=a(n(28)),s=a(n(1)),m=a(n(12)),u=a(n(193)),p=a(n(216)),f=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":u.default[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:g.error},s.default.createElement(p.default,null,s.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:g.h1},e):null,s.default.createElement("div",{style:g.desc},s.default.createElement("h2",{style:g.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}]),t}(s.default.Component);t.default=f,Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{statusCode:m.default.number}});var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},193:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),r=n(1),o=n.n(r),i=(n(215),n(191),n(24)),c=n(30),l=n(8),s=n.n(l);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{id:"vangst-main-page-hero",className:"hero-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center align-items-center"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("h1",{className:"text-white text-center hero-title"},"Cannabis is hiring."),o.a.createElement("div",{className:"hero-cta"},o.a.createElement(s.a,{href:"/employer-page"},o.a.createElement("a",null,o.a.createElement("div",{className:"hero-button"},o.a.createElement("img",{src:"/static/images/vangst-main-page/arrow-left.png"}),o.a.createElement("p",{className:"text-light text-center"},"Hire the perfect person")))),o.a.createElement("div",{id:"we-are-ready-text",className:"white-div"},o.a.createElement("p",{className:"text-center"},"We're growing.  Are you?")),o.a.createElement(s.a,{href:"/vangst-cannabis-staffing-services"},o.a.createElement("a",null,o.a.createElement("div",{className:"hero-button"},o.a.createElement("p",{className:"text-light text-center"},"Find your perfect job"),o.a.createElement("img",{src:"/static/images/vangst-main-page/arrow-right.png"})))))))),o.a.createElement("style",null,'\n\n                    #vangst-main-page-hero {\n                        background-image: url("/static/images/vangst-main-page/plant-in-hand-1472.jpg");\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                    }\n\n                    @media (max-width: 770px) {\n                        #we-are-ready-text {display:none};\n                    }\n                \n                '))}}])&&u(n.prototype,a),i&&u(n,i),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{className:"section section-top section-full vangst-is-dope"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center align-items-center"},o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("div",{className:"section-label"},o.a.createElement("p",{className:"section-number text-white"},".01"),o.a.createElement("p",{className:"section-text text-white"},"Vangst")),o.a.createElement("h2",{className:"text-white text-left"},"The cannabis industry's #1 recruiting resource."),o.a.createElement("div",{className:"white-line"}),o.a.createElement("p",{className:"text-white section-copy"},"Since launching in 2015, we’ve connected over 7,500 candidates with jobs in the rapidly emerging cannabis industry. Through direct hire, Vangst GIGS, career fairs, and our job board, our team continues to pioneer recruiting solutions tailored specifically to the cannabis industry."),o.a.createElement("div",{className:"white-line"})),o.a.createElement("div",{id:"play-button-container",className:"col-lg-4"},o.a.createElement(s.a,{href:"/employer-page"},o.a.createElement("div",{className:"play-button-container"},o.a.createElement("img",{src:"/static/images/vangst-main-page/play-button.png",alt:""}),o.a.createElement("a",{className:"play-button"},o.a.createElement("p",null,"See how it works"))))))),o.a.createElement("style",null,"\n                    @media (max-width: 770px){\n                        #play-button-container {display: flex; flex-direction: row; justify-content: center;}\n\n                    }\n                "))}}])&&d(n.prototype,a),i&&d(n,i),t}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{className:"section section-top section-full job-report"},o.a.createElement("div",{className:"color-overlay"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center align-items-center"},o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("div",{className:"section-label"},o.a.createElement("p",{className:"section-number job-report-section-number"},".02"),o.a.createElement("p",{className:"section-text text-white"},"The Job Report")),o.a.createElement("h2",{className:"text-left job-report-title"},"Download the ",o.a.createElement("br",null),"Vangst Salary Report"),o.a.createElement("div",{className:"white-line job-report-line"}),o.a.createElement("p",{className:"section-copy job-report-section-copy"},"The Vangst Cannabis Industry Salary Guide is the first-ever report to establish the average salary of specific roles within the cannabis industry. As the cannabis industry grows at an exponential rate, we will continue to report the most accurate and reliable data possible from leading companies."),o.a.createElement("div",{className:"white-line job-report-line"})),o.a.createElement("a",{id:"salary-report-link",className:"col-lg-4 report-column",href:"https://blog.vangst.com/cannabis-salary-guide-2018/",target:"_blank"},o.a.createElement("img",{className:"report-graphic",src:"/static/images/vangst-main-page/report-img.png",alt:"vangst salary report graphic"}),o.a.createElement("img",{className:"play-button-img",src:"/static/images/vangst-main-page/play-button.png",alt:""}),o.a.createElement("div",{className:"text-light"},o.a.createElement("p",null,"See full report")))))),o.a.createElement("style",null,"\n                    .job-report {\n                        background-image: url('static/images/vangst-main-page/Home-Section-3-Cropped.jpg');\n                        min-height: 100vh;\n                        background-position: center;\n                        background-repeat: no-repeat;\n                        background-size: cover;\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                        justify-content: center;\n                      }\n                      \n                      .job-report-title {\n                        color: white;\n                      }\n                      \n                      .report-column {\n                        display: flex;\n                        flex-direction: column;\n                        align-items: center;\n                        \n                      }\n                      \n                      .play-button-img {\n                        width: 16px;\n                        margin-bottom: 0.5rem;\n                        transform: rotate(90deg);\n                      }\n                      \n                     .job-report-number  {\n                        font-size: 5rem;\n                        margin-bottom: 0;\n                        font-family: Hennigar;\n                        opacity: 1;\n                        margin-bottom: -0.5rem;\n                      }\n                      \n                      .job-report-numbers {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: flex-start;\n                      }\n                      \n                      .job-report-number-column {\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-content: center;\n                        align-items: center;\n                      }\n                      \n                      .white-line-div {\n                        background-color:white;\n                        height: 1px;\n                        width: 150px;\n                      }\n                      \n                      .section-number-orange {\n                        border: solid 1px #f0561f;\n                        padding: 3px;\n                        padding-top: 6px;\n                        padding-bottom: 6px;\n                        margin-right: 10px;\n                        color: #f0561f;\n                      }\n                      \n                      .section-text-orange {\n                        display: flex;\n                        flex-direction: row;\n                        align-items: center;\n                        font-style: italic; \n                        color: #f0561f;\n                      }\n                      \n                    #salary-report-link {text-decoration: none;}\n\n                    @media (max-width: 992px) {\n                        .color-overlay {\n                          background: rgba(0,0,0,0.5);\n                          height: 100vh;\n                          width: 100vw;\n                          display: flex;\n                          flex-direction: row;\n                          align-items: center;\n                        }\n                      \n                        .job-report-number {\n                          font-size: 4rem;\n                          letter-spacing: 2px;\n                          padding-bottom: 5px;\n                        }\n                      \n                        #growth-number {\n                          order: -1;\n                        }\n                      \n                        .job-report-numbers {\n                          display: flex;\n                          flex-direction: row;\n                        }\n                      \n                        .job-report-symbol {\n                          font-size: 15px;\n                        }\n                      \n                        .report-graphic {\n                          height: 100px;\n                        }\n                      \n                        .play-button-img {\n                          display: none;\n                        }\n                      }\n\n                      @media (max-width: 321px) {\n                          .report-graphic {display:none;}\n                      }\n\n                      \n                      \n                "))}}])&&h(n.prototype,a),i&&h(n,i),t}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{className:"section section-top section-full gigs-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-left align-items-center"},o.a.createElement("div",{className:"col-8 col-lg-7"},o.a.createElement("div",{className:"section-label"},o.a.createElement("p",{className:"section-number-orange"},".03"),o.a.createElement("p",{className:"section-text-orange"},"Vangst Gigs")),o.a.createElement("h2",{className:"text-dark text-left"},"Work today. ",o.a.createElement("br",null),"Get paid fast."),o.a.createElement("div",{className:"dark-line"}),o.a.createElement("p",{className:"text-dark section-copy"},"Vangst GIGS is the first and only fully compliant temporary employment service in cannabis. Vangst GIGS connects cannabis companies with temporary labor and allows cannabis temporary workers to build their own schedules and get paid quickly."),o.a.createElement("div",{className:"dark-line"}),o.a.createElement("div",{id:"gigs-steps-container",className:"job-report-numbers col-11"},o.a.createElement("div",{className:"col-12 col-lg-4 text-dark job-report-number-column text-center"},o.a.createElement("p",{className:"text-dark gigs-number"},"1."),o.a.createElement("p",{className:"gigs-step-description"},"SIGN UP FOR GIGS AND GET PRE-QUALIFIED.")),o.a.createElement("div",{className:"col-12 col-lg-4 job-report-number-column text-dark text-center"},o.a.createElement("p",{className:"text-dark gigs-number"},"2."),o.a.createElement("p",{className:"gigs-step-description"},"PICK THE GIGS YOU WANT.")),o.a.createElement("div",{className:" col-12 col-lg-4 job-report-number-column text-dark text-center"},o.a.createElement("p",{className:"text-dark gigs-number"},"3."),o.a.createElement("p",{className:"gigs-step-description"},"GET PAID WEEKLY."))),o.a.createElement("div",{id:"gigs-cta-button-container",className:"row col-12"},o.a.createElement("a",{href:"https://gigs.vangst.com/",target:"_blank"},o.a.createElement("div",{className:"gigs-cta-button"},o.a.createElement("div",{className:"gigs-cta-text-container"},o.a.createElement("p",{id:"gigs-cta-text-1",className:"gigs-cta-text"},"Sign up for Vangst GIGS and get paid >"),o.a.createElement("p",{id:"gigs-cta-text-2",className:"gigs-cta-text"},"Sign up >")))))))),o.a.createElement("style",null,"\n                    @media (max-width: 420px) {\n                        #gigs-cta-button-container {\n                            display: flex;\n                            flex-direction: column;\n                            align-items: flex-start;\n                        }\n\n                        .section-copy {padding-right: 10px;}\n                        \n                        #gigs-steps-container {display: none;}\n                            \n                        .gigs-cta-button { margin-top: 2rem;}\n                        \n                        #gigs-cta-text-1 {display: none;}\n                        #gigs-cta-text-2 {display: block;}\n                    }\n\n                    @media (min-width: 419px) {\n                        #gigs-cta-text-1 { display: block; }\n                        #gigs-cta-text-2 { display: none; }\n                        \n                      }\n\n                      @media (max-width: 321px) {\n                        .gigs-cta-button {margin-top: 1rem; margin-bottom: 1rem; background-color: #ffffff;}\n                    }\n                "))}}])&&_(n.prototype,a),i&&_(n,i),t}();function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{className:"section news-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"text-center"},o.a.createElement("h3",{className:"text-dark"},"VANGST IN THE NEWS"),o.a.createElement("hr",{className:"section-title-line"})),o.a.createElement("div",{className:"row news-logos"},o.a.createElement("div",{id:"entreprenuer",className:"news-logo-container"},o.a.createElement("a",{href:"https://www.entrepreneur.com/article/313579",target:"_blank"},o.a.createElement("img",{className:"event-image entrepreneur-logo",src:"/static/images/vangst-main-page/entrepreneur-logo.png",target:"_blank"}))),o.a.createElement("div",{className:"news-logo-container"},o.a.createElement("a",{href:"https://www.fastcompany.com/40471045/this-24-year-old-built-a-linkedin-for-weed-jobs-no-experience-required",target:"_blank"},o.a.createElement("img",{className:"event-image fastcompany-logo",src:"/static/images/vangst-main-page/fast-company-logo.png"}))),o.a.createElement("div",{className:"news-logo-container"},o.a.createElement("a",{href:"https://www.forbes.com/sites/heathercabot/2018/03/21/why-this-founder-waited-to-fundraise-and-how-it-paid-off/#206a52d6db93",target:"_blank"},o.a.createElement("img",{className:"event-image",src:"/static/images/vangst-main-page/forbes-logo.png"}))),o.a.createElement("div",{id:"cnbc",className:"news-logo-container"},o.a.createElement("a",{href:"https://www.cnbc.com/2017/10/18/meet-the-24-year-old-founder-behind-the-career-site-for-cannabis-jobs.html",target:"_blank"},o.a.createElement("img",{className:"event-image cnbc-logo",src:"/static/images/vangst-main-page/cnbc-logo.png"}))),o.a.createElement("div",{className:"news-logo-container"},o.a.createElement("a",{href:"http://time.com/money/4923221/meet-the-24-year-old-entrepreneur-who-just-launched-a-careers-site-for-pot-jobs/",target:"_blank"},o.a.createElement("img",{className:"event-image time-logo",src:"/static/images/vangst-main-page/time-logo.png"}))),o.a.createElement("div",{className:"news-logo-container"},o.a.createElement("a",{href:"https://www.cbsnews.com/news/how-to-get-a-job-in-the-legal-weed-business/",target:"_blank"},o.a.createElement("img",{className:"event-image cbs-logo",src:"/static/images/vangst-main-page/cbs-logo.png"}))))))}}])&&S(n.prototype,a),i&&S(n,i),t}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("section",{className:"section vangst-talent-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"vangst-talent-title-container"},o.a.createElement("div",{className:"vangst-talent-title"},o.a.createElement("img",{src:"/static/images/social/instagram-gray.png",className:"insta-logo-talent"}),o.a.createElement("h3",{className:"text-dark"},"VANGST TALENT")),o.a.createElement("hr",{id:"talent-line",className:"section-title-line"})),o.a.createElement("a",{href:"https://www.instagram.com/vangsttalent/?hl=en",target:"_blank"},o.a.createElement("section",{class:"instagram-slider"},o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-1.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-2.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-3.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-4.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-5.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-6.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-7.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-8.png"})),o.a.createElement("div",{class:"instagram-post"},o.a.createElement("img",{src:"/static/images/vangst-main-page/instagram/insta-9.png"}))))))}}])&&A(n.prototype,a),i&&A(n,i),t}(),C=n(31);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var G=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement(C.a,null),o.a.createElement(c.a,null),o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(N,null),o.a.createElement(O,null),o.a.createElement(I,null),o.a.createElement(k,null))}}])&&U(n.prototype,i),l&&U(n,l),t}();t.default=Object(i.a)(G)},542:function(e,t,n){e.exports=n(282)}},[542]).default}});