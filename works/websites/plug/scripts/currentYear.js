window.onload = init;

function init() {
	// Get year
	var yearHandler = document.getElementById('year');
	var currentYear = new Date().getFullYear();
	yearHandler.innerHTML = "&copy; " + currentYear;
}