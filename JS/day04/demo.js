var p = document.querySelector(".info");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");

/**
 * == getAttribute
 * == setAttribute
 * == removeAttribute
 * == hasAttribute
 * == toggleAttribute
 */
function execute() {
	if (link1.hasAttribute("class")) {
		link1.removeAttribute("class");
	} else {
		link1.setAttribute("class", "custom-link");
	}
	// link1.removeAttribute("class");
	// link1.setAttribute("class", "custom-link");
	// link1.setAttribute("hred", "index.html");
	// console.log(link1.getAttribute("class"));
	// console.log(link1.getAttribute("id"));
	// console.log(link1.getAttribute("href"));
}

var img = document.images[0];
function next() {
	img.setAttribute("src", "2.jpg");
}
