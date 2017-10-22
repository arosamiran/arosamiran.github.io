window.onload = initPage;
var position = [],
	counter = 0;

function initPage() {
	let intro = document.getElementById("intro");
	let bg = document.querySelector(".bg");
	bg.style.height = intro.clientHeight + 'px';
	intro.style.background = "rgba(247,194,130,0.5) url(img/coffee-beans-d.png) repeat-x left bottom";
	intro.style.filter = "blur(3px)";
	console.log(intro);
}

function init() {

	menuHandler = document.getElementById('menu');
	menuHandler.style.position = "fixed";
	menuHandler.style.top = "5px";
	menuHandler.style.marginLeft = "5px";
	// console.log(menuHandler);

	// menuHandler.className += " menu-right";
	// menuHandler.className += "menu-right";
	iHolder = document.getElementById('intro');
	wHolder = document.getElementById('works');
	cHolder = document.getElementById('contact');
	lHolder = document.getElementById('links');
	// console.log(wHolder);


	var introHeight = iHolder.clientHeight;
	var worksHeight = wHolder.clientHeight;
	var contactHeight = cHolder.clientHeight;
	var linksHeight = lHolder.clientHeight;
	// wrapper Array
	var wrapper = [iHolder, wHolder, cHolder, lHolder];
	// console.log(introHeight);

	// device's height
	var screenHeight = screen.height;

	// device's width
	var screenWidth = screen.width;

	var dividerHandler = [document.getElementById('iw'), document.getElementById('wa'), document.getElementById('cl')];


	if (screenHeight <= 700) {
		// screenHeight = screenWidth;
		mobile(wrapper, screenHeight, screenWidth, introHeight, worksHeight, linksHeight);
	} else {
		desktop(wrapper, screenHeight, screenWidth);
		// menuHandler.style.display = "none";

		for (var i = 0; i < dividerHandler.length; i++) {
			dividerHandler[i].style.display = "none";
		}
	}
}

function desktop(w, sh, sw) {
	for (var i = 0; i < w.length; i++) {
		w[i].style.height = sh + "px";
		w[i].style.width = sw + "px";
	}
}

function mobile(w, sh, sw, ih, wh, lh) {
	// console.log(sh.valueOf())
	// var introHandler = document.getElementById("intro");
	// introHandler.style.backgroundImage = "url(../images/coffee-beans.png)";
	// console.log(introHandler);

	// console.log(sh, sw);

	for (var i = 0; i <= w.length - 1; i++) {
		if (sh <= 750) {
			switch (i) {
				case 0:
					position.push(0 + "px");
					w[0].style.height = ih + "px";
					break;
				case 1:
					position.push(ih + "px");
					w[1].style.height = wh + "px";
					break;
				case 2:
					position.push(wh + "px");
					w[2].style.height = sh + "px";
					break;
				case 4:
					position.push(sh + "px");
					w[4].style.height = sh + "px";
					break;
				default:
					window.alert("Height definition is incorrect");
					break;
			}
		} else {
			switch (i) {
				case 0:
					position.push(0 + "px");
					w[0].style.height = ih + "px";
					break;
				case 1:
					position.push(ih + "px");
					w[1].style.height = sh + "px";
					break;
				case 2:
					position.push(wh + "px");
					w[2].style.height = sh + "px";
					break;
				case 3:
					position.push(sh + "px");
					w[3].style.height = sh + "px";
					break;
				default:
					window.alert("Height definition is incorrect");
					break;
			}
		}
	}
	// console.log(document.getElementById('contact').clientHeight);
	// console.log("Positions: " + position.valueOf());
	// var newW = w + "px";
	setPosition(w, sh, position);
}

function setPosition(w, sh, pos) {
	// console.log(pos.valueOf());
	// var introHeight = w[0].valueOf().clientHeight + "px";
	// console.log(introHeight);
	for (var i = 0; i < w.length; i++) {
		w[i].style.top = pos[i].valueOf() + "px";

		// console.log(w[i].valueOf());
	}
}

function menuClick(x) {
	if (counter == 0) {
		openNav(x);
		// Disable all links
		// var linksHandler = document.getElementsByClassName('link');
		// linksHandler.style.
	} else {
		closeNav();
	}
	// console.log();
}

/* Set the width of the side navigation to 250px */
function openNav(x) {
	outHandler = document.getElementById('outsidenav');
	var screenWidth = screen.width;
	counter++;
	document.getElementById("mySidenav").style.width = "250px";
	x.classList.toggle("change");
	outHandler.style.display = "block";
	outHandler.style.width = (screenWidth - 250) + "px";
	// x.className += " moved";
	// var barHandler = document.getElementsByClassName('bar2');
	// console.log(document.getElementById('counter'));
	// if (evt.clientX < 0) {
	// 	x.className += "";
	// } else {
	// 	x.className += " change";
	// }
	// x.classList.toggle("moved");
}

/* Set the width of the side navigation to 0 */
function closeNav(num) {
	menuHandler.className -= "container change";
	outHandler.style.display = "none";
	outHandler.style.width = "0px";
	i = num;
	counter--;
	menuHandler.className = "container";
	document.getElementById("mySidenav").style.width = "0px";
	// console.log(position[i].valueOf());
	// scroll(i, num);
}