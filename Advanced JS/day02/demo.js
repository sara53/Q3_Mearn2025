// function Person(fname) {
// 	var age = 20;
// 	this.fname = fname;
// 	Object.defineProperty(this, "ageHandler", {
// 		get: function () {
// 			return age;
// 		},
// 		set: function (value) {
// 			age = value;
// 		},
// 	});
// }

// var p1 = new Person("ahmed");

// p1.ageHandler = 1234; // set

// console.log(p1.ageHandler); //get

// var product = {
// 	name: "book",
// 	category: "School",
// };

// Object.defineProperty(product, "price", {
// 	value: 200,
// 	writable: true, // override
// 	configurable: true,
// 	enumerable: true,
// });

// //delete product.price;
// // product.price = 400;

// console.log(product);

// for (var key in product) {
// 	console.log(key);
// }
// delete product.price;

// product.price = 400;

// console.log(product);
// Object.create() // static Method
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// Person.create = function () {
// 	console.log("hello static Method");
// };

// Person.create(); //static Method
