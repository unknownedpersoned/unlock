var textbox = document.getElementById("textbox");
var frame = document.getElementById("frame");
frame.style.filter = "blur(3px)";

textbox.addEventListener('keydown', function(e) {
 	if (e.code == "Space") {
		e.preventDefault();
		frame.setAttribute("src", "https://g.deev.is/eaglercraft/");
		transition(); 
 	}
	
	if (e.code == "Enter") {
		e.preventDefault();
		if (!textbox.value == "") {
			if (!textbox.value.startsWith("https://")) textbox.value = "https://" + textbox.value;
			frame.setAttribute("src", textbox.value);
			transition();
		}
	}
}, false);

function transition() {
	textbox.style.opacity = "0";
	textbox.style.visibility = "hidden";
	setTimeout(function() {
		frame.style.opacity = "1";
		frame.style.filter = "none";
	}, 800);
}
