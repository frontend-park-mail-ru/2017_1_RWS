/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(2);


class Rating extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rating;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderRating;
function pug_escape(e) {
  var a = "" + e,
      t = pug_match_html.exec(a);if (!t) return e;var r,
      c,
      n,
      s = "";for (r = t.index, c = 0; r < a.length; r++) {
    switch (a.charCodeAt(r)) {case 34:
        n = "&quot;";break;case 38:
        n = "&amp;";break;case 60:
        n = "&lt;";break;case 62:
        n = "&gt;";break;default:
        continue;}c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
  }return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
  if (!(n instanceof Error)) throw n;if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;try {
    t = t || __webpack_require__(3).readFileSync(e, "utf8");
  } catch (e) {
    pug_rethrow(n, null, r);
  }var i = 3,
      a = t.split("\n"),
      o = Math.max(r - i, 0),
      h = Math.min(a.length, r + i),
      i = a.slice(o, h).map(function (n, e) {
    var t = e + o + 1;return (t == r ? "  > " : "    ") + t + "| " + n;
  }).join("\n");throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}function renderRating(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;var pug_debug_filename, pug_debug_line;try {
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FratingTemplate.pug": "div\r\n    h1(class='h1Title') Rating\r\n    div(class='ratingBody')\r\n        ol\r\n            each val in players\r\n                li= val\r\n\r\n\u002F\u002F['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]\r\n" };
    ;var locals_for_with = locals || {};(function (players) {
      ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Cdiv\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Ch1 class=\"h1Title\"\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "Rating\u003C\u002Fh1\u003E";
      ;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Cdiv class=\"ratingBody\"\u003E";
      ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003Col\u003E";
      ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      // iterate players
      ;(function () {
        var $$obj = players;
        if ('number' == typeof $$obj.length) {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var val = $$obj[pug_index0];
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\u003Cli\u003E";
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var val = $$obj[pug_index0];
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\u003Cli\u003E";
            ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        }
      }).call(this);

      pug_html = pug_html + "\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      ;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\u003C!--['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]--\u003E";
    }).call(this, "players" in locals_for_with ? locals_for_with.players : typeof players !== "undefined" ? players : undefined);
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class baseComponent {
    constructor(options = null) {
        this.content = document.createElement('div');
        this.options = options;
        //this.renderTemplate = renderTemplate;
        //this.render(this.renderTemplate);
    }

    render(renderTemplate) {
        //to override
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = baseComponent;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*import Manage from './manage'
//import {renderAll} from './../main'

let manage = new Manage();

export var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
        "/login": "loginPage"
    },
    init: function (){
        this._routes = [];
        for( var route in this.routes ){
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^'+route.replace(/:\w+/, '(\\w+)')+'$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path){
        var i = this._routes.length;
        while( i-- ){
            var args = path.match(this._routes[i].pattern);
            if( args ){
                this._routes[i].callback.apply(this, args.slice(1));
            }
        }
    },

    indexPage: function () {
        history.pushState(null, null, "/");
        manage.showInd();
    },

    ratingPage: function () {
        history.pushState(null, null, "/rating");
        manage.showRating();
    },

    aboutPage: function () {
        history.pushState(null, null, "/about");
        manage.showAbout();
    },

    loginPage: function () {
        history.pushState(null, null, "/login");
        manage.showLogin();
    }
};

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function(e){
    e.preventDefault();
    var l = getLocation(document.location.href);
    Router.nav(l.pathname);
}

Router.init();
let str = getLocation(document.location.href).pathname;


Router.init();
alert(str.substring(0, str.length - 1));
//renderAll();
Router.nav(str.substring(0, str.length - 1));*/

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_rating__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_renderedTemplates_ratingTemplate__ = __webpack_require__(1);

//import ratingFromServerRender from './serverResponseRender'



//export var logicAuth = false;
//export var playerNames = [];

class SiteService {
    constructor() {
        this.http = new __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */]();
    }

    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        };
        let prom = this.http.request('https://rws-backend.herokuapp.com/api/session', 'POST', body);
        prom.then(response => {
            if (response.status === 200) {
                logicAuth = true;
                //showGame();
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        };
        let prom = this.http.request('https://rws-backend.herokuapp.com/api/signup', 'POST', body);
        prom.then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                logicAuth = true;
                //showGame();
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    checkAuth() {
        console.log("start checkAuth");
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'GET');
    }

    logout() {
        return prom = this.http.request('https://rws-backend.herokuapp.com/api/session', 'DELETE');
        /*prom.then(response => {
            console.log("start logout");
            if (prom.status === 200) {
                //showLogin();
                //showInd();
            } else {
                //showInd();
                //showLogin();
                response.json().then(function (data) {
                    console.log(data);
                });
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });*/
    }

    makeRating() {
        return this.http.request('https://rws-backend.herokuapp.com/api/rating', 'GET');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SiteService;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(2);


class About extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = About;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(2);


class Menu extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderAbout;
function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r,
        c,
        n,
        s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(3).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderAbout(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FaboutTemplate.pug": "div\r\n    h1(class='h1Title') Our Team\r\n    div(class='aboutBody')\r\n        - var names = [[\"Kuchaeva Karina\", \"Fullstack\"], [\"Zlobina Svetlana\", \"Fullstack\"], [\"Bayramukov Yan\", \"Bug Designer\"], [\"Ovchinnikov Maksim\", \"Designer\"], [\"Maschkin Egor\", \"Producer\"]];\r\n        each name in names\r\n            h2 #{name[1]}\r\n            h3 #{name[0]}\r\n\r\n\r\n\r\n" };
        var pug_indent = [];
        ;
        pug_debug_line = 1;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n\u003Cdiv\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
        ;
        pug_debug_line = 2;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "Our Team\u003C\u002Fh1\u003E";
        ;
        pug_debug_line = 3;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        pug_html = pug_html + "\n  \u003Cdiv class=\"aboutBody\"\u003E";
        ;
        pug_debug_line = 4;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        var names = [["Kuchaeva Karina", "Fullstack"], ["Zlobina Svetlana", "Fullstack"], ["Bayramukov Yan", "Bug Designer"], ["Ovchinnikov Maksim", "Designer"], ["Maschkin Egor", "Producer"]];
        ;
        pug_debug_line = 5;
        pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
        // iterate names
        ;
        (function () {
            var $$obj = names;
            if ('number' == typeof $$obj.length) {
                for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch2\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp) + "\u003C\u002Fh2\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch3\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
                }
            } else {
                var $$l = 0;
                for (var pug_index0 in $$obj) {
                    $$l++;
                    var name = $$obj[pug_index0];
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch2\u003E";
                    ;
                    pug_debug_line = 6;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[1]) ? "" : pug_interp) + "\u003C\u002Fh2\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + "\n    \u003Ch3\u003E";
                    ;
                    pug_debug_line = 7;
                    pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
                    pug_html = pug_html + pug_escape(null == (pug_interp = name[0]) ? "" : pug_interp) + "\u003C\u002Fh3\u003E";
                }
            }
        }).call(this);

        pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderMenu;
function pug_escape(e) {
    var a = "" + e,
        t = pug_match_html.exec(a);
    if (!t) return e;
    var r,
        c,
        n,
        s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}
var pug_match_html = /["&<>]/;
function pug_rethrow(n, e, r, t) {
    if (!(n instanceof Error)) throw n;
    if (!("undefined" == typeof window && e || t)) throw n.message += " on line " + r, n;
    try {
        t = t || __webpack_require__(3).readFileSync(e, "utf8");
    } catch (e) {
        pug_rethrow(n, null, r);
    }
    var i = 3,
        a = t.split("\n"),
        o = Math.max(r - i, 0),
        h = Math.min(a.length, r + i),
        i = a.slice(o, h).map(function (n, e) {
        var t = e + o + 1;
        return (t == r ? "  > " : "    ") + t + "| " + n;
    }).join("\n");
    throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}
function renderMenu(locals) {
    var pug_html = "",
        pug_mixins = {},
        pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var pug_debug_sources = { "front\u002FcomponentTemplates\u002FmenuTemplate.pug": "div\r\n    h1(class='h1Title') Break Away\r\n    div(class='menuBody')\r\n        if logicAuth\r\n            p(id='menuStartAuth' class='title stroke')= 'Start'\r\n        else\r\n            p(id='menuStartNotAuth' class='title stroke')= 'Start'\r\n        p(id='menuRating' class='title')= 'Rating'\r\n        p(id='menuAbout' class='title')= 'About'\r\n        if logicAuth\r\n            p(id='menuLogout' class='title')= 'Logout'\r\n\r\n\r\n" };
        ;
        var locals_for_with = locals || {};
        (function (logicAuth) {
            var pug_indent = [];
            ;
            pug_debug_line = 1;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n\u003Cdiv\u003E";
            ;
            pug_debug_line = 2;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
            ;
            pug_debug_line = 2;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "Break Away\u003C\u002Fh1\u003E";
            ;
            pug_debug_line = 3;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n  \u003Cdiv class=\"menuBody\"\u003E";
            ;
            pug_debug_line = 4;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            if (logicAuth) {
                ;
                pug_debug_line = 5;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title stroke\" id=\"menuStartAuth\"\u003E";
                ;
                pug_debug_line = 5;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            } else {
                ;
                pug_debug_line = 7;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title stroke\" id=\"menuStartNotAuth\"\u003E";
                ;
                pug_debug_line = 7;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            }
            ;
            pug_debug_line = 8;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuRating\"\u003E";
            ;
            pug_debug_line = 8;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = 'Rating') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            ;
            pug_debug_line = 9;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuAbout\"\u003E";
            ;
            pug_debug_line = 9;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = 'About') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            ;
            pug_debug_line = 10;
            pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
            if (logicAuth) {
                ;
                pug_debug_line = 11;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + "\n    \u003Cp class=\"title\" id=\"menuLogout\"\u003E";
                ;
                pug_debug_line = 11;
                pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
                pug_html = pug_html + pug_escape(null == (pug_interp = 'Logout') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
            }
            pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
        }).call(this, "logicAuth" in locals_for_with ? locals_for_with.logicAuth : typeof logicAuth !== "undefined" ? logicAuth : undefined);
    } catch (err) {
        pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
    }
    ;
    return pug_html;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_components_rating__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_components_about__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_renderedTemplates_aboutTemplate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__router__);









class Manage {
    constructor() {
        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.gamePage = document.getElementById("game");
        this.backButton = document.getElementById("backButton");
        this.siteService = new __WEBPACK_IMPORTED_MODULE_0__siteService__["a" /* default */]();
        this.menu = new __WEBPACK_IMPORTED_MODULE_1__static_components_menu__["a" /* default */]();
        this.rating = new __WEBPACK_IMPORTED_MODULE_2__static_components_rating__["a" /* default */]();
        this.about = new __WEBPACK_IMPORTED_MODULE_3__static_components_about__["a" /* default */]();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
        this.logicAuth = false;

        this.indPage.appendChild(this.menu.content);
        this.ratPage.appendChild(this.rating.content);
        //this.login.appendChild(this.login.el);
        this.aboutPage.appendChild(this.about.content);
        //this.game.appendChild(this.game.el);

        this.ratPage.hidden = true;
        //this.login.hidden = true;
        this.aboutPage.hidden = true;
        //this.game.hidden = true;
        this.backButton.hidden = true;
    }

    sound() {
        let s = document.getElementById("sBut");
        if (!this.myAudio.paused) {
            s.src = "./../resources/soundOff.png";
            this.myAudio.pause();
        } else {
            s.src = "./../resources/soundOn.png";
            this.myAudio.play();
        }
    }

    showRating() {
        this.indPage.hidden = true;
        this.ratPage.hidden = false;
        this.gamePage.hidden = true;
        this.backButton.hidden = false;
        this.siteService.makeRating().then(response => {
            response.json().then(function (data) {
                let playerNames = [];
                for (let i = 0; i < data.length; i++) {
                    playerNames.push(data[i].login);
                }
                this.rating.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__["a" /* default */])({ 'players': playerNames }));
                this.backButtonEventsListener(this.logicAuth);
            }.bind(this));
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    showLogin() {
        this.indPage.hidden = true;
        this.loginPage.hidden = false;
        this.gamePage.hidden = true;
        this.ratPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;
        this.backButtonEventsListener(this.logicAuth);
    }

    showAbout() {
        this.indPage.hidden = true;
        this.aboutPage.hidden = false;
        this.gamePage.hidden = true;
        this.backButton.hidden = false;
        this.about.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__static_renderedTemplates_aboutTemplate__["a" /* default */])());
        this.backButtonEventsListener(this.logicAuth);
    }

    showInd() {
        this.indPage.hidden = false;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.gamePage.hidden = true;
        this.siteService.checkAuth().then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                this.logicAuth = true;
                this.menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': this.logicAuth }));
            } else {
                this.menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': this.logicAuth }));
            }
            this.menuEventsListener(this.logicAuth);
        }).catch(err => {
            console.log('fetch error: ', err);
        });
        this.backButton.hidden = true;
    }

    showGame() {
        /*this.gamePage.hidden = false;
        this.indPage.hidden = true;
        this.ratPage.hidden = true;
        this.loginPage.hidden = true;
        this.aboutPage.hidden = true;
        this.backButton.hidden = false;*/
        this.showLogin();
        this.backButtonEventsListener(this.logicAuth);
    }

    userLogin(login, password, callback1 = null, callback2 = null) {
        this.siteService.login(login, password, callback1 = null, callback2 = null);
        //this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    userRegister(login, email, password, callback1 = null, callback2 = null) {
        this.siteService.register(login, email, password, callback1 = null, callback2 = null);
        this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    userLogout() {
        this.siteService.logout().then(response => {
            console.log("start logout");
            if (response.status === 200) {
                this.logicAuth = false;
                this.showInd();
            }
        }).catch(err => {
            console.log('fetch error: ', err);
            this.showInd();
        });
    }

    makeRating() {
        this.siteService.makeRating();
    }

    menuEventsListener(logicAuth) {
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                this.showGame();
            }.bind(this));
            document.getElementById('menuLogout').addEventListener("click", function () {
                this.userLogout();
                //Router.nav('/login');
            }.bind(this));
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                this.showLogin();
                //Router.nav('/login');
            }.bind(this));
        }
        document.getElementById('menuRating').addEventListener("click", function () {
            this.showRating();
            //Router.nav('/rating');
            this.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        }.bind(this));
        document.getElementById('menuAbout').addEventListener("click", function () {
            this.showAbout();
            //Router.nav('/about');
        }.bind(this));
    }

    backButtonEventsListener(logicAuth) {
        document.getElementById('backButton').addEventListener("click", function () {
            //Router.nav('/');
            this.showInd();
            this.menuEventsListener(logicAuth);
        }.bind(this));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Manage;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_components_about__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_components_rating__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_aboutTemplate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_siteService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_manage__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__services_router__);










(function () {

    let manage = new __WEBPACK_IMPORTED_MODULE_7__services_manage__["a" /* default */]();
    //let router = new router();

    //let menu = new Menu();
    manage.sound();
    manage.showInd();
    //menu.render(renderMenu({'logicAuth': logicAuth}));

    //let rating = new Rating();
    // manage.makeRating();

    //let about = new About();
    //about.render(renderAbout());

    let loginPage = document.getElementById("log");
    //this.ratPage = document.getElementById("rat");
    //this.aboutPage = document.getElementById("about");
    let gamePage = document.getElementById("game");

    let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game"
        }
    });

    let login = new Login({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            logfields: [{
                input: "text",
                name: "username",
                tabindex: "1",
                placeholder: "Username"
            }, {
                input: "password",
                name: "password",
                tabindex: "2",
                placeholder: "Password"
            }],
            regfields: [{
                input: "text",
                name: "username_reg",
                tabindex: "1",
                placeholder: "Username"
            }, {
                input: "email",
                name: "email",
                tabindex: "1",
                placeholder: "Email Address"
            }, {
                input: "password",
                name: "password1",
                tabindex: "2",
                placeholder: "Password"
            }, {
                input: "password",
                name: "password2",
                tabindex: "2",
                placeholder: "Confirm Password"
            }]
        }
    });

    login.on("submit", event => {
        if (document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            manage.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value, document.getElementById("passwordsignup").value, null, null);
        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            manage.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);
        }
        manage.showInd();
    });

    loginPage.appendChild(login.el);
    gamePage.appendChild(game.el);

    //eventsListener();

    /*function eventsListener(){
        if (logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                manage.showGame();
            });
            document.getElementById('menuLogout').addEventListener("click", function () {
                manage.userLogout();
                Router.nav('/login');
            });
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                //manage.showLogin();
                Router.nav('/login');
            });
          }
        document.getElementById('menuRating').addEventListener("click", function () {
            //manage.showRating();
            Router.nav('/rating');
            manage.makeRating();
            //rating.render(renderRating({'players': playerNames}));
        });
        document.getElementById('menuAbout').addEventListener("click", function () {
            //manage.showAbout();
            Router.nav('/about');
        });
      }*/

    /*document.getElementById('backButton').addEventListener("click", function () {
        Router.nav('/');
        eventsListener();
    });*/
})();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class HTTP {
    constructor() {
        if (HTTP.__instance) {
            return HTTP.__instance;
        }
        HTTP.__instance = this;
    }

    request(address = '', type = '', body) {
        let req = {
            method: type,
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        };
        if (body) {
            console.log(body);
            req.body = JSON.stringify(body);
        }
        return fetch(address, req);
    }

    /*set BaseURL(value) {
        this._baseURL = value;
    }
      get BaseURL() {
        return this._baseURL;
    }
      get(address, callback = null) {
        const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('GET', address, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        };
        xhr.send(null);
    }
      delete(address, callback = null) {
        const xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
        let url = '${this._baseURL}${address}';
        xhr.open('DELETE', address, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        }
        xhr.send(null);
    }
      post(address, body, callback = null) {
        const xhr = new XMLHttpRequest();
        let url = '${this._baseURL}${address}';
        xhr.open('POST', address, true);
        xhr.withCredentials = true;
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (typeof callback === 'function') {
                callback(xhr);
            }
        }
        console.log(JSON.stringify(body));
        xhr.send(JSON.stringify(body));
      }*/
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP;


/***/ })
/******/ ]);