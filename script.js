var button = document.getElementById('dlmodetoggle');
var buttonBLOG = document.getElementById('dlmodetoggleBLOG');
var stylesheet = document.getElementById('STYLE');
var blogstylesheet = document.getElementById('BLOGSTYLE');
var BODY2 = document.querySelector('body');

function toggleDLmode() {
	if(stylesheet.getAttribute('href') == 'styles/lightmode.css') {
		stylesheet.setAttribute('href', 'styles/darkmode.css');
	}
	else {
		stylesheet.setAttribute('href', 'styles/lightmode.css');
	}
}
 /*
function toggleDLmodeBLOG() {
	if(blogstylesheet.getAttribute('href') == 'styles/lightmodeblog.css') {
		blogstylesheet.setAttribute('href', 'styles/darkmodeblog.css');
	}
	else {
		blogstylesheet.setAttribute('href', 'styles/lightmodeblog.css');
	}
}


buttonBLOG.onclick = function() {
	toggleDLmodeBLOG();
}
*/

button.onclick = function() {
	console.log('button clicked');
	toggleDLmode();
}

function nav_a_animate() {
	document.querySelector('nav\ a').classList.add('nav_a_animation');
}

document.querySelector('nav\ a').onhover = function() {
	nav_a_animate();
}