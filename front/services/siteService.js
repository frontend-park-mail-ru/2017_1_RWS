import HTTP from './../modules/http'
//import ratingFromServerRender from './serverResponseRender'
import Rating  from './../static/components/rating'
import renderRating from './../static/renderedTemplates/ratingTemplate'

//export var logicAuth = false;
//export var playerNames = [];

export default class SiteService {
    constructor() {
        this.http = new HTTP();
    }

    login(login, password, callback1 = null, callback2 = null) {
        const body = {
            login, password
        };
        let prom = this.http.request('https://rws-backend.herokuapp.com/api/session', 'POST', body);
        prom.then(response => {
            if (response.status === 200) {
                logicAuth = true;
                //showGame();
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    register(login, email, password, callback1 = null, callback2 = null) {
        const body = {
            login, email, password
        };
        let prom = this.http.request('https://rws-backend.herokuapp.com/api/signup', 'POST', body);
        prom.then(response => {
            response.json().then(function (data) {
                console.log(data);
            });
            if (response.status === 200) {
                logicAuth = true;
                //showGame();
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });
    }

    checkAuth() {
        console.log("start checkAuth");
        return this.http.request('https://rws-backend.herokuapp.com/api/session', 'GET');
    }

    logout() {
        return prom = this.http.request('https://rws-backend.herokuapp.com/api/session', 'DELETE');
        /*prom.then(response => {
            console.log("start logout");
            if (prom.status === 200) {
                //showLogin();
                //showInd();
            } else {
                //showInd();
                //showLogin();
                response.json().then(function (data) {
                    console.log(data);
                });
            }
        }).catch(err => {
            console.log('fetch error: ', err);
        });*/
    }

    makeRating() {
        return this.http.request('https://rws-backend.herokuapp.com/api/rating', 'GET');
    }
}

