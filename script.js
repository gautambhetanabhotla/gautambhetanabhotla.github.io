var button = document.getElementById('dlmodetoggle');
var stylesheet = document.getElementById('STYLE');
var BODY2 = document.querySelector('body');

function reanimate() {
	if(BODY2.style.animationName == 'transitionin') {
		document.getElementById('scriptchecker').innerHTML = 'script worked';
		BODY2.style.animationName = 'transitionin2';
	}
	else {
		document.getElementById('scriptchecker').innerHTML = 'script worked';
		BODY2.style.animationName = 'transitionin';
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

button.onclick = function () {
	toggleDLmode();
}
