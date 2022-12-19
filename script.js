var defaultLink = "https://g.deev.is/eaglercraft/";

var textbox = document.getElementById("textbox");
var frame = document.getElementById("frame");
var popular = document.getElementById("popular");
var popularButton = document.getElementById("popular-button");
var popularImages = document.getElementsByClassName("popular-img");
const popularLinks = [
  "https://slopegame.online",
  "https://augustberchelmann.com/mario/",
  "https://garticphone.com",
  "https://shellshock.io",
];

popularButton.style.transition = "all 1s";

textbox.addEventListener('keydown', function(e) {
	if (e.code == "Space") {
		e.preventDefault();
		frame.setAttribute("src", defaultLink);
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
  if (a-1===-1) {
		popularButton.style.visibility = "hidden";
		popularButton.style.opacity = "0";
		popular.style.opacity = "1"; 
		for (var i = 0; i < popularImages.length; i++) {
      		popularImages[i].style.visibility = "visible";
 			popularImages[i].style.transition = "all 0.7s";
      		popularImages[i].style.opacity = "1";
		}
		return;
  }
	defaultLink = popularLinks[a-1];
	textbox.value = defaultLink;
	frame.setAttribute("src", defaultLink);
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
	setTimeout(function() {
		frame.style.opacity = "1";
		frame.style.filter = "none";
	}, 1500);
}
