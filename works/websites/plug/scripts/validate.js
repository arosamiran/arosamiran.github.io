window.onload = init;

function init() {
	var status = document.getElementById('success');
	var formHandler = document.getElementById('form');
	var headingHandler = document.getElementById('heading');
	if (formHandler) {
		headingHandler.innerHTML = "Sign in";
	} else if (!formHandler && status) {
		headingHandler.innerHTML = "Sign in successful"
	} else {
		headingHandler.innerHTML = "Error signing in";
	}
}