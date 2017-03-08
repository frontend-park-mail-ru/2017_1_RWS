(function () {
    'use strict';

    const HTTP = window.HTTP;


    class SiteService {
        constructor() {
            this.http = new HTTP();
        }

        login(login, password, callback = null) {
            console.log('start login');
            const body = {
                login, password
            }
            this.http.post('http://Rws-backend.herokuapp.com/api/session', body, function (xhr) {
                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
                if (typeof callback === 'function') {
                    callback(xhr);
                }
            });
            console.log('data is posted');
        }

        register(login, email, password, callback = null) {
            const body = {
                login, email, password
            }
            this.http.post('http://Rws-backend.herokuapp.com/api/signup', body, function (xhr) {
                const responseText = xhr.responseText;
                const responseParsed = JSON.parse(responseText);
                console.log(responseParsed);
                if (typeof callback === 'function') {
                    callback(xhr);
                }
                console.log('data is posted');
            });
        }
    }
    window.SiteService = SiteService;
})();
