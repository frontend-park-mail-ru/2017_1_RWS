(function () {
    'use strict';
    const ALLOWED_METHODS = ['POST', 'PUT', 'PATCH', 'DELETE'];

    class HTTP {
        constructor() {
            if (HTTP.__instance) {
                return HTTP.__instance;
            }
            this._baseURL = '';
            HTTP.__instance = this;
        }

        set BaseURL(value) {
            this._baseURL = value;
        }

        get BaseURL() {
            return this._baseURL;
        }

        get(address, callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', address, true);
            xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (typeof callback === 'function') {
                    callback(xhr);
                }
            }
            xhr.send(null);
        }

        post(address, body, callback) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', address, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader('Content-Type', 'application/json, charset=utf-8');
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (typeof callback === 'function') {
                    callback(xhr);
                }
            }
            xhr.send(JSON.stringify(body));
            //console.log('post is done');
        }
    }
    window.HTTP = HTTP;
})();
