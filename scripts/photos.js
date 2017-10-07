var current;

window.onload = init;

function init() {
	// Get the modal
	modal = document.getElementById('myModal');	
	// console.log(modal);
	modalNav = document.getElementsByClassName('btn');
	modalImg = document.getElementById('modalImg');

}



function openModal(src, alt) {
	// Check screen width
	// var sw = screen.width;

	var photosPane = document.getElementById('photosPane');
	var count = document.getElementById('count');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	// Store the image src in an array
	var images = [];
	var imgHandler = document.getElementsByClassName('thumbnail');
	for (i = 0; i < imgHandler.length; i++) {
		images.push(imgHandler[i].src.substr(27, 20));
		// console.log(images.valueOf());
	}
	number(alt);
	// console.log(images);
	var captionText = document.getElementById("caption");
	photosPane.onclick = function(){
		modal.style.display = "flex";
		modal.style.padding = "0px";
		modal.style.alignItems = "stretch";
		// modal.style.margin = "auto";
		modalImg.style.width = "100%";
		modalImg.src = src.substr(27, 20);
		// console.log(alt);
		modalNav.style.display = "block";
		captionText.innerHTML = alt;
		// modal.style.padding ="20px";
		count.innerHTML = current;
		setTimeout(hideModalBtn, 3000);
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
}

function number(alt) {
	switch (alt){
		case "Lines":
			current = 1;
			break;
		case "Sunset":
			current = 2;
			break;
		case "Merida":
			current = 3;
			break;
		case "Christmas Lights":
			current = 4;
			break;
		case "The Philippine Flag":
			current = 5;
			break;
		case "Fountains":
			current = 6;
			break;
		case "Fireworks":
			current = 7;
			break;
		case "Silhouette":
			current = 8;
			break;
	}
	return current;
}

function hideModalBtn() {
	// console.log(imgHeight);
	// modalBtn.className += "hide";
	for (var i = 0; i < modalNav.length; i++) {
		modalNav[i].style.display = "none";
	}
	// console.log(document.getElementsByClassName('left'));
}

function modalBtn() {
	for (var i = 0; i < modalNav.length; i++) {
		modalNav[i].style.display = "inline-block";
		modalNav[i].style.height = modalImg.clientHeight + "px";
	}
	setTimeout(hideModalBtn, 3000);
}