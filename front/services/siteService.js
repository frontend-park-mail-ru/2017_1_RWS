(function () {
    'use strict';

    const HTTP = window.HTTP;
    const http = new HTTP();
    http.BaseURL = 'http://localhost:8082/api';


    class SiteService {
        constructor() {
            this.http = new HTTP();
            //http.BaseURL = 'http://localhost:8082/api';
        }

        login(login, password/*callback*/) {
            console.log('start login');
            const body = {
                login, password
            }
            this.http.post('http://localhost:8082/api/session', body, null);
            console.log('data is posted');
        }

        register(login, email, password/*callback*/) {
            const body = {
                login, email, password
            }
            this.http.post('/signup', body, null);
            console.log('data is posted');
        }
    }
    window.SiteService = SiteService;
})();
