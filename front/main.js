import Manage  from './services/manage'
import Router from './services/router'

(function () {


    let manage = new Manage();
    window.manage = manage;
    //console.log(window.manage);





    //window.showInd = manage.showInd();
    //window.showRating = manage.showRating();
    //window.showLogin = manage.showLogin();
    //window.showAbout = manage.showAbout();
    //window.showGame = manage.showGame();
    manage.showInd();


})();