import SiteService from './siteService'
//import Menu from './../static/components/menu'
//import Rating from './../static/components/rating'
//import renderMenu from './../static/renderedTemplates/menuTemplate'

export default class Manage {
    constructor(){
        this.ind = document.getElementById("ind");
        this.login = document.getElementById("log");
        this.rating = document.getElementById("rat");
        this.about = document.getElementById("about");
        this.game = document.getElementById("game");
        this.backButton = document.getElementById("backButton");
        this.siteService = new SiteService();
        this.siteService.checkAuth();
        this.myAudio = new Audio("game/assets/main_theme.mp3");
        this.myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        this.myAudio.play();
    }


    //SiteService = window.SiteService;

    sound(){
        let s = document.getElementById("sBut");
        if(!myAudio.paused){
            s.src = "resources/soundOff.png";
            myAudio.pause();
        }
        else{
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
        let b = document.getElementById("bb");
        console.log(b);
        //.hidden = true;
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

    userLogin(login, password, callback1=null, callback2=null){
        this.siteService.login(login, password, callback1=null, callback2=null);
        //this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    userRegister(login, email, password, callback1=null, callback2=null){
        this.siteService.register(login, email, password, callback1=null, callback2=null);
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
