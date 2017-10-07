window.onload = init;


function init() {
	var infoLink = document.getElementsByTagName('a');
	// var infoContent = document.getElementById('info');
	var infoContent = document.getElementById('info');
	secondLink = infoLink[1];
	// console.log(secondLink);
	secondLink.className += " current";
	// var feedbackHandler = document.getElementById('feedback');
	// feedbackHandler.style.display = "block";
	infoContent.style.display = "block";
	// var infoWrapperHandler = document.getElementById('info-wrapper');
	// var quickInfoHandler = document.getElementsByClassName('quick-info');
	return secondLink;
}


function openTab(evt, linkName) {
	var currentHandler = document.getElementById(linkName);
	var quickInfoHandler = document.getElementById('quick-info');
	var insideHandler = document.getElementById('inside');

	if (linkName == "calendar") {
		write(linkName);
		// holiday();
	}
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "current"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" current", "");
	}

	// Show the current tab, and add a"current" class to the link that opened the tab
	document.getElementById(linkName).style.display = "block";
	evt.currentTarget.className += " current";

	// Change "inside's" height
	// console.log(quickInfoHandler.clientHeight);
	// console.log(currentHandler.clientHeight);
	if (quickInfoHandler.clientHeight <  currentHandler.clientHeight) {
		var newCurrentHeight = currentHandler.clientHeight + 20;
		insideHandler.style.height = newCurrentHeight + "px";
	}
}

function write(linkName) {
	var yearHandler = document.getElementById('year');
	var monthHandler = document.getElementById('month');
	var currentYear = new Date().getFullYear();
	var currentMonth = new Date().getMonth();
	var currentMonthString;
	// console.log(currentYear);
	yearHandler.innerHTML = currentYear;
	switch(currentMonth){
		case 0:
			currentMonthString = "January";
			break;
		case 1:
			currentMonthString = "February";
			break;
		case 2:
			currentMonthString = "March";
			break;
		case 3:
			currentMonthString = "April";
			break;
		case 4:
			currentMonthString = "May";
			break;
		case 5:
			currentMonthString = "June";
			break;
		case 6:
			currentMonthString = "July";
			break;
		case 7:
			currentMonthString = "August";
			break;
		case 8:
			currentMonthString = "September";
			break;
		case 9:
			currentMonthString = "October";
			break;
		case 10:
			currentMonthString = "November";
			break;
		case 11:
			currentMonthString = "December";
			break;
		default:
			"undefined";
			break;
	}
	monthHandler.innerHTML = currentMonthString;
	var todayHandler = document.getElementById(today());
	todayHandler.className += " today";
}

function today(date) {
	var thisDay = new Date().getDate();
	return thisDay;
}

// function holiday() {
// 	var holidays = [9, 15];
// 	var holidayHandler = document.getElementById(eachHoliday(holidays));
// 	return holidayHandler;
// }

// function eachHoliday(holidays) {
// 	for (var i = 0; i < holidays.length; i++) {
// 		if (holidayHandler.className == "") {
// 			holidayHandler.className = " holiday tooltip";
// 		} else {
// 			holidayHandler.className = "holiday tooltip";
// 		}
// 	}
// }