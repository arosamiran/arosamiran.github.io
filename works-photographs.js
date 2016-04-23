var list = document.getElementById('main-holder').getElementsByTagName('li');
var listLength = list.length;

function init() {
}

function changeWidth(hovered) {
	ulHandler = document.getElementById('photos');

	newItem = document.createElement("li");
	if (hovered == "Lines") {
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: -130px; bottom: 430px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img1-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Lines</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Sunset"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 70px; bottom: 430px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img2-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Sunset</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Merida"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 300px; bottom: 430px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img3-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Merida</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Christmas Lights"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: -130px; bottom: 300px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img4-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Christmas Lights</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "The Philippine Flag"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 70px; bottom: 300px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img5-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">The Philippine Flag</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Fountains"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 300px; bottom: 300px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img6-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Fountain</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Balete Tree"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: -130px; bottom: 150px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img7-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Balete Tree</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Fireworks"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 70px; bottom: 150px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img8-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Fireworks</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else if(hovered == "Silhouette"){
		if (listLength > 9) {
			left();
		} else {
			newItem.innerHTML = '<div style="position: absolute; left: 300px; bottom: 150px; width: 512px; height: 368px; background-color: #555; border-radius: 2px; padding: 10px;"><img src="img9-wide.jpg" style="width: 512px"><figcaption style="text-align: center; color: #aaa;">Silhouette</figcaption></div>';
			ulHandler.appendChild(newItem);
			newItem.setAttribute("id", "new");
		}
	} else{
		left();
	}


}

function left() {
	var newItemHandler = document.getElementById('new');
	ulHandler.removeChild(newItemHandler);
}
