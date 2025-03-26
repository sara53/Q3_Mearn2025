// var fname = "ali";

// // add window object
// function getName() {
// 	console.log("Hello mearn");
// }

// var person = {
// 	fname: "ahmed",

// 	display: function () {
// 		console.log("display");
// 	},
// };

// getName();

// window.getName(); // window

// person.display(); // person
/**==================V2====================== */
//var fname = "ali";

// function getName() {
// 	console.log("Hello get Name");
// 	// console.log(this.fname);
// }

// var person = {
// 	fname: "mona",
// 	display: function () {
// 		getName();
// 	},
// };

// person.display();

// var person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	display: function (text, emoji) {
// 		console.log(`${text} ${this.fname}
//             ${this.lname} ${emoji}`);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "alaa",
// };

// person1.display.apply(person1, arr);
// person1.display.apply(person2);

// person1.display('ahmed',':)');

// person1.display.call();

// person1.display.call(person2);
/**==================V3====================== */
// var person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	display: function (text, emoji) {
// 		console.log(`${text} ${this.fname} ${emoji}  ${this.lname} `);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "alaa",
// };

// var result = person1.display.bind(person2);

// result("ITI", ":)");
/**========================V3================= */
// var fname = "ali";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "ahmed",

// 	display: function () {
// 		getName();
// 	},
// };

// // person.display(); // person
// person.display.call(person); //

/**=====================V4================= */
// var fname = "ahmed";
// var person = {
// 	fname: "Ali",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };

// person.display();
/**=====================V5================= */

// var fname = "ahmed";
// var person = {
// 	fname: "Ali",
// 	display: function () {
// 		var that = this;
// 		setTimeout(
// 			function (x) {
// 				console.log(x.fname);
// 			},
// 			2000,
// 			this
// 		);
// 	},
// };

// person.display();
/**===============================v5================================ */
// var fname = "ahmed";
// var person = {
// 	fname: "Ali",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();

/**=============================== Closure =========================== */
// function test() {
// 	console.log(trackName);
// }

// // outer function
// function great() {
// 	var trackName = "mearn track";
// 	var test = "pet";
// 	// inner function
// 	return function () {
// 		console.log(`hello ${trackName} at ITI`);
// 	};
// }

// var result = great();

// test();
/**=============================== closure  =========================== */
// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}

// 	return arr;
// }

// let result = getArr();

result[0]();
result[1]();
result[2]();
// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 300,
// 	category: "school",
// };
// var product2 = {
// 	name: "Pen",
// };
// var product3 = {
// 	price: 100,
// };

// document.writeln(`<h2>${product2.name}</h2>`);
// document.writeln(`<h2>${product1.price}</h2>`);
// document.writeln(`<h2>${product1.name}</h2>`);
// document.writeln(`<h2>${product2.price}</h2>`);

// factory
// function product(_id, _name, _price) {
// 	return {
// 		id: _id || "",
// 		name: _name || " ",
// 		price: _price || "",
// 		discount: function (rate) {
// 			return this.price * rate;
// 		},
// 	};
// }

// var p1 = product(1, "Book", 100);
// var p2 = product(2, "Pen", 300);

// console.log(p1);
// console.log(p2);
