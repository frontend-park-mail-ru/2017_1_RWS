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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class About {
    constructor(renderTemplate, options) {
        this.content = document.createElement('div');
        this.options = options;
        this.renderTemplate = renderTemplate;
        this.render();
    }
    /* constructor (options = { data: {} }) {
         this.data = options.data;
         this.el = options.el;
           this.render();
     }*/

    render() {
        this.content.innerHTML = this.renderTemplate;
    }

    /* _getFields () {
         let { fields = [] } = this.data;
           return fields.map(field => { return `<h2>${field.prof}</h2><h3>${field.name}</h3>` }).join(' ');
     }*/

    _updateHtml() {

        /* this.el.innerHTML = `
        <div id="menu" class="mainmenu">
                 <h1>${this.data.title || 'default'}</h1>
                 <br>
                 <br>
        ${this._getFields()} 
        <br>
        <p class="title" onclick="showInd();">Back</p>
             </div>
        `;*/
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = About;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderAbout;
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
}function renderAbout(locals) {
  var pug_html = "",
      pug_mixins = {},
      pug_interp;var pug_debug_filename, pug_debug_line;try {
    var pug_debug_sources = { "front\u002FcomponentTemplates\u002FaboutTemplate.pug": "\u002F\u002F\r\n   Created by SvetaZlobina on 04.04.2017.\r\n\r\np About file" };
    var pug_indent = [];
    ;pug_debug_line = 1;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "\n\u003C!--\n";
    ;pug_debug_line = 2;
    pug_html = pug_html + "Created by SvetaZlobina on 04.04.2017.";
    ;pug_debug_line = 3;
    pug_html = pug_html + "\n";
    ;pug_debug_line = 3;
    pug_html = pug_html + "\n--\u003E";
    ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "\n\u003Cp\u003E";
    ;pug_debug_line = 4;pug_debug_filename = "front\u002FcomponentTemplates\u002FaboutTemplate.pug";
    pug_html = pug_html + "About file\u003C\u002Fp\u003E";
  } catch (err) {
    pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);
  };return pug_html;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_components_about__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_renderedTemplates_aboutTemplate__ = __webpack_require__(1);



(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
    let gamePage = document.querySelector("#game");

    const SiteService = window.SiteService;
    const siteService = new SiteService();

    // const pug = require('pug');

    const HTTP = window.HTTP;
    const http = new HTTP();

    let menu = new Menu({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            fields: [{
                name: "Start",
                fun: "auth()"
            }, {
                name: "Rating",
                fun: "showRating()"
            }, {
                name: "About",
                fun: "showAbout()"
            }, {
                name: "Logout",
                fun: "userLogout()"
            }]
        }
    });

    let rating = new Rating({
        el: document.createElement('div'),
        data: {
            title: "Rating"
        }
    });

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
        //if ($("#register-form").valid() && !lg) {
        if ($("input[name=usernamesignup]").val() !== "") {
            event.preventDefault();
            siteService.register($("input[name=usernamesignup]").val(), $("input[name=emailsignup]").val(), $("input[name=passwordsignup]").val(), showInd(), showLogin());
            /*$("#register-form").each(function () {
             this.reset();
             });*/
        } else if ($("input[name=username]").val() !== "") {
            event.preventDefault();

            siteService.login($("input[name=username]").val(), $("input[name=password]").val(), showInd(), showLogin());
        }

        /*} else if ($("#login-form").valid()) {
              event.preventDefault();
              siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());
            $("#login-form").each(function () {
                this.reset();
            });
            }*/
    });

    let about = new __WEBPACK_IMPORTED_MODULE_0__static_components_about__["a" /* default */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__static_renderedTemplates_aboutTemplate__["a" /* default */])(), null);
    /*({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            fields: [
                {
                    prof: "Fullstack",
                    name: "Kuchaeva Karina"
                },
                {
                    prof: "Fullstack",
                    name: "Zlobina Svetlana"
                },
                {
                    prof: "Teambuilding",
                    name: "Bayramukov Yan"
                },
                {
                    prof: "Producer",
                    name: "Maschkin Egor"
                },
                {
                    prof: "Designer",
                    name: "Ovchinnikov Maksim"
                }
            ]
        }
    });*/

    indPage.appendChild(menu.el);
    ratPage.appendChild(rating.el);
    makeRating();
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);