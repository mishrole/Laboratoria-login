window.fbAsyncInit = () => {
	FB.init({
		appId   : '1835388826475663',
		cookie  : true,
		xfbml   : true,
		version : 'v2.8'
	});
};

function loginHandler(response) {
	if(response.status === 'connected') {
		state.status = "Conectado";
		FB.api('/me?fields=email,name', user => {
			state.user = user;
			state.doRender();
		});
	} else if (response.status === 'not_authorized'){
		state.user = null;
		state.status = "Aplicación no autorizada";
		state.doRender();
	}
}

function doLogin() {
	FB.login(loginHandler, {scope: 'email'});
}