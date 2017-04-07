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
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteService__ = __webpack_require__(3);

//import Menu from './../static/components/menu'
//import Rating from './../static/components/rating'
//import renderMenu from './../static/renderedTemplates/menuTemplate'

class Manage {
    constructor() {
        this.ind = document.getElementById("ind");
        this.login = document.getElementById("log");
        this.rating = document.getElementById("rat");
        this.about = document.getElementById("about");
        this.game = document.getElementById("game");
        this.backButton = document.getElementById("backButton");
        this.siteService = new __WEBPACK_IMPORTED_MODULE_0__siteService__["c" /* default */]();
        this.siteService.checkAuth();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
    }

    //SiteService = window.SiteService;

    sound() {
        let s = document.getElementById("sBut");
        if (!myAudio.paused) {
            s.src = "resources/soundOff.png";
            myAudio.pause();
        } else {
            s.src = "resources/soundOn.png";
            myAudio.play();
        }
    }

    showRating() {
        this.ind.hidden = true;
        this.rating.hidden = false;
        this.game.hidden = true;
        this.backButton.hidden = false;
    }

    showLogin() {
        this.ind.hidden = true;
        this.login.hidden = false;
        this.game.hidden = true;
        this.rating.hidden = true;
        this.about.hidden = true;
        this.backButton.hidden = false;
    }

    showAbout() {
        this.ind.hidden = true;
        this.about.hidden = false;
        this.game.hidden = true;
        this.backButton.hidden = false;
    }

    showInd() {
        /*let b = document.getElementById("#bb");
        b.hidden = true;*/
        this.ind.hidden = false;
        this.rating.hidden = true;
        this.login.hidden = true;
        this.about.hidden = true;
        this.game.hidden = true;
        this.siteService.checkAuth();
        this.backButton.hidden = true;
    }

    showGame() {
        this.game.hidden = false;
        this.ind.hidden = true;
        this.rating.hidden = true;
        this.login.hidden = true;
        this.about.hidden = true;
        this.backButton.hidden = false;
    }

    auth() {
        this.siteService.checkAuth();
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
        this.siteService.logout();
        this.showLogin();
    }

    makeRating() {
        this.siteService.makeRating();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Manage;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_http__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_rating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_renderedTemplates_ratingTemplate__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logicAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return playerNames; });

//import ratingFromServerRender from './serverResponseRender'



var logicAuth = false;
var playerNames = [];

class SiteService {
    constructor() {
        this.http = new __WEBPACK_IMPORTED_MODULE_0__modules_http__["a" /* default */]();
    }

    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        };
        this.http.post('http://Rws-backend.herokuapp.com/api/session', body, function (xhr) {

            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                logicAuth = true;
            }
        });
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        };
        this.http.post('http://Rws-backend.herokuapp.com/api/signup', body, function (xhr) {
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                logicAuth = true;
            }
        });
    }

    checkAuth() {
        this.http.get('http://Rws-backend.herokuapp.com/api/session', this.serviceAuth = function (xhr) {
            console.log("start checkAuth");
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                logicAuth = true;
            } else {}
        });
    }

    logout() {
        this.http.delete('http://Rws-backend.herokuapp.com/api/session', function (xhr) {
            console.log("start logout");
            const responseText = xhr.responseText;

            if (xhr.status === 200) {
                logicAuth = false;
            } else {
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
            }
        });
    }

    makeRating() {
        this.http.get('http://Rws-backend.herokuapp.com/api/rating', function (xhr) {
            console.log("start making rating");
            playerNames = [];
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            for (let i = 0; i < responseParsed.length; i++) playerNames.push(responseParsed[i].login);
            console.log(playerNames);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = SiteService;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class Rating extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rating;


/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });


let manage = new __WEBPACK_IMPORTED_MODULE_0__manage__["a" /* default */]();

var Router = {
    routes: {
        "/": "indexPage",
        "/rating": "ratingPage",
        "/about": "aboutPage",
        "/login": "loginPage"
    },
    init: function () {
        this._routes = [];
        for (var route in this.routes) {
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^' + route.replace(/:\w+/, '(\\w+)') + '$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path) {
        var i = this._routes.length;
        while (i--) {
            var args = path.match(this._routes[i].pattern);
            if (args) {
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

var getLocation = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function (e) {
    e.preventDefault();
    var l = getLocation(document.location.href);
    Router.nav(l.pathname);
};

Router.init();
let str = getLocation(document.location.href).pathname;

Router.init();
Router.nav(str.substring(0, str.length - 1));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class About extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = About;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseComponent__ = __webpack_require__(0);


class Menu extends __WEBPACK_IMPORTED_MODULE_0__baseComponent__["a" /* default */] {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;


/***/ }),
/* 9 */
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
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
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
/* 10 */
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
        t = t || __webpack_require__(1).readFileSync(e, "utf8");
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_components_about__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_components_menu__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_components_rating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_aboutTemplate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_siteService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_manage__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_router__ = __webpack_require__(6);










(function () {

    let indPage = document.getElementById("ind");
    let ratPage = document.getElementById("rat");
    let logPage = document.getElementById("log");
    let aboutPage = document.getElementById("about");
    let gamePage = document.getElementById("game");
    let backButton = document.getElementById("backButton");

    let manage = new __WEBPACK_IMPORTED_MODULE_7__services_manage__["a" /* default */]();
    //let router = new router();

    let menu = new __WEBPACK_IMPORTED_MODULE_1__static_components_menu__["a" /* default */]();
    menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': __WEBPACK_IMPORTED_MODULE_6__services_siteService__["a" /* logicAuth */] }));

    let rating = new __WEBPACK_IMPORTED_MODULE_2__static_components_rating__["a" /* default */]();
    manage.makeRating();

    let about = new __WEBPACK_IMPORTED_MODULE_0__static_components_about__["a" /* default */]();
    about.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__static_renderedTemplates_aboutTemplate__["a" /* default */])());

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

    indPage.appendChild(menu.content);
    ratPage.appendChild(rating.content);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;
    backButton.hidden = true;

    eventsListener();

    function eventsListener() {
        if (__WEBPACK_IMPORTED_MODULE_6__services_siteService__["a" /* logicAuth */]) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                manage.showGame();
            });
            document.getElementById('menuLogout').addEventListener("click", function () {
                manage.userLogout();
                __WEBPACK_IMPORTED_MODULE_8__services_router__["a" /* Router */].nav('/login');
            });
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                //manage.showLogin();
                __WEBPACK_IMPORTED_MODULE_8__services_router__["a" /* Router */].nav('/login');
            });
        }
        document.getElementById('menuRating').addEventListener("click", function () {
            //manage.showRating();
            __WEBPACK_IMPORTED_MODULE_8__services_router__["a" /* Router */].nav('/rating');
            manage.makeRating();
            rating.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__static_renderedTemplates_ratingTemplate__["a" /* default */])({ 'players': __WEBPACK_IMPORTED_MODULE_6__services_siteService__["b" /* playerNames */] }));
        });
        document.getElementById('menuAbout').addEventListener("click", function () {
            //manage.showAbout();
            __WEBPACK_IMPORTED_MODULE_8__services_router__["a" /* Router */].nav('/about');
        });
    }

    document.getElementById('backButton').addEventListener("click", function () {
        //manage.showInd();
        __WEBPACK_IMPORTED_MODULE_8__services_router__["a" /* Router */].nav('/');
        menu.render(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__static_renderedTemplates_menuTemplate__["a" /* default */])({ 'logicAuth': __WEBPACK_IMPORTED_MODULE_6__services_siteService__["a" /* logicAuth */] }));
        eventsListener();
    });
})();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


//const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];
class HTTP {
    constructor() {
        if (HTTP.__instance) {
            return HTTP.__instance;
        }
        this._baseURL = '';
        HTTP.__instance = this;
        this.ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];
    }

    set BaseURL(value) {
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
        };
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
        };
        console.log(JSON.stringify(body));
        xhr.send(JSON.stringify(body));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP;


/***/ })
/******/ ]);