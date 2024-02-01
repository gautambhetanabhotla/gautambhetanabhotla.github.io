var buttonBLOG = document.getElementById('dlmodetoggleBLOG');
var blogstylesheet = document.getElementById('BLOGSTYLE');

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