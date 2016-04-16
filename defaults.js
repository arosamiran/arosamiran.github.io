window.onload = init;

var num = Math.floor(Math.random() * 3);
var setLink = document.getElementById('change');
	
	function init() {
		
/*		if (num === 0) {
			setLink.setAttribute("href", "themes/dark.css");
		}
		else if (num === 1) {
			setLink.setAttribute("href", "themes/light.css");
		}
		else{
			setLink.setAttribute("href", "themes/colorful.css");
		}
		setTimeout(hide, 1000);*/
		var footerHandler = document.getElementById('year');
		var handler = new Date();
		var theYear = handler.getFullYear();
		footerHandler.innerHTML = "All rights reserved <br> &copy; " + theYear;

	}	

	function hide() {
		var target = document.getElementById('next');
		target.setAttribute("class", "hide");
		setTimeout(show, 500);
	}

	function show() {
		var target = document.getElementById('next');
		target.setAttribute("class", "show");
		setTimeout(hide, 1000);
	}