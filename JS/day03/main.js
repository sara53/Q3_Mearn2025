// var trackName = "mearn";
// function great() {
// 	console.log("Hello great func");
// 	console.log(trackName);
// 	return "ITI";
// }

// /**------------------------ */
// var result = great();
// console.log(result);
// var trackName = "mearn track";
// function great() {
// 	var x = "ali";
// 	trackName = "Dotnet track";
// 	console.log(trackName);
// 	return "ITI";
// }

// var result = great();
// console.log(x);
// console.log(trackName);
// console.log(result);
/**------------------------------- */
// var trackName = "mearn track";
// function great() {
// 	console.log(fname);
// 	var fname = "ali";
// }

// var result = great();
// console.log(trackName);
// console.log(result);
// function sayHello(trackName) {
// 	console.log("Hello ", trackName);
// }

// var greet = function (trackName) {
// 	console.log("Welcome At ITI");
// 	return sayHello(trackName);
// };

// console.log(greet("Mearn Track"));

// ali
// (function () {
// 	var fname = "ali";

// 	console.log(fname);
// })();

// // ahmed

// (function () {
// 	var fname = "ahmed";

// 	console.log(fname);
// })();
/**------------------------------ */

// var fname1 = "Ali";
// var x = 25;

// var fname2 = "mona";
// var y = 20;

// console.log(x);

// console.log(y);

/**
 *  ==== Properties (key):Value [any datatype]
 *  ==== Methods
 *------------------------------- access
    == dot notation
    == square notation
 */

// get prop ==> return value
// get prop [not found] == return undefined

// userdefined
// var student1 = {
// 	fname: "ali",
// 	age: 25,
// 	address: {
// 		city: "Banha",
// 		code: 1233,
// 		street: "Saad Street",
// 	},
// 	colors: ["red", "green", "blue"],
// 	// methods
// 	disaply: function (data) {
// 		return data.toString();
// 	},
// };

// var result = student1.disaply(10);
// console.log(result);

// console.log(student1.disaply());

// for (var i = 0; i < student1.colors.length; i++) {
// 	console.log(student1.colors[i]);
// }
// var address = student1.address;
// console.log(address.city);
// console.log(student1["address"]["city"]);
// console.log(student1.address["city"]);
// console.log(student1["address"].city);
// student1["fname"] = "ahmed";
// student1["gender"] = "male";

// console.log(student1);
// set [prop] --> override
// student1.fname = "Ahmed"; // override
// // set [prop] ==> added to the object
// student1.gender = "male";
// console.log(student1);
// console.log(student1.gender); //
// var student2 = {
// 	fname: "mona",
// 	age: 20,
// 	address: "banha",
// };

// Get dot notation
// console.log(student1.fname);
// console.log(student1.age);
// console.log(student1.age);
// get
// console.log(student1["fname"]);
// console.log(student1["age"]);
// console.log(student1["address"]);

// var str = "hello at ITI"; // {} //

// console.log(str.length); // propert

// var arr = ["ahmed"];

// arr.push("new value"); //

// arr.pop();
