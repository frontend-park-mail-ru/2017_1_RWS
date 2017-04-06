import HTTP from './../modules/http'
//import ratingFromServerRender from './serverResponseRender'
import Rating  from './../static/components/rating'
import renderRating from './../static/renderedTemplates/ratingTemplate'

export var logicAuth = false;
export var playerNames = [];

export default class SiteService {
    constructor() {
        this.http = new HTTP();
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
                logicAuth = true;
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
                logicAuth = true;
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
                logicAuth = true;
            } else {
            }

        });
    }

    logout() {
        this.http.delete('http://Rws-backend.herokuapp.com/api/session', function (xhr) {
            console.log("start logout");
            const responseText = xhr.responseText;


            if (xhr.status === 200) {
                logicAuth = false;
            } else {
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
            }

        });
    }

    makeRating() {
        this.http.get('http://Rws-backend.herokuapp.com/api/rating', function (xhr) {
            console.log("start making rating");
            playerNames = [];
            const responseText = xhr.responseText;
            const responseParsed = JSON.parse(responseText);
            for (let i = 0; i < responseParsed.length; i++)
                playerNames.push(responseParsed[i].login);
            console.log(playerNames);
        });
    }
}

