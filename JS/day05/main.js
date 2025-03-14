/** v1 */
// function addNewElement() {
// 	var element = document.createElement("p");

// 	element.innerText = "Hello mearn track";

// 	element.setAttribute("id", "info");
// 	element.setAttribute("class", "jsClass");
// 	console.log(element);

// 	parent.appendChild(element);
// }
// var parent = document.getElementById("output");
// var header = document.getElementById("header");

// var element = document.createElement("p"); // Node
// var span = document.createElement("span"); // Node

// span.innerHTML = "Hello span";
// var text = document.createTextNode("hello mearn track");

// element.append(text);

// console.log(element);

// function addNewElement() {
// 	header.remove();
// 	insertAdjusentElement(search);
// 	header.before(element);
// 	header.after(element);
// 	document.body.append(element);
// 	parent.append(element);
// }

/**
 * == (appendChild)
 * -- Append child to parent Elment
 * -- params type accept only node type
 * -- accept one element to append in parent element
 * -- return child
 *------------------------------------
  == (append)
  --- append children to parent Element
  --- append prams accept string | Node
    ---- append return undefined
 */
// js Engine == changeContent(/**event Object */)
// btn.onclick = changeContent;

// btn.onclick = function () {
// 	changeDynamicStyle("red");
// };
// js Engine
// btn.onclick = function () {
// 	changeContent();
// 	changeStyle();
// };

// btn.onclick = changeStyle; // override

// function sayHello(x) {
// 	console.log(x.target);
// 	console.log("Hello mearn track");
// }

// sayHello({ target: "ahmed" });
var p = document.getElementById("info");
var btn = document.getElementById("btn");

function changeContent(e) {
	console.log(e.target);
	p.innerHTML = "<h1>Hello mearn track</h1>";
}

function changeStyle() {
	p.style.background = "green";
}
function changeDynamicStyle(color) {
	p.style.background = color;
}

// btn.addEventListener("click", changeContent);
// // btn.addEventListener("mouseenter", changeStyle);

// btn.addEventListener("click", function () {
// 	console.log("Btn Click");
// });

// btn.removeEventListener("click", function () {
// 	console.log("Btn Click");
// });

/**----------------------------------- */
// var input = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");
// var output = document.getElementById("output");
// var btn = document.getElementById("btn");

// input.addEventListener("focus", function (e) {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("input", function (e) {
// 	if (input.value.length >= 3) {
// 		input.style.border = "2px solid green";
// 		output.innerHTML = input.value;
// 		errorMsg.style.display = "none";
// 	} else {
// 		input.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });
// input.addEventListener("blur", function (e) {
// 	input.style.border = "2px solid orange";
// });

// var login = function (e) {
// 	// connect with apis -- show Errors
// 	e.preventDefault();
// 	console.log("login");
// 	console.log(input.value);
// };
// function first(e) {
// 	//e.stopPropagation();

// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("second");
// }
// function third(e) {
// 	console.log("third");
// }
var myWind;
// function openNewWindow() {
// 	myWind = open("about.html", "", "width=200,height=200");
// 	window.focus();
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }
