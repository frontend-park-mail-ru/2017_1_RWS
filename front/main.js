import About from './static/components/about';
import Menu from './static/components/menu';
import Rating from './static/components/rating';
import renderAbout from './static/renderedTemplates/aboutTemplate'
import renderMenu from './static/renderedTemplates/menuTemplate'
import renderRating from './static/renderedTemplates/ratingTemplate'
import {playerNames, logicAuth} from './services/siteService'
import Manage  from './services/manage'
import {Router} from './services/router'

(function () {

    let indPage = document.getElementById("ind");
    let ratPage = document.getElementById("rat");
    let logPage = document.getElementById("log");
    let aboutPage = document.getElementById("about");
    let gamePage = document.getElementById("game");
    let backButton = document.getElementById("backButton");

    let manage = new Manage();
    //let router = new router();

    let menu = new Menu();
    menu.render(renderMenu({'logicAuth': logicAuth}));

    let rating = new Rating();
    manage.makeRating();

    let about = new About();
    alert("render about");
    about.render(renderAbout());

    let game = new Game({
        el: document.createElement('div'),
        data: {
            title: "Game",
        }
    });

    export default function renderAll(){
            about.render(renderAbout());
    }

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

    function eventsListener(){
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
            rating.render(renderRating({'players': playerNames}));
        });
        document.getElementById('menuAbout').addEventListener("click", function () {
            //manage.showAbout();
            Router.nav('/about');
        });

    }

    document.getElementById('backButton').addEventListener("click", function () {
        //manage.showInd();
        Router.nav('/');
        menu.render(renderMenu({'logicAuth': logicAuth}));
        eventsListener();
    });
})();