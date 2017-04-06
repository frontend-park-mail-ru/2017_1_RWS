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
        this.siteService = new SiteService();
        this.siteService.checkAuth();
        this.logicAuth = this.siteService.serviceAuth;
        console.log(this.logicAuth);
        //this.ratingForRender = new Rating();
       // this.menuForRender = new Menu();
    }


    //SiteService = window.SiteService;


    showRating() {
        this.ind.hidden = true;
        this.rating.hidden = false;
        this.game.hidden = true;
    }

    showLogin() {
        this.ind.hidden = true;
        this.login.hidden = false;
        this.game.hidden = true;
        this.rating.hidden = true;
        this.about.hidden = true;
    }

    showAbout() {
        this.ind.hidden = true;
        this.about.hidden = false;
        this.game.hidden = true;
    }

    showInd() {
        this.ind.hidden = false;
        this.rating.hidden = true;
        this.login.hidden = true;
        this.about.hidden = true;
        this.game.hidden = true;
        this.siteService.checkAuth();
        //window.menu.render(renderMenu());
    }

    showGame() {
        this.game.hidden = false;
        this.ind.hidden = true;
        this.rating.hidden = true;
        this.login.hidden = true;
        this.about.hidden = true;
    }

    auth() {
        this.siteService.checkAuth();
    }

    userLogin(login, password, callback1=null, callback2=null){
        this.siteService.login(login, password, callback1=null, callback2=null);
        this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    userRegister(login, email, password, callback1=null, callback2=null){
        this.siteService.register(login, email, password, callback1=null, callback2=null);
        this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    userLogout() {
        this.siteService.logout();
        this.logicAuth = this.siteService.logicAuth;
        this.showLogin();
    }

    makeRating() {
        console.log("Into manage rating");
        let players = this.siteService.makeRating();
        console.log("Into manage " + players);
        return players;
    }

}
