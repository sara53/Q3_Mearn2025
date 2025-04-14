// let fname = "ali";
// let age = 25;
// let myKey = "gender";
// let person = {
// 	fname, // fname:fname
// 	age,
// 	display() {
// 		console.log("display");
// 	},
// };

// person.display();

// console.log(person);
// console.log("==========================")
// let person = {
// 	fname: "ali",
// 	age: 20,
// 	gender: "male",
// };

// let keys = Object.keys(person);
// let result = Object.values(person);
// let output = Object.entries(person);
// console.log(output);
// console.log("=======================");
// let person1 = {
// 	fname: "mona",
// };

// let person2 = { age: 25, gender: "male", fname: "ahmed" };
// // let person3 = { color: ["red"] };

// let result = Object.assign({}, person1, person2);

// console.log("person1 ", person1);
// console.log(result);
/**================================== */
// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		age: "d3efault age",
// 		address: "default address",
// 	};
// 	Object.assign(defaultValues, options);

// 	console.log(`fname : ${defaultValues.fname}
// 			 age: ${defaultValues.age}
// 			 address : ${defaultValues.address}`);
// }
// showData({
// 	fname: "ali",
// });

//showData();
// showData({
// 	fname: "ali",
// 	age: 25,
// 	address: "alex",
// });

/**=================================== */
// function first() {
// 	console.log("first");
// 	second();
// 	console.log("third");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("After setTimeOut");
// }

// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// var fname = "ali";

// var i = 0;
// while (i < 3) {
// 	console.log(i);
// 	i++;
// }

// console.log("End");
// console.log("Second");
// console.log("End");
/**
 * == pending
 * == fulfilled
 * == rejected
 *
 */
// let myPromise = new Promise(function (x, y) {
// 	//x("ali");
// 	y("Error Message");
// });

// myPromise
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});
