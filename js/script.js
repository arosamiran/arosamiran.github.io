window.onload = setHeight;

function setHeight() {
	let articles = document.getElementsByTagName('article');
	for (var i = 0; i < articles.length; i++) {
		let sections = document.getElementsByTagName('section');
		if (screen.height > 720) {
			sections[i].style.height = screen.height + "px";
			sections[1].style.height = articles[1].clientHeight + 80 + "px";
		}else{
			sections[0].style.height = articles[0].clientHeight + "px";
			sections[1].style.height = articles[1].clientHeight + 40 + "px";
			sections[i].style.height = screen.height + "px";
		}
		console.log(sections[i]);
		
	}
}

function thanks() {
	document.getElementById("followBtn").classList = "hide";
	document.getElementById("thanks").classList = "show";
}