var buttonBLOG = document.getElementById('dlmodetoggleBLOG');
var blogstylesheet = document.getElementById('BLOGSTYLE');
var likebutton = document.getElementById('likebutton');
var liked = false;

function like() {
	if(!liked) {
		likebutton.innerHTML = "👍 7";
		liked = true;
	}
	else {
		likebutton.innerHTML = "👍 6";
		liked = false;
	}
}

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

likebutton.onclick = function() {
	like();
}