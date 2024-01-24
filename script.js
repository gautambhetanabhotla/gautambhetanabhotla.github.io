var button = document.getElementById('dlmodetoggle');
var stylesheet = document.getElementById('STYLE');

function toggleDLmode() {
	if(stylesheet.getAttribute('href') == 'lightmode.css') {
		stylesheet.setAttribute('href', 'darkmode.css');
	}
	else {
		stylesheet.setAttribute('href', 'lightmode.css');
	}
}

button.onclick = function() {
	toggleDLmode();
}
