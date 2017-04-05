import About from './static/components/about';
import Menu from './static/components/menu';
import Rating from './static/components/menu';
import renderAbout from './static/renderedTemplates/aboutTemplate'
import renderMenu from './static/renderedTemplates/menuTemplate'
import renderRating from './static/renderedTemplates/ratingTemplate'
import {playerNames} from './services/manage'

(function () {


    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#log");
    let aboutPage = document.querySelector("#about");
    let gamePage = document.querySelector("#game");

    const SiteService = window.SiteService;
    const siteService = new SiteService();

    const HTTP = window.HTTP;
    const http = new HTTP();

    let menu = new Menu (renderMenu(), null);


    let rating = new Rating(renderRating(playerNames), null);

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
        //if ($("#register-form").valid() && !lg) {
        if ($("input[name=usernamesignup]").val() !== "") {
            event.preventDefault();
            siteService.register($("input[name=usernamesignup]").val(), $("input[name=emailsignup]").val(), $("input[name=passwordsignup]").val(), showInd(), showLogin());
            /*$("#register-form").each(function () {
             this.reset();
             });*/
        } else if ($("input[name=username]").val() !== "") {
            event.preventDefault();

            siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());

        }

        /*} else if ($("#login-form").valid()) {

            event.preventDefault();

            siteService.login($("input[name=username]").val(), $("input[name=password]").val(),  showInd(), showLogin());
            $("#login-form").each(function () {
                this.reset();
            });


        }*/
    });

    let about = new About(renderAbout(), null);

    indPage.appendChild(menu.content);
    ratPage.appendChild(rating.content);
    logPage.appendChild(login.el);
    aboutPage.appendChild(about.content);
    gamePage.appendChild(game.el);

    makeRating();

    ratPage.hidden = true;
    logPage.hidden = true;
    aboutPage.hidden = true;
    gamePage.hidden = true;
})();