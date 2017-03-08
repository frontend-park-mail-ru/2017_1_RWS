(function () {

    let indPage = document.querySelector("#ind");
    let ratPage = document.querySelector("#rat");
    let logPage = document.querySelector("#login");

    const SiteService = window.SiteService;
    const siteService = new SiteService();

    const HTTP = window.HTTP;
    const http = new HTTP();
    //http.BaseURL = 'http://Rws-backend.herokuapp.com/api';

    let menu = new Menu({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            fields: [
                {
                    name: "Start",
                    fun: "game/index.html",
                },
                {
                    name: "Rating",
                    fun: "showRating();",
                },
                {
                    name: "About",
                    fun: "showAbout();",
                },
                {
                    name: "Exit",
                    fun: "showLogin();",
                },
            ]
        }
    });

    let rating = new Rating({
        el: document.createElement('div'),
        data: {
            title: "Rating",
        }
    });

    let login = new Login({
        el: document.createElement('div'),
        data: {
            title: "Game title",
            logfields: [
                {
                    input: "text",
                    name: "username",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "password",
                    name: "password",
                    tabindex: "2",
                    placeholder: "Password"
                },
            ],
            regfields: [
                {
                    input: "text",
                    name: "username_reg",
                    tabindex: "1",
                    placeholder: "Username"
                },
                {
                    input: "email",
                    name: "email",
                    tabindex: "1",
                    placeholder: "Email Address"
                },
                {
                    input: "password",
                    name: "password1",
                    tabindex: "2",
                    placeholder: "Password"
                },
                {
                    input: "password",
                    name: "password2",
                    tabindex: "2",
                    placeholder: "Confirm Password"
                },
            ],
        }
    });
    login.on("submit", (event) => {
        if ($("#login-form").valid()) {
            event.preventDefault();
            console.log($("input[name=username]").val());
            console.log($("input[name=password]").val());
            siteService.login($("input[name=username]").val(), $("input[name=password]").val());
            showInd();
        }
    });

    indPage.appendChild(menu.el);
    ratPage.appendChild(rating.el);
    logPage.appendChild(login.el);


    ratPage.hidden = true;
    logPage.hidden = true;
})();