(function () {
    class Login {
        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this._updateHtml()
        }

        _getLogFields() {
            let {logfields = []} = this.data;

            return logfields.map(field => {
                return `
			<div class = "form-group" > 
				<input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}"> 
			</div>
			`
            }).join(' ');
        }

        _getRegFields() {
            let {regfields = []} = this.data;

            return regfields.map(field => {
                return `
			<div class = "form-group" > 
				<input type = "${field.input}"	name = "${field.name}" id = "${field.name}" tabindex = "${field.tabindex}" class = "form-control" placeholder = "${field.placeholder}"> 
			</div>
			`
            }).join(' ');
        }

        _updateHtml() {
            this.el.innerHTML = `
				<div class="mainmenu">
            		<h1>${this.data.title}</h1>
				</div>
        		<div class="row">
            	<div class="col-md-6 col-md-offset-3">
                <div class="panel panel-login">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-6"> <a href="#" class="active" id="login-form-link">Login</a> </div>
                            <div class="col-xs-6"> <a href="#" id="register-form-link">Register</a> </div>
                        </div>
                        <hr> </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <form id="login-form" role="form" style="display: block;">
                                    ${this._getLogFields()} 
                                    <div class="form-group text-center">
                                        <input type="checkbox" tabindex="3" class="" name="remember" id="remember">
                                        <label for="remember"> Remember Me</label>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In"> </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="text-center"> <a href="#" tabindex="5" class="forgot-password">Forgot Password?</a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form  id="register-form" role="form" style="display: none;" onsubmit="">
                                    ${this._getRegFields()} 
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now"> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mainmenu" style="padding-top: 0px">
          <p class="title" onclick="showInd();">Back</p>
	</div>
			`;
        }

        on(type, callback) {
            this.el.addEventListener(type, callback);
        }
    }
    window.Login = Login;
})();