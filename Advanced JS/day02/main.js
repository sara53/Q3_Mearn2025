// function constructor
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }
// // any fun ctor -- has prototype object

// console.log(Person.prototype);
// var p1 = new Person("ahmed", 20, "alex");
// var p2 = new Person("mona", 24, "banha");

// console.log(p1.test()); // Error
// console.log(p1.toString()); // string
// console.log(p2.toString()); // string
// location -- shared -- inherit
// location
// console.log(p1);

// console.log(p2);
/**
 * == Create new Object
 * == This == {}
 * == Return This
 *
 */
/**=========================== */
// fun ctor -- prototype -- {}

// var product = {
// 	name: "book",
// 	price: 300,
// 	discount: function () {
// 		console.log("discount");
// 	},
// };
// var user = {
// 	name: "ali",
// };

// console.log(product.toString());
// console.log(product.__proto__.toString());

// console.log(product.name);

// product.discount();
// console.log(product.toString); //

// console.log(product.name); // book
// console.log(product.discount);

// console.log(product.test);
// console.log(product.toString);
// new Object()
// var user = {};

// console.log(Object.prototype);

// console.log(product.prototype);

// console.log(Object.prototype == product.__proto__);
// console.log(Object.prototype == user.__proto__);
// console.log(product.__proto__ == user.__proto__);

// //
// console.log(Object.prototype == product.prototype);

// let person = {
// 	fname: "ali",
// 	address: {
// 		city: "alex",
// 	},
// };

// console.log(person.address.city);
/**================================= */
// Object.prototype.trackName = "mearn2025";

// var myObject = new Object();

// console.log(myObject.trackName);
/**========================================== */
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// var p1 = new Person("ali", 20, "alex");
// var p2 = new Person();

// console.log(p1.__proto__.__proto__.__proto__);
// console.log(Object.prototype.__proto__);
// console.log(Person.prototype.__proto__.__proto__); //

// console.log(Person.prototype.__proto__ == Object.prototype);

// console.log(Object.prototype == p2.__proto__.__proto__);
/**========================================== */
// // class -- Ctor -- props -- methods
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.trackName = "Mearn2025";

// Person.prototype.display = function () {
// 	console.log(`${this.fname} ${this.age}`);
// };

// var p1 = new Person("ali", 20, "alex");
// var p2 = new Person("mona", 24);

// console.log(p1);
// p1.display();
// p2.display();

/**============================================== */
// var arr = []; // new Array()

// arr.push("mona");

// console.log(arr);
// console.log(Array.prototype);

// override
// Array.prototype.push = function () {
// 	console.log("hello ya sara");
// };

// arr.push("alaa");

// console.log( arr );
/**================================= */
// parent -- super
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.fname} ${this.age}`);
// };

// // subclass - child
// function User(fname, age, address, password) {
// 	// props
// 	Person.call(this, fname, age, address);
// 	this.password = password;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.generatePassword = function () {
// 	return `${this.password.toUpperCase()} %$#$ ${this.address}`;
// };

// var user1 = new User("ali", 20, "alex", "ali");
// var user2 = new User("mona", 30, "banha", "MOna");

// console.log(user1);
// // user1.display();
// // console.log(user1.generatePassword());
// // console.log(user1);
// // console.log(user1.generatePassword());
// // console.log(user2.generatePassword());
// // user1.display();
// // user2.display();

// var p1 = new Person("noha", 23, "alex");

// console.log(p1);
// p1.display();

// var product = {};

// var output = Object.create(product);
// output.trackName = "mearn";

// console.log(output);
/**==================// parent -- super
function Person(fname, age, address) {
	this.fname = fname;
	this.age = age;
	this.address = address;
}

Person.prototype.display = function () {
	console.log(`${this.fname} ${this.age}`);
};

// subclass - child
function User(fname, age, address, password) {
	// props
	Person.call(this, fname, age, address);
	this.password = password;
}
User.prototype = Object.create(Person.prototype);
User.prototype.generatePassword = function () {
	return `${this.password.toUpperCase()} %$#$ ${this.address}`;
};

var user1 = new User("ali", 20, "alex", "ali");
var user2 = new User("mona", 30, "banha", "MOna");

// console.log(user1);
// user1.display();
// console.log(user1.generatePassword());
// console.log(user1);
// console.log(user1.generatePassword());
// console.log(user2.generatePassword());
// user1.display();
// user2.display();

var p1 = new Person("noha", 23, "alex");

// console.log(p1);
// p1.display();

// var product = {};

// var output = Object.create(product);
// output.trackName = "mearn";

// console.log(output);

var user = { gender: "male" };

var result = Object.create(user);

console.log(result.test);
// result.name = "mona";
// console.log(result);
 */

////////////////////////////////////////////
// Inheritance
// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.fname} ${this.age}`);
// };

// // props [Done] -- method
// function User(fname, age, address, password) {
// 	Person.call(this, fname, age, address);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype); // link -- method
// User.prototype.constructor = User;

// User.prototype.generatePassword = function () {
// 	console.log("generate Pasword");
// };

// var myUser = new User("sara", 19, "alex", "Slfk");

// console.log(myUser);
/**-------------------Polymorphism-------------------------- */

// function Person(fname, age, address) {
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.fname} ${this.age}`);
// };

// function User(fname, age, address, password) {
// 	Person.call(this, fname, age, address);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype); // link -- method
// User.prototype.constructor = User;

// User.prototype.generatePassword = function () {
// 	console.log("generate Pasword");
// };

// /// override -- polumorphism
// User.prototype.display = function () {
// 	console.log(`${this.fname} ${this.address} ${this.password}`);
// };

// var myUser = new User("sara", 19, "alex", "Slfk");

// console.log(myUser);
// // myUser.display();

// function calcArea(shape) {
// 	if (shape.type == "circle") {
// 		return Math.PI * shape.r * shape.r;
// 	}

// 	// arguemnet
// 	// reduce -- Es6
// }

// calcArea({ type: "Rect", w: 10, h: 300 });
// console.log(calcArea({ type: "circle", r: 1 }));
/**-------------------Abstraction-------------------------- */
// // abstract
// function Person(fname, age, address) {
// 	if (this.constructor == Person) {
// 		throw "can not take an object from abstract class";
// 	}
// 	this.fname = fname;
// 	this.age = age;
// 	this.address = address;
// }
// // 1

// Person.prototype.display = function () {
// 	throw "Method is not implemented";
// };

// function User(fname, age, address, password) {
// 	Person.call(this, fname, age, address);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype); // link -- method
// User.prototype.constructor = User;

// User.prototype.display = function () {
// 	console.log("displays");
// };
// User.prototype.generatePassword = function () {
// 	console.log("generate Pasword");
// };

// var myUser = new User();

// console.log(myUser); //

// var p1 = new Person();

// console.log(p1);
// var myUser = new User("sara", 19, "alex", "Slfk");
// myUser.display();
/**===============Encapsulation================= */
function Person(fname) {
	// local scope -- private
	var age = 20;
	this.fname = fname;
	// getter --- closure -- Privilage function
	this.getAge = function () {
		return age;
	};
	this.setAge = function (value) {
		age = value;
	};
}
/***************************************************** */
function Person(fname) {
	var age = 20;
	this.fname = fname;
	Object.defineProperty(this, "ageHandler", {
		get: function () {
			return age;
		},
		set: function (value) {
			age = value;
		},
	});
}

var p1 = new Person("ahmed");

p1.ageHandler = 1234; // set

console.log(p1.ageHandler); //get
