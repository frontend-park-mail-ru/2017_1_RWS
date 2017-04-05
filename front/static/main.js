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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class baseComponent {
    constructor(renderTemplate, options) {
        this.content = document.createElement('div');
        this.options = options;
        this.renderTemplate = renderTemplate;
        this.render(this.renderTemplate);
    }

    render(renderTemplate) {
        //to override
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = baseComponent;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeRating;
//import SiteService from './siteService'
//import renderMenu from './../static/renderedTemplates/menuTemplate'

const ind = document.getElementById("ind");
const login = document.getElementById("log");
const rating = document.getElementById("rat");
const about = document.getElementById("about");
const game = document.getElementById("game");

const SiteService = window.SiteService;
const siteService = new SiteService();

function showRating() {
    ind.hidden = true;
    rating.hidden = false;
    game.hidden = true;
}

function showLogin() {
    ind.hidden = true;
    login.hidden = false;
    game.hidden = true;
    rating.hidden = true;
    about.hidden = true;
}

function showAbout() {
    ind.hidden = true;
    about.hidden = false;
    game.hidden = true;
}

function showInd() {
    ind.hidden = false;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
    game.hidden = true;
    siteService.checkAuth();
    //window.menu.render(renderMenu());
}

function showGame() {
    game.hidden = false;
    ind.hidden = true;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
}

function auth() {
    "use strict";

    siteService.checkAuth();
}

function userLogout() {
    "use strict";

    siteService.logout();
    showLogin();
}

function makeRating() {
    "use strict";

    siteService.makeRating();
}
//})();

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderAbout;
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
    t = t || __webpack_require__(1).readFileSync(e, "utf8");
  } catch (e) {
    pug_rethrow(n, null, r);
  }var i = 3,
      a = t.split("\n"),
      o = Math.max(r - i, 0),
      h = Math.min(a.length, r + i),
      i = a.slice(o, h).map(function (n, e) {
    var t = e + o + 1;return (t == r ? "  > " : "    ") + t + "| " + n;
  }).join("\n");throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}function renderAbout(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;var pug_debug_filename, pug_debug_line;try {
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FaboutTemplate.pug": "div(id='menu')\r\n    h1(class='h1Title') Our Team\r\n    div(class='aboutBody')\r\n        - var names = [\"Kuchaeva Karina - Fullstack\", \"Zlobina Svetlana - Fullstack\",\"Bayramukov Yan - Teambuilding\", \"Maschkin Egor - Producer\", \"Ovchinnikov Maksim - Designer\"];\r\n        each name in names\r\n            p(class='aboutName')= name\r\n\r\n\r\n" };
    var pug_indent = [];
    ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "\n\u003Cdiv id=\"menu\"\u003E";
    ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
    ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "Our Team\u003C\u002Fh1\u003E";
    ;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "\n  \u003Cdiv class=\"aboutBody\"\u003E";
    ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    var names = ["Kuchaeva Karina - Fullstack", "Zlobina Svetlana - Fullstack", "Bayramukov Yan - Teambuilding", "Maschkin Egor - Producer", "Ovchinnikov Maksim - Designer"];
    ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    // iterate names
    ;(function () {
      var $$obj = names;
      if ('number' == typeof $$obj.length) {
        for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
          var name = $$obj[pug_index0];
          ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
          pug_html = pug_html + "\n    \u003Cp class=\"aboutName\"\u003E";
          ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
          pug_html = pug_html + pug_escape(null == (pug_interp = name) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
        }
      } else {
        var $$l = 0;
        for (var pug_index0 in $$obj) {
          $$l++;
          var name = $$obj[pug_index0];
          ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
          pug_html = pug_html + "\n    \u003Cp class=\"aboutName\"\u003E";
          ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
          pug_html = pug_html + pug_escape(null == (pug_interp = name) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
        }
      }
    }).call(this);

    pug_html = pug_html + "\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderMenu;
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
    t = t || __webpack_require__(1).readFileSync(e, "utf8");
  } catch (e) {
    pug_rethrow(n, null, r);
  }var i = 3,
      a = t.split("\n"),
      o = Math.max(r - i, 0),
      h = Math.min(a.length, r + i),
      i = a.slice(o, h).map(function (n, e) {
    var t = e + o + 1;return (t == r ? "  > " : "    ") + t + "| " + n;
  }).join("\n");throw n.path = e, n.message = (e || "Pug") + ":" + r + "\n" + i + "\n\n" + n.message, n;
}function renderMenu(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;var pug_debug_filename, pug_debug_line;try {
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FmenuTemplate.pug": "div\r\n    h1(class='h1Title') Break Away\r\n    div(class='menuBody')\r\n        if logicAuth\r\n            p(class='title' onclick='showGame()')= 'Start'\r\n        else\r\n            p(class='title' onclick='showLogin()')= 'Start'\r\n        p(class='title' onclick='showRating()')= 'Rating'\r\n        if logicAuth\r\n            p(class='title' onclick='userLogout()')= 'Logout'\r\n        p(class='title' onclick='showAbout()')= 'About'\r\n\r\n" };
    ;var locals_for_with = locals || {};(function (logicAuth) {
      var pug_indent = [];
      ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "\n\u003Cdiv\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "Break Away\u003C\u002Fh1\u003E";
      ;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "\n  \u003Cdiv class=\"menuBody\"\u003E";
      ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      if (logicAuth) {
        ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showGame()\"\u003E";
        ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
      } else {
        ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showLogin()\"\u003E";
        ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + pug_escape(null == (pug_interp = 'Start') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
      }
      ;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showRating()\"\u003E";
      ;pug_debug_line = 8;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + pug_escape(null == (pug_interp = 'Rating') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
      ;pug_debug_line = 9;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      if (logicAuth) {
        ;pug_debug_line = 10;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"userLogout()\"\u003E";
        ;pug_debug_line = 10;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
        pug_html = pug_html + pug_escape(null == (pug_interp = 'Logout') ? "" : pug_interp) + "\u003C\u002Fp\u003E";
      }
      ;pug_debug_line = 11;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + "\n    \u003Cp class=\"title\" onclick=\"showAbout()\"\u003E";
      ;pug_debug_line = 11;pug_debug_filename = "front\u002FcomponentTemplates\u002FmenuTemplate.pug";
      pug_html = pug_html + pug_escape(null == (pug_interp = 'About') ? "" : pug_interp) + "\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    }).call(this, "logicAuth" in locals_for_with ? locals_for_with.logicAuth : typeof logicAuth !== "undefined" ? logicAuth : undefined);
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 7 */
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
    t = t || __webpack_require__(1).readFileSync(e, "utf8");
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
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FratingTemplate.pug": "div\r\n    h1(class='h1Title') Rating\r\n    div(class='ratingBody')\r\n        p #{position}\r\n        ol\r\n            each val in ['Player1', \"Player2\", \"Player3\", \"Player4\", \"Player5\", \"Player6\", \"Player7\", \"Player8\", \"Player9\", \"Player10\",]\r\n                li= val\r\n\r\n\r\n" };
    ;var locals_for_with = locals || {};(function (position) {
      var pug_indent = [];
      ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\n\u003Cdiv\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\n  \u003Ch1 class=\"h1Title\"\u003E";
      ;pug_debug_line = 2;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "Rating\u003C\u002Fh1\u003E";
      ;pug_debug_line = 3;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\n  \u003Cdiv class=\"ratingBody\"\u003E";
      ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\n    \u003Cp\u003E";
      ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + pug_escape(null == (pug_interp = position) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
      ;pug_debug_line = 5;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      pug_html = pug_html + "\n    \u003Col\u003E";
      ;pug_debug_line = 6;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
      // iterate ['Player1', "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8", "Player9", "Player10",]
      ;(function () {
        var $$obj = ['Player1', "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8", "Player9", "Player10"];
        if ('number' == typeof $$obj.length) {
          for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
            var val = $$obj[pug_index0];
            ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\n      \u003Cli\u003E";
            ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        } else {
          var $$l = 0;
          for (var pug_index0 in $$obj) {
            $$l++;
            var val = $$obj[pug_index0];
            ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + "\n      \u003Cli\u003E";
            ;pug_debug_line = 7;pug_debug_filename = "front\u002FcomponentTemplates\u002FratingTemplate.pug";
            pug_html = pug_html + pug_escape(null == (pug_interp = val) ? "" : pug_interp) + "\u003C\u002Fli\u003E";
          }
        }
      }).call(this);

      pug_html = pug_html + "\n    \u003C\u002Fol\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";
    }).call(this, "position" in locals_for_with ? locals_for_with.position : typeof position !== "undefined" ? position : undefined);
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_components_about__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_renderedTemplates_aboutTemplate__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_menuTemplate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_ratingTemplate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_manage__ = __webpack_require__(3);






//import {playerNames} from './services/manage'
//import SiteService from './services/siteService'


(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
    let gamePage = document.querySelector("#game");

    const Siteservice = window.SiteService;
    const siteService = new SiteService();

    let menu = new __WEBPACK_IMPORTED_MODULE_1__static_components_menu__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_menuTemplate__["a" /* default */])(), null);
    let rating = new __WEBPACK_IMPORTED_MODULE_1__static_components_menu__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_ratingTemplate__["a" /* default */])({ position: "2" }), null);
    let about = new __WEBPACK_IMPORTED_MODULE_0__static_components_about__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__static_renderedTemplates_aboutTemplate__["a" /* default */])(), null);

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

            siteService.register(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value, document.getElementById("passwordsignup").value, null, null);
        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            siteService.login(document.getElementById("username").value, document.getElementById("password").value, null, null);
        }
    });

    indPage.appendChild(menu.content);
    ratPage.appendChild(rating.content);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    siteService.checkAuth();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__services_manage__["a" /* default */])();

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;

    window.menu = menu;
})();

/***/ })
/******/ ]);