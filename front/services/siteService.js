import HTTP from './../modules/http'
import ratingFromServerRender from './serverResponseRender'
//import Manage  from './manage'

//var logicAuth = true;

export default class SiteService {
    constructor() {
        this.http = new HTTP();
        this.serviceAuth = false;
    }


    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        }
        this.http.post('http://Rws-backend.herokuapp.com/api/session', body, function (xhr) {

            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                this.http.httpAuth = true;
                //this.manage.showGame();
            }
        });
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        }
        this.http.post('http://Rws-backend.herokuapp.com/api/signup', body, function (xhr) {
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                this.http.httpAuth = true;
                //this.manage.showGame();
            }

        });
    }

    checkAuth() {
        this.http.get('http://Rws-backend.herokuapp.com/api/session', this.serviceAuth = function (xhr) {
            console.log("start checkAuth");
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            console.log(responseParsed);
            if (xhr.status === 200) {
                //this.http.httpAuth = true;
                //console.log(this.httpAuth);
                return true;
            } else {
                //this.serviceAuth = false;
                return false;
            }

        });
    }

    logout() {
        this.http.delete('http://Rws-backend.herokuapp.com/api/session', function (xhr) {
            console.log("start logout");
            const responseText = xhr.responseText;


            if (xhr.status === 200) {
                this.http.httpAuth = false;
                //this.manage.showLogin();
            } else {
                //this.manage.showLogin();
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
            }

        });
    }

    makeRating() {
        console.log("Into service rating");
        this.http.get('http://Rws-backend.herokuapp.com/api/rating', function (xhr) {
            console.log("start making rating");
            let playerNames = [];
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            for(let i = 0; i < responseParsed.length; i++)
                playerNames.push(responseParsed[i].login);
            console.log(playerNames);
            return playerNames;

        });
        /*while(this.http.serverResponse === []){

        }
        console.log("Into service " + this.http.serverResponse);
        return this.http.serverResponse;*/
    }
}
//window.SiteService = SiteService;

