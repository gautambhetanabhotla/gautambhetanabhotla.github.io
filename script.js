var button = document.getElementById('dlmodetoggle');
var stylesheet = document.getElementById('STYLE');

function reanimate() {
	if(document.getElementsByTagName('body').style.animation == "transitionin") {
		document.getElementsByTagName('body').style.animation = "transitionin2";
	}
	else {
		document.getElementsByTagName('body').style.animation = "transitionin";
	}
}

function toggleDLmode() {
	if(stylesheet.getAttribute('href') == 'lightmode.css') {
		stylesheet.setAttribute('href', 'darkmode.css');
		reanimate();
	}
	else {
		stylesheet.setAttribute('href', 'lightmode.css');
		reanimate();
	}
}

button.onclick = function() {
	toggleDLmode();
}
