var b1l = document.getElementById('blog1link');
var b2l = document.getElementById('blog2link');
var buttonBLOG = document.getElementById('dlmodetoggleBLOG');

b1lll = function() {
    b1l.classList.add('hovered');
    console.log('hovered');
}

b2lll = function() {
    b2l.classList.add('hovered');
    console.log('hovered');
}

b1l.addEventListener('mouseover', b1lll);
b2l.addEventListener('mouseover', b2lll);

function toggleDLmodeBLOG() {
	if(blogstylesheet.getAttribute('href') == '/styles/lightmodeblog.css') {
		blogstylesheet.setAttribute('href', '/styles/darkmodeblog.css');
	}
	else {
		blogstylesheet.setAttribute('href', '/styles/lightmodeblog.css');
	}
}

buttonBLOG.onclick = function() {
	toggleDLmodeBLOG();
}