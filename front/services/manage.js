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