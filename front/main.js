import About from './static/components/about';
import Menu from './static/components/menu';
import Rating from './static/components/menu';
import renderAbout from './static/renderedTemplates/aboutTemplate'
import renderMenu from './static/renderedTemplates/menuTemplate'
import renderRating from './static/renderedTemplates/ratingTemplate'
//import {playerNames} from './services/manage'
//import SiteService from './services/siteService'
import Manage  from './services/manage'

(function () {

    let indPage = document.getElementById("ind");
    let ratPage = document.getElementById("rat");
    let logPage = document.getElementById("log");
    let aboutPage = document.getElementById("about");
    let gamePage = document.getElementById("game");

    //const Siteservice = window.SiteService;
    //const siteService = new SiteService();

    let manage = new Manage();

    console.log(manage.logicAuth);
    let menu = new Menu(renderMenu({'logicAuth': manage.logicAuth}), null);

    let topPlayers = manage.makeRating();
    console.log("Main" + topPlayers);
    let rating = new Rating(renderRating({'players': topPlayers}), null);

    let about = new About(renderAbout(), null);

    let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game",
        }
    });

    let login = new Login({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            logfields: [
                {
                    input: "text",
                    name: "username",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Password"
                },
            ],
            regfields: [
                {
                    input: "text",
                    name: "username_reg",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "email",
                    name: "email",
                    tabindex: "1",
                    placeholder: "Email Address"
                },
                {
                    input: "password",
                    name: "password1",
                    tabindex: "2",
                    placeholder: "Password"
                },
                {
                    input: "password",
                    name: "password2",
                    tabindex: "2",
                    placeholder: "Confirm Password"
                },
            ],
        }
    });

    login.on("submit", (event) => {
        if (document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            manage.userRegister(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                document.getElementById("passwordsignup").value, null, null);

        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            manage.userLogin(document.getElementById("username").value, document.getElementById("password").value, null, null);

        }
    });

    /*login.addEventListener("click", (event) => {
     showRating();
     });*/

    indPage.appendChild(menu.content);
    ratPage.appendChild(rating.content);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    //siteService.checkAuth();
    // manage.makeRating();

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;

    eventsListener();

    function eventsListener(){
        if (manage.logicAuth) {
            document.getElementById('menuStartAuth').addEventListener("click", function () {
                manage.showGame()
            });
            document.getElementById('menuLogout').addEventListener("click", function () {
                manage.userLogout()
            });
        } else {
            document.getElementById('menuStartNotAuth').addEventListener("click", function () {
                manage.showLogin()
            });

        }
        document.getElementById('menuRating').addEventListener("click", function () {
            manage.showRating();
            manage.makeRating();
            rating.render(renderRating({'players': topPlayers}));
        });
        document.getElementById('menuAbout').addEventListener("click", function () {
            manage.showAbout()
        });
        document.getElementById('backButton').addEventListener("click", function () {
            manage.showInd();
            console.log(manage.logicAuth);
            menu.render(renderMenu({'logicAuth': manage.logicAuth}));
            eventsListener();
        });
    }




    //'showGame': manage.showGame(),
    //'showLogin': manage.showLogin(),
    //'showRating': manage.showRating(),
    //'userLogout': manage.userLogout(),
    //'showAbout': showAbout

    //window.menu = menu;
})();