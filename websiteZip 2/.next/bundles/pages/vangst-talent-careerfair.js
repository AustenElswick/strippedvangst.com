module.exports=__NEXT_REGISTER_PAGE("/vangst-talent-careerfair",function(){return{page:webpackJsonp([6],{260:function(e,t,n){"use strict";var a=n(1),o=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"companies-section"},o.a.createElement("h3",{id:"companies-title",className:"text-center"},"WORKING WITH THE BEST COMPANIES IN CANNABIS"),o.a.createElement("div",{className:"small-gray-line-h"}),o.a.createElement("div",{id:"logos-row"},o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/ll-logo.png",alt:"LeafLink"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"GTI",className:"company-logo",src:"static/images/employer-page/company-logos/GTI.png",alt:"GTI"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/Cresco.png",alt:"Cresco"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"Baker",className:"company-logo",src:"static/images/employer-page/company-logos/Baker.png",alt:"Baker"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/willies.png",alt:"Willie’s Reserve"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/PAX.png",alt:"PAX"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/verde.png",alt:"Verde"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"NR",className:"company-logo",src:"static/images/employer-page/company-logos/Native-Roots.jpg",alt:"Native Roots"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/GreenBits.png",alt:"GreenBits"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"greenpeak",className:"company-logo",src:"static/images/employer-page/company-logos/Greenpeak innovations.png",alt:"Green Peak Innovation"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/tikun.png",alt:"Tikun Olam"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/TGS.png",alt:"TGS"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{className:"company-logo",src:"static/images/employer-page/company-logos/VS.png",alt:"Vicente Sederberg"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"CA",className:"company-logo",src:"static/images/employer-page/company-logos/CannaAdvisors.png",alt:"Canna Advisors"})),o.a.createElement("div",{className:"company-logo-container"},o.a.createElement("img",{id:"HS",className:"company-logo",src:"static/images/employer-page/company-logos/harborside.jpg",alt:"Harborside"}))),o.a.createElement("style",null,"\n            #companies-section {\n              min-height: 100vh;\n              min-weight: 100vw;\n              padding: 3rem;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-content: center;\n              align-items: center;\n            }\n\n            #logos-row {\n              display: flex;\n              flex-direction: row;\n              flex-wrap: wrap;\n              justify-content: flex-start;\n              \n              \n\n            }\n\n            .company-logo {\n              display: block;\n              width: 50%;\n              height: auto;\n              padding-top: 5vh;\n            }\n\n            .company-logo-container {\n              width: 20%;\n\n             \n              overflow: none;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n\n            @media (max-width: 1025px) {\n              .company-logo-container {\n                width: 25%;\n              }\n              .company-logo {width: 65%;}\n            }\n\n            @media (max-width: 770px) {\n              .company-logo-container {\n                width: 25%;\n              }\n              .company-logo {width: 65%;}\n            }\n\n\n            @media (max-width: 530px) {\n              #companies-section {padding: 2rem;}\n              .company-logo-container {\n                width: 33%;\n              }\n              .company-logo {width: 50%; padding-top: 2vh;}\n              #companies-title {\n                font-size: 1.2rem;\n              }\n            }\n\n            @media (max-width: 450px) {\n              #companies-section {padding: 2rem;}\n              .company-logo-container {\n                width: 33%;\n              }\n              .company-logo {width: 60%; padding-top: 2vh;}\n              #companies-title {\n                font-size: 1rem;\n              }\n            }\n\n          \n          "))}}])&&r(n.prototype,i),c&&r(n,c),t}();t.a=c},543:function(e,t,n){e.exports=n(544)},544:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n.n(a),i=n(18),r=n(30),l=n(24),c=n(19),s=n.n(c);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"career-fair-hero-section",className:"jsx-1764514944"},o.a.createElement("div",{className:"jsx-1764514944"},o.a.createElement("h1",{id:"career-fair-title",className:"jsx-1764514944 text-center text-white"},"Hosting the worlds largest cannabis career fair since 2015")),o.a.createElement(s.a,{styleId:"1764514944",css:['#career-fair-hero-section.jsx-1764514944{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:50vh;padding:4rem;background-image:url("/static/images/employer-page/sec_01/orange-background.jpg");background-position:center;background-repeat:no-repeat;background-size:cover;}',"#career-fair-title.jsx-1764514944{font-size:6rem;}","@media (max-width:420px){#career-fair-title.jsx-1764514944{font-size:3rem;}}","@media (max-width:361px){#career-fair-title.jsx-1764514944{font-size:2.25rem;}}"]}))}}])&&p(n.prototype,i),r&&p(n,r),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var x=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"career-fair-section",className:"jsx-1297329390"},o.a.createElement("div",{className:"jsx-1297329390 container candidate-page-content"},o.a.createElement("div",{className:"jsx-1297329390 all-columns-hero"},o.a.createElement("div",{className:"jsx-1297329390 single-column"},o.a.createElement("div",{className:"jsx-1297329390 small-h-line"}),o.a.createElement("div",{className:"jsx-1297329390 d-flex flex-row"},o.a.createElement("div",{className:"jsx-1297329390 job-report-number"},"2K"),o.a.createElement("div",{className:"jsx-1297329390 job-number-symbol"},"+")),o.a.createElement("p",{className:"jsx-1297329390 text-center"},"JOB SEEKERS")),o.a.createElement("div",{className:"jsx-1297329390 large-v-line-white"}),o.a.createElement("div",{className:"jsx-1297329390 single-column"},o.a.createElement("div",{className:"jsx-1297329390 small-h-line"}),o.a.createElement("div",{className:"jsx-1297329390 d-flex flex-row"},o.a.createElement("div",{className:"jsx-1297329390 job-report-number"},"45"),o.a.createElement("div",{className:"jsx-1297329390 job-number-symbol"},"+")),o.a.createElement("p",{className:"jsx-1297329390 text-center"},"RECRUITING",o.a.createElement("br",{className:"jsx-1297329390"})," COMPANIES")),o.a.createElement("div",{className:"jsx-1297329390 large-v-line-white"}),o.a.createElement("div",{className:"jsx-1297329390 single-column"},o.a.createElement("div",{className:"jsx-1297329390 small-h-line"}),o.a.createElement("div",{className:"jsx-1297329390 d-flex flex-row"},o.a.createElement("div",{className:"jsx-1297329390 job-report-number"},"600"),o.a.createElement("div",{className:"jsx-1297329390 job-number-symbol"},"+")),o.a.createElement("p",{className:"jsx-1297329390 text-center"},"INTERVIEWS")),o.a.createElement("div",{className:"jsx-1297329390 large-v-line-white"}),o.a.createElement("div",{className:"jsx-1297329390 single-column"},o.a.createElement("div",{className:"jsx-1297329390 small-h-line"}),o.a.createElement("div",{className:"jsx-1297329390 d-flex flex-row"},o.a.createElement("div",{className:"jsx-1297329390 job-report-number"},"500"),o.a.createElement("div",{className:"jsx-1297329390 job-number-symbol"},"+")),o.a.createElement("p",{className:"jsx-1297329390 text-center"},"POSITIONS FILLED")))),o.a.createElement(s.a,{styleId:"1297329390",css:["#career-fair-section.jsx-1297329390{background-color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}",".career-fair-content.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}",".single-column.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap: align-content:flex-start;-ms-flex-wrap:wrap: align-content:flex-start;flex-wrap:wrap: align-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}",".all-columns-hero.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:3rem;}",".job-report-number.jsx-1297329390{font-size:5rem;margin-bottom:0;font-family:Hennigar;opacity:1;margin-bottom:-0.5rem;}",".job-report-number.jsx-1297329390{color:#505050;}","p.jsx-1297329390{color:#505050;}",".small-h-line.jsx-1297329390{background-color:#505050;width:40px;height:4px;}",".large-v-line-white.jsx-1297329390{background-color:#505050;width:1px;height:120px;margin-right:2rem;margin-left:2rem;}",".job-number-symbol.jsx-1297329390{font-family:Brandon Grotesque Bold;color:black;font-weight:500;font-size:3rem;color:#505050;}",".number-with-symbol.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}","@media (max-width:992px){p.jsx-1297329390{font-size:0.75rem;}.large-v-line-white.jsx-1297329390{margin-right:0.75rem;margin-left:0.75rem;}}","@media (max-width:768px){.job-report-number.jsx-1297329390{font-size:5rem;}.single-column.jsx-1297329390{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:2rem;}.large-v-line-white.jsx-1297329390{display:none;}.all-columns-hero.jsx-1297329390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}}","@media (max-width:415px){.job-report-number.jsx-1297329390{font-size:4rem;}}","#job-number-symbol.jsx-1297329390{font-family:Brandon Grotesque Bold;color:black;font-weight:700;font-size:2rem;}"]}))}}])&&b(n.prototype,i),r&&b(n,r),t}(),g=n(8),w=n.n(g);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"upcoming-fair-section"},o.a.createElement("div",{id:"upcoming-fair-container"},o.a.createElement("div",null,o.a.createElement("h5",{id:"event-title"},"Upcoming Fair"),o.a.createElement("div",{className:"gray-line-h"}),o.a.createElement("h2",{id:"event-date"},"October 11, 2018"),o.a.createElement("h5",{id:"event-time"},"10:00am-4:00pm"),o.a.createElement("div",{className:"gray-line-h"}),o.a.createElement("p",{className:"event-address"},"Oakland Marriot City Center"),o.a.createElement("p",{className:"event-address"},"1001 Broadway"),o.a.createElement("p",{className:"event-address"},"Oakland, California"),o.a.createElement("p",{className:"event-address"},"94607"),o.a.createElement("div",{className:"gray-line-h"}),o.a.createElement("a",{id:"ticket-link",href:"https://www.eventbrite.com/e/new-west-summit-40-tickets-45670651147?aff=ebdssbdestsearch",target:"_blank"},"Purchase Tickets >")),o.a.createElement("div",{id:"event-column-2"},o.a.createElement("p",{className:"event-address"},"Presented by:"),o.a.createElement("img",{id:"sponsor-logo",src:"static/images/logos/logo.png"}))),o.a.createElement("style",null,"\n            #upcoming-fair-section {\n              width: 100vw;\n              height: 50vh;\n              background-color: #fafafa;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              padding: 4rem;\n            }\n            #upcoming-fair-container {\n              display: flex;\n              flex-direction: row;\n              justify-content: space-around;\n            }\n            #event-column-2 {display: flex; flex-direction: column; align-items: center; justify-content: center;}\n\n            #event-title {font-family: Sabon Italic; font-size: 1.5rem; color: #505050;}\n            #event-date {color: #505050;}\n            #event-time {font-family: Brandon Grotesque Regular Italic; font-size: 1.5rem; color: #505050;}\n            .event-address {font-family: Brandon Grotesque Regular; line-height: 10px; font-weight: 400; color: #505050;}\n\n            .gray-line-h {height: 2px; width: 250px; background-color: #505050; margin: 15px 0 15px 0;}\n\n            #ticket-link {color: #f0561f; font-family: Brandon Grotesque Regular Italic}\n\n            #sponsor-logo {width: 300px; height: auto;}\n\n            @media (max-width: 770px) {\n              #sponsor-logo {width: 200px; height: auto;}\n              #event-date {font-size: 3rem;}\n            }\n\n            @media (max-width: 420px) {\n              #upcoming-fair-section {height: 100vh; padding: 2rem;}\n              #upcoming-fair-container {min-height: 100%; display: flex; flex-direction: column; justify-content: space-evenly;}\n              #sponsor-logo {width: 150px; height: auto;}\n            }\n          "))}}])&&v(n.prototype,i),r&&v(n,r),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"past-events-section",className:"jsx-2024426468"},o.a.createElement("div",{id:"past-events-container",className:"jsx-2024426468"},o.a.createElement("div",{id:"video-column",className:"jsx-2024426468"},o.a.createElement("iframe",{hedi:!0,id:"video-player",src:"https://www.youtube.com/embed/d_Q7gszt-KM",frameBorder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0,className:"jsx-2024426468"})),o.a.createElement("div",{id:"quotes-column",className:"jsx-2024426468"},o.a.createElement("h3",{id:"past-events-title",className:"jsx-2024426468"},"Past Events"),o.a.createElement("div",{className:"jsx-2024426468 gray-line-h"}),o.a.createElement("div",{className:"jsx-2024426468 first-testimony"},o.a.createElement("p",{className:"jsx-2024426468 past-event-quote"},'"We filled over 70 positions through participating in both Vangst Career Fairs. We will definitely be participating in more upcoming career fairs because it is an efficient way to get in front of qualified job seekers as well as advertise our brand."'),o.a.createElement("p",{className:"jsx-2024426468 event-quote-author"},"-Jonathan McCann, LivWell")),o.a.createElement("div",{className:"jsx-2024426468 second-testimony"},o.a.createElement("p",{className:"jsx-2024426468 past-event-quote"},'"Dixie Elixirs has participated in two career fairs with Vangst and both times have left with immediate hires.  Great job Vangst Team!"'),o.a.createElement("p",{className:"jsx-2024426468 event-quote-author"},"-Michael Tudor, Dixie Elixirs")),o.a.createElement("div",{className:"jsx-2024426468 third-testimony"},o.a.createElement("p",{className:"jsx-2024426468 past-event-quote"},'"Success for Green Man at Cannabis Career Fair! We met such a wide variety of people, from every walk of life. People living in other states looking for a reason to move to Colorado, some who had 10+ years in other industries but are searching for a new career path, even people already in the industry just ready for a change."'),o.a.createElement("p",{className:"jsx-2024426468 event-quote-author"},"-Green Man Cannabis")))),o.a.createElement(s.a,{styleId:"2024426468",css:["#past-events-section.jsx-2024426468{min-width:100vw;min-height:100vh;padding:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","#past-events-container.jsx-2024426468{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","#video-column.jsx-2024426468{position:relative;width:84%;height:0;padding-top:35%;}","#video-player.jsx-2024426468{position:absolute;top:5%;left:5%;bottom:0;right:0;width:90%;height:90%;}","#quotes-column.jsx-2024426468{padding:1rem;width:50%;height:100%;}",".past-event-quote.jsx-2024426468{font-family:Brandon Grotesque Regular;margin-bottom:0;font-weight:400;}","@media (max-width:780px){#past-events-container.jsx-2024426468{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#quotes-column.jsx-2024426468{width:100%;margin-top:3rem;}}","@media (max-width:420px){#past-events-section.jsx-2024426468{padding:1rem;}#quotes-column.jsx-2024426468{min-height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}#past-events-title.jsx-2024426468{font-size:1.25rem;}.past-event-quote.jsx-2024426468{font-size:1rem;line-height:18px;}.event-quote-author.jsx-2024426468{font-size:0.9rem;}.gray-line-h.jsx-2024426468{margin:5px 0 10px 0;}#video-column.jsx-2024426468{position:relative;width:100%;height:0;padding-top:55%;}#video-player.jsx-2024426468{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;}}",".event-quote-author.jsx-2024426468{font-family:Brandon Grotesque Bold;}"]}))}}])&&N(n.prototype,i),r&&N(n,r),t}(),S=n(243);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,i,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("section",{id:"future-career-fairs",className:"jsx-1379448650"},o.a.createElement("div",{id:"future-career-fair-container",className:"jsx-1379448650"},o.a.createElement("div",{className:"jsx-1379448650 mailing-and-booth"},o.a.createElement("div",{className:"jsx-1379448650 mailing"},o.a.createElement("img",{src:"",className:"jsx-1379448650"}),o.a.createElement("p",{className:"jsx-1379448650 text-center fair-title"},"Join our mailing list to stay informed on future career fairs."),o.a.createElement(S.a,null)),o.a.createElement("div",{className:"jsx-1379448650 booth"},o.a.createElement("img",{src:"",className:"jsx-1379448650"}),o.a.createElement("p",{className:"jsx-1379448650 text-center fair-title"},"Contact us about having your own booth at the next career fair"),o.a.createElement(w.a,{href:"/contact-vangst-talent"},o.a.createElement("div",{id:"contact-us-button",className:"jsx-1379448650 text-center"},"Click Here >"))))),o.a.createElement(s.a,{styleId:"1379448650",css:["#future-career-fairs.jsx-1379448650{min-height:50vh;min-width:100vw;padding:4rem;background-image:url('/static/images/employer-page/sec_01/orange-background.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","#future-career-fair-container.jsx-1379448650{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".fair-title.jsx-1379448650{color:white;font-family:Brandon Grotesque Regular;font-size:1.5rem;margin-bottom:0;}",".booth.jsx-1379448650{margin-top:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","#contact-us-button.jsx-1379448650{border:solid 2px white;padding:10px 3px 10px 3px;width:175px;margin-top:1rem;font-family:Sabon Italic;font-size:1.2rem;color:white;}"]}))}}])&&C(n.prototype,i),r&&C(n,r),t}(),G=n(260),q=n(31);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function B(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),B(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(l=[{key:"render",value:function(){return o.a.createElement(i.a,null,o.a.createElement(q.a,{url:"https://vangst.com/vangst-talent-careerfair",title:"Vangst Cannabis Career Fairs",description:"Vangst Cannabis Staffing and Vangsters.com hosts cannabis job fairs in Denver, Las Vegas, Las Angeles, New York, and more to come as the weed industry grows.",keywords:"job fair denver, cannabis jobs, job fairs near me, 420 jobs"}),o.a.createElement(r.a,null),o.a.createElement(u,null),o.a.createElement(x,null),o.a.createElement(k,null),o.a.createElement(_,null),o.a.createElement(I,null),o.a.createElement(G.a,null))}}])&&z(n.prototype,l),c&&z(n,c),t}();t.default=Object(l.a)(A)}},[543]).default}});