import About from './static/components/about';
import Menu from './static/components/menu';
import Rating from './static/components/menu';
import renderAbout from './static/renderedTemplates/aboutTemplate'
import renderMenu from './static/renderedTemplates/menuTemplate'
import renderRating from './static/renderedTemplates/ratingTemplate'
//import {playerNames} from './services/manage'
//import SiteService from './services/siteService'
//import makeRating  from './services/manage'

(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
    let gamePage = document.querySelector("#game");

    const Siteservice = window.SiteService;
    const siteService = new SiteService();

    let menu = new Menu (renderMenu(), null);
    let rating = new Rating(renderRating({position: "2"}), null);
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
        if ( document.getElementById("usernamesignup").value !== "") {
            event.preventDefault();

            siteService.register(document.getElementById("usernamesignup").value, document.getElementById("emailsignup").value,
                document.getElementById("passwordsignup").value, null, null);

        } else if (document.getElementById("username").value !== "") {
            event.preventDefault();

            siteService.login(document.getElementById("username").value, document.getElementById("password").value,  null, null);

        }
    });



    indPage.appendChild(menu.content);
    ratPage.appendChild(rating.content);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    siteService.checkAuth();
    makeRating();

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;

    window.menu = menu;
})();