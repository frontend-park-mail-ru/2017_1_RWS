import SiteService from './siteService'
import Menu from './../static/components/menu'
import Rating from './../static/components/rating'
import About from './../static/components/about'
import renderMenu from './../static/renderedTemplates/menuTemplate'
import renderRating from './../static/renderedTemplates/ratingTemplate'
import renderAbout from './../static/renderedTemplates/aboutTemplate'
import {Router} from './router'

export default class Manage {
    constructor() {
        this.indPage = document.getElementById("ind");
        this.loginPage = document.getElementById("log");
        this.ratPage = document.getElementById("rat");
        this.aboutPage = document.getElementById("about");
        this.gamePage = document.getElementById("game");
        this.backButton = document.getElementById("backButton");
        this.siteService = new SiteService();
        this.menu = new Menu();
        this.rating = new Rating();
        this.about = new About();
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
        }
        else {
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
                this.rating.render(renderRating({'players': playerNames}));
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
        this.about.render(renderAbout());
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
                this.menu.render(renderMenu({'logicAuth': this.logicAuth}));
            } else {
                this.menu.render(renderMenu({'logicAuth': this.logicAuth}));
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

    backButtonEventsListener(logicAuth){
        document.getElementById('backButton').addEventListener("click", function () {
            //Router.nav('/');
            this.showInd();
            this.menuEventsListener(logicAuth);
        }.bind(this));
    }
}
