/**
 *VAR 
 ----------------------------
 * == Reassign
   == Can redeclare
   == Hoisting
   == added to window object
   == function Scope
   *let
 ----------------------------
 == reassign
 == can not redeclare
 == can be Hoisted But will throw Error Before assignment
 == not added to window object
 == Block Scope
   *const
 ----------------------------
 == can not reassign
 == can not redeclare
 == can be Hoisted But will throw Error Before assignment
 == not added to window object
 == Block Scope

 */

// Spread Operator
// let person1 = { fname: "ali", age: 20 };
// let person2 = { ...person1, gender: "male" };

// console.log(person1);
// console.log(person2);
// let arr1 = ["mona", "ahmed"];

// let arr2 = [true, false, ...arr1, 1, 2, 3];

// arr1.push("aDdf");

// console.log("arr1 ", arr1);
// console.log("arr2 ", arr2);

// const person = { fname: "ahmed" };

// person.fname = "alaa";

// person = {};

// const arr = [];
// arr = ["mona"]; // throw
// arr.push("ali");
// console.log(arr);

// console.log(PI);
// const PI = 3.14;

// PI = 2;
// console.log(PI);

// let fname = "ali";
// console.log(fname);

// console.log(window.fname); // undefined
// console.log(fname);

// let fname = "mona";

// console.log(fname);
// let fname = "mona";
// let fname = "ahmed";
// console.log(fname);
// function show() {
// 	// let test = "ahmed";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		// console.log(test);
// 	}
// 	//console.log("i outside loop is : ", i);
// }

// show();

// let arr1 = [10, 20, 30, 40, { fname: "abdo" }];

// let arr2 = []; // location

// for (let i = 0; i < arr1.length; i++) {
// 	arr2[i] = arr1[i];
// }

// arr1[4].fname = "hello";
// // let arr2 = arr1; //

// arr1.push("alaa");
// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);
// console.log("---------------------");

// let a = 5;

// let b = a;

// a = 2;
// console.log("a : ", a);
// console.log("b : ", b);
/**---------------------------- */

// Spread Operator
// let person1 = { fname: "ali", age: 20 };
// let person2 = { ...person1, gender: "male" };

// console.log(person1);
// console.log(person2);
// let arr1 = ["mona", "ahmed"];

// let arr2 = [true, false, ...arr1, 1, 2, 3];

// arr1.push("aDdf");

// console.log("arr1 ", arr1);
// console.log("arr2 ", arr2);
// // rest params
// function greet(...pet) {
// 	console.log(pet);
// 	// console.log(arguments);
// 	// console.log("x :", x);
// 	// console.log("y :", y);
// 	// console.log("hello");
// }

// greet(1, "mona", "alaa", "hoda");

// let arr1 = [...[1, 2, 3]];
/**==================Default Params======================== */

// function greet(x = 0, y = 0) {
// 	console.log("x", x);
// 	console.log("y", y);
// }

// greet();

/**================================= */
// destructuring
// let arr = [10, "mona", "ahmed"];

// let [, , z] = arr;
// // let x = arr[0];

// // let y = arr[1];

// // console.log(x);
// // console.log(y);
// console.log(z);
/**-------------------- */

// let [x, y] = [10, 20, "mona"]; //

// function useArr(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("Hello x");
// 		},
// 		30,
// 	];
// }

// let [x, y] = useArr(0); //

// y();
// console.log(x);
// console.log(y);

// let person = { fname: "Ali", age: 25, color: "red" };

// // let { fname: fname, color: color } = person;
// let { fname, color } = person;

// console.log(fname);
// console.log(color);
// let str = "hello pet";

// console.log(str.includes("pet"));
// console.log(`

//     PETTTTT

//     ${str}

//     `);

// // statement
// function sum(x, y) {
// 	console.log(x + y);
// }

// // expression
// let add = function (x, y) {
// 	console.log(x + y);
// };
// // arrow function
// let add3 = (x, y) => {
// 	console.log(x + y);
// };

// let sayHello = (_) => console.log("Hello mearn");

// let square = (x) => x * x;

// let sum = (x = 0, y = 0) => {
// 	console.log("Hello Sum");
// 	return x + y;
// };
/**================================= */

// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// this -- window
// var fname = "ahmed";
// var person = {
// 	fname: "hoda",
// 	test: this.fname,
// };

// console.log(person);

// person.display(); //person
// var fname = "pwe";
// function getName() {
// 	console.log(this.fname);
// }

// getName(); //
// person.display(); // person

// console.log(itiTracks.findIndex((track) => track.startsWith("M")));
// var result = arr.findIndex((item) => item > 25);

// console.log(result);

// function findElement(item, index, arr) {
// 	console.log("item : ", item);
// 	console.log("index : ", index);
// 	console.log("arr : ", arr);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("---------------");
// }

// // let result = itiTracks.every((item, i) => item.startsWith("M"));
// let result = itiTracks.some((item, i) => item.startsWith("M"));

// console.log(result);
// let result = itiTracks.map(function (track, index, arr) {
// 	return `<div>
//         <h2>${track}</h1>
//         </div>
//     `;
// });
// let result = itiTracks.map(function (track, index, arr) {
// 	return {
// 		id: index,
// 		trackName: track,
// 	};
// });

// console.log(result);
