// function execute() {
// 	location.reload();
// 	location.replace("https://www.google.com.eg/");
// 	location.assign("https://www.google.com.eg/");
// 	console.log(location.pathname);
// 	location.pathname = "/about.html";
// 	console.log(location.protocol);
// 	get
// 	console.log(location.href);
// 	location.href = "https://www.google.com.eg/";
// }
// function execute() {
// 	// length
// 	// forward
// 	// back
// 	// go
// 	console.log(history);

// }

// allow
// js Engine

// function successCB(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// 	// set api map
// }
// // deny
// function errorCB() {
// 	console.log("user denied the access");
// }

// navigator.geolocation.getCurrentPosition(successCB, errorCB);

/** Ajax  */
var tbody = document.getElementsByTagName("tbody")[0];
function getAllUsers() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var users = JSON.parse(xhr.response);
				// create Element
				tbody.innerHTML = `
                <tr>
                    <td>${users[0].id}</td>
                    <td>${users[0].name}</td>
                    <td>${users[0].email}</td>
                    <td>
                        <button>view details</button>
                        <button>delete user</button>
                    </td>
                </tr>
                
                `;
			}
		}
	};

	xhr.send("");
}
/** Cookies */
//sesstion cookie by default
// document.cookie = "email=ali.com";
// document.cookie = "password=123";
// document.cookie = "password=456";

// create date
// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + 3);

// // document.cookie = "username = ahmed;expires=" + expireDate;
// // sunday == 0
// // monday == 1

// //
// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }
// //

// function getAllCookies() {
// 	return document.cookie;
// }

// function getCooki(key) {
// 	// logic here
// }

// function deleteCookie(key) {
// 	var date = new Date();
// 	date.setDate(date.getDate() - 1);
// 	document.cookie = key + "=pet" + ";expires=" + date;
// }

// saveCookie("colors", JSON.stringify(["red", "green", "blue"]));
// saveCookie("user", JSON.stringify({ id: 1, name: "Ali", age: 20 }));

// JSON.Parse
// deleteCookie("email");
// deleteCookie("pass");

// saveCookie("email", "ahmed@email.com");
// saveCookie("pass", "1233");
