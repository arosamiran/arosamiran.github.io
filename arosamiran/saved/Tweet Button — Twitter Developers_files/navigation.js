$(document).on('ready', function(){

	var drawer = document.getElementsByClassName('nav-drawer-dtc');
	
	for (var d = 0; d < drawer.length; d++) {

		(function (index) {
			// var headerLeft = drawer[d].getElementsByClassName('header-left')[0];
			// headerLeft.addEventListener('click', function (e) {
			// 	e.preventDefault();
			// 	var parents = getParents(this, '.nav-drawer');
			// 	if (parents[0].classList.contains("no-interaction")) {
			// 		return;
			// 	} else {
			// 		toggleClass(drawer[index], "active");
			// 		toggleClass(navIcon, "active");
			// 	}
			// 	return false;
			// });

			var navIcon = drawer[d].getElementsByClassName('nav-icon')[0];

			if (typeof navIcon !== "undefined") {
				navIcon.addEventListener('click', function (e) {
					e.preventDefault();
					toggleClass(drawer[index], "active");
					toggleClass(navIcon, "active");
					return false;
				});
			}

			//closes the drawer
			document.addEventListener('click', function (event) {
				if (typeof drawer[index] !== 'undefined') {
					if (event.target !== drawer[index] && !drawer[index].contains(event.target)) {
						drawer[index].classList.remove("active");
						navIcon.classList.remove("active");
					}
				}
			});
		})(d);
	}

	function toggleClass(el, className) {
		if (el.classList) {
			el.classList.toggle(className);
		} else {
			var classes = el.className.split(' ');
			var existingIndex = classes.indexOf(className);

			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else {
				classes.push(className);
			}

			el.className = classes.join(' ');
		}
	}

	var getParents = function (elem, selector) {
		var parents = [];
		if (selector) {
			var firstChar = selector.charAt(0);
		}

		// Get matches
		for (; elem && elem !== document; elem = elem.parentNode) {
			if (selector) {

				if (firstChar === '.') {
					if (elem.classList.contains(selector.substr(1))) {
						parents.push(elem);
					}
				}

				if (firstChar === '#') {
					if (elem.id === selector.substr(1)) {
						parents.push(elem);
					}
				}

				if (firstChar === '[') {
					if (elem.hasAttribute(selector.substr(1, selector.length - 1))) {
						parents.push(elem);
					}
				}

				if (elem.tagName.toLowerCase() === selector) {
					parents.push(elem);
				}
			} else {
				parents.push(elem);
			}
		}

		// Return parents if any exist
		if (parents.length === 0) {
			return null;
		} else {
			return parents;
		}
	};



});