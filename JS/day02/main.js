// function sum(x, y) {
// 	x = x || 0;
// 	y = y || 0;

// 	return [];
// }

// var result = sum(10, 20);

// console.log(result);
// function sum(x, y) {
// 	console.log("sum");
// }

// var result = sum(10, 20);

// console.log(result);
// sum(10);

// console.log(sum(5, 6));

// var result = sum(4, 5);
// console.log(result);

// sum("mona", "ali");
// console.log("----------------");
// sum(true, true);
// console.log("----------------");
// sum(1, 5);

// sum();
// console.log("---------");
// sum(3);
// console.log("---------");
// sum(3, 7);
// console.log("---------");
// sum(3, 9, 6, 8, 9);
// sum(10, 20);
// console.log("-------------");
// sum(5, 6);
// console.log("-----------------------");
// sum(11, 3);

// function sayHello() {
// 	console.log("Hello mearn Track");
// }

// sayHello("ali");
// var result = Number("10"); // built in

// console.log(result);

// function statement (declaration)
// function funName(params){}

// function expression
// var result = function (x, y) {
// 	console.log("sum");
// 	return x + y;
// };

// console.log(result(40, 50));

// console.log(result);
// var output = result(10, 20);
// console.log(output);

// console.log(fname);
// var fname = "mona";
// console.log(fname);
/**----------------- */

// var fname;
// console.log(fname);
// fname = "mona";
// console.log(fname);
// Hoisting
// function sum() {
// 	console.log("sum");
// }

// sum(); //

// console.log(result);
// // result(); //
// var result = function () {
// 	console.log("Welcome mearn");
// };

// undefined
// Error
// var fname = "mona";
// var dotnet = function (supName) {
// 	console.log("Hello dotnet Your sup : " + supName);
// };
// var mearn = function (supName) {
// 	console.log("Hello mearn Your sup :", supName);
// };

// great(dotnet, "ahmed");
// console.log("-------------");
// great(mearn, "mona");
// great(function () {
// 	console.log("Hello callback function");
// });
// great("mona");
// great(dotnet);
// console.log("------------");
// great(mearn);
// great("mona");
// console.log("-----------");

// great(fname);// mona
// function great(myFun, name) {
// 	myFun(name);
// 	console.log("Welcome at ITI");
// }

// great(function (x) {
// 	console.log("Hello mearn");
// 	console.log("x  : ", x);
// }, "Ahmed ali");
// function great(myFun1, myFun2) {
// 	myFun1(function () {
// 		console.log("welcome inner 1");
// 	});
// 	console.log("--------------");
// 	myFun2(function () {
// 		console.log("inner 2");
// 	});
// }

// great(
// 	function (x) {
// 		x();
// 		console.log("Welcome cb1");
// 	},
// 	function (y) {
// 		y();
// 		console.log("Welcome cb2");
// 	}
// );

// (function () {
// 	var fname = "ali";
// })();

// console.log(fname);
/**
 * String
 * ------------------
 * == length
 *----------------
    == charAt
    == indexOf
    == concat
    == trim
    == trimStart
    == trimEnd
    == toLowerCase
    == toUpperCase
    == startsWith
    == endsWith
    == includes
    == slice 
    == split
 */

// var fname = "hello at iti";

// console.log(fname.split(""));

// var fname = "            hello     ";

// var x = "ITI";

// console.log(`${fname.trimEnd()} ${x}`);

// console.log(`mearn track

//     ${fname} ${fname}

//     ${x}
//     `);

// var result = fname.indexOf("a", 0);
// console.log(result);

// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
