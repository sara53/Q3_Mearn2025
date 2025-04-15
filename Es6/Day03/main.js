// let x = Symbol("age");
// let y = Symbol("age");
// console.log(x == y);
// console.log(y);
// value
// for (let value of arr) {
// 	console.log(value);
// }
// index
// for (let i in arr) {
// 	console.log(i);
// 	console.log(arr[i]);
// }
// console.log(arr);
// Symbol

// let key = "age";

// let x = Symbol();

// let person = {
// 	fname: "Ali",
// 	[key]: 25,
// 	[x]: function () {
// 		return {
// 			next: function () {
// 				return { value: "ali", done: false };
// 			},
// 		};
// 	},
// };

// let result = person[x]();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

// for (let value of arr) {
// 	console.log(value);
// }

// console.log("================================")
// key -- for -- in
// for (let key in person) {
// 	console.log(key);
// }

//
// for (let value of person) {
// 	console.log(value);
// }
/** --------------- */
// let arr = ["mona", "ahmed", 50];

// // override
// arr[Symbol.iterator] = generateEvenNumber;
let person = {
	fname: "Ali",
	age: 25,
	address: "alex",
};

// person[Symbol.iterator] = generateEvenNumber;
// for (let value of person) {
// 	console.log(value);
// }
// function generateEvenNumber() {
// 	let step = 0;
// 	return {
// 		next: function () {
// 			step += 2;
// 			if (step > 10) {
// 				return { value: undefined, done: true };
// 			} else {
// 				return { value: step, done: false };
// 			}
// 		},
// 	};
// }

// for (let value of arr) {
// 	console.log(value);
// }
// let person = {
// 	fname: "Ali",
// 	age: 25,
// 	address: "alex",
// };
// let product = {
// 	name: "book",
// 	price: 300,
// 	category: "school",
// };

// product[Symbol.iterator] = handelOperation;
// // iterable
// person[Symbol.iterator] = handelOperation;
// // generator function

// function* handelOperation() {
// 	// code
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }
// function* evenNumber() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }

// for (let i of product) {
// 	console.log(i);
// }
// console.log("-----------------");
// for (let i of person) {
// 	console.log(i);
// }

// let iter = evenNumber();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// let arr = ["mona", "ahmed", "alaa"];

// arr[Symbol.iterator] = function () {
// 	let index = 0;
// 	return {
// 		next: () => {
// 			if (index < this.length) {
// 				return {
// 					value: this[index++],
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// };

// for (let value of arr) {
// 	console.log(value);
// }
// parent Calls -- super class
// class Person {
// 	constructor(fname = "", age, address) {
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	display() {
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }
// // inheritance
// class User extends Person {
// 	constructor(fname = "", age = "", address, password) {
// 		super(fname, age, address);
// 		this.password = password;
// 	}
// 	generatePassword() {
// 		return this.password.toUpperCase() + "#%%%";
// 	}
// 	// override
// 	display() {
// 		super.display();
// 		console.log(this.password);
// 	}
// }

// let myUser = new User("ahmed", 20, "alex", "AHME");
// // console.log(myUser.generatePassword());

// myUser.display();
// parent Calls -- super class
// class Person {
// 	#id; // private
// 	constructor(id, fname = "", age, address) {
// 		this.#id = id;
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// 	get getId() {
// 		return this.#id;
// 	}
// 	display() {
// 		console.log(`${this.fname} ${this.age}`);
// 	}
// }

// let p1 = new Person(1, "mona", 20, "alex");

// p1.setId = "new ID";

// console.log(p1.getId);
// abstract Class
// class Person {
// 	constructor(fname, age, address) {
// 		if (this.constructor == Person) {
// 			throw "can not take an object from abstract class";
// 		}
// 		this.fname = fname;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		throw "Method is Not implemented";
// 	}
// }
