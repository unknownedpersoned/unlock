var defaultLink = "https://g.deev.is/eaglercraft/";

var textbox = document.getElementById("textbox");
var frame = document.getElementById("frame");
var popular = document.getElementById("popular");
var popularButton = document.getElementById("popular-button");
var popularImages = document.getElementsByClassName("popular-img");

popularButton.style.transition = "all 1s";

textbox.addEventListener('keydown', function(e) {
	if (e.code == "Space") {
		e.preventDefault();
		frame.setAttribute("src", defaultLink);
		setTimeout(function() {
			frame.style.opacity = "1";
		}, 2000);
		popularButton.style.opacity = "0"; 
		transition();
	}

	if (e.code == "Enter") {
		e.preventDefault();
		if (textbox.value == "") {
			textbox.setAttribute("placeholder", "You have to enter an actual link. If you don't have one, you can click on one of the games below.");
			transition(true);
			return;
		}

		if (textbox.value.startsWith("http://")) {
			textbox.value = "";
			textbox.setAttribute("placeholder", "Uh oh! Modern browsers don't support http links in iframes. Try a https link.\nOr, swap out http for https in the link you just tried to enter.");
			transition(true);
			return;
		}

		if (!textbox.value.startsWith("https://"))
			textbox.value = "https://" + textbox.value;
		frame.setAttribute("src", textbox.value);
		popularButton.style.opacity = "0"; 
		transition();
	}
}, false);

function popularButtonClick(a) {
	switch (a) {
		case 0: 
			popularButton.style.opacity = "0"; 
			popular.style.opacity = "1"; 
			for (var i = 0; i < popularImages.length; i++) {
 				popularImages[i].style.transition = "all 0.7s";
				popularImages[i].style.opacity = "1";
			}
			return;
		case 1: defaultLink = "https://slopegame.online"; break;
		case 2: defaultLink = "https://augustberchelmann.com/mario/"; break;
		case 3: defaultLink = "https://classic.minecraft.net"; break;
	}
	textbox.value = defaultLink;
	frame.setAttribute("src", defaultLink);
	setTimeout(function() {
		frame.style.opacity = "1";
	}, 1000);
	transition();
}

function transition(error) {
	if (error) {
		textbox.style.backgroundColor = "Maroon";
		setTimeout(function() {
			textbox.style.backgroundColor = "White";
		}, 300);
		return;
	}
	textbox.style.opacity = "0";
	textbox.style.visibility = "hidden";
	popular.style.filter = "blur(3px)"
	popular.style.opacity = "0";
	textbox.style.visibility = "hidden";
	frame.style.filter = "none";
}
