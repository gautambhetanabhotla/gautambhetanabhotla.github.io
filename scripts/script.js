var button = document.getElementById('dlmodetoggle');
var stylesheet = document.getElementById('STYLE');
var BODY2 = document.querySelector('body');

function toggleDLmode() {
	if(stylesheet.getAttribute('href') == '/styles/lightmode.css') {
		stylesheet.setAttribute('href', '/styles/darkmode.css');
	}
	else {
		stylesheet.setAttribute('href', '/styles/lightmode.css');
	}
}

button.onclick = function() {
	toggleDLmode();
}

function nav_a_animate() {
	document.querySelector('nav\ a').classList.add('nav_a_animation');
}

document.querySelector('nav\ a').onhover = function() {
	nav_a_animate();
}