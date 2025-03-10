// camel Case
// first
// firstSecond
// firstSecondThird
// firstSecondThirdFourth
/**------------------Datatypes---------------------- 
 == primitive datatypes
 === string
 === number
 === boolean
 === undefined
 === null
 -------------------------------------------
 == refernce datatypes
    ==Object
------------------ Var ----------------------
== reassign with different datatypes
== can redeclare
------------------Operators 
== Arithmatic operator [+,-,*,/]

=== [+] == number + number --> add
=== [+] == string + string --> concat
-----------------------------------------
    [+] == string + number -- (concat)

== coercion -- js engine (v8) convert automatic from datatype to anther datatype
---------------------- */
/**
 * comparasion Operator
 * [==]   ----------> (only values)
 * [===] -----------> ( values & datatypes)
 */

// var x = 1;

// var y = true;

// console.log(x == y);
// Falsy Values
/**
 *  ==== false
 *  ==== 0
 *  ==== NaN
 *  ==== ""
 *  ==== null
 *  ==== undefined
 * ------------Turthy Values--------------
 *
 */
/**
 * logical operator
 * ---------------------------
 * (&&) -- true && true --> true
 *          true && false --> false
 *          false && true --> false
 *          false && false --> false
 *--------------------------------
 * ---------------------------
 * (||) -- true || true --> true
 *          true || false --> true
 *          false || true --> true
 *          false || false --> false
 *--------------------------------
 (!)        -- true ==> false
            -- false ==> true
 */

/**
 *  ========== "mona" && "ali"
 *  ========== true &&  ---> (true | false )
 * =========== 0 && "alaa"
 * =========== false &&  ==> zero
 * --------------------------------------
 * "mona" || "ali" -> mona
 *  undefined || 5 -->> 5
 *  "mearn" ||
 * ============
 *
 */
/** Ternary Operators */

/**
 * (condition) ? true line: false line

 */

// var color = "red";

// color == "red" ? console.log("red") : console.log("Else case");

/** for -- while -- do while */

// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

// var i = 6;

// while (i < 5) {
// 	console.log("Hello");
// 	console.log(i);
// 	i++;
// }
// var choose = "yes";
// do {
// 	choose = "no";
// 	console.log("hello");
// } while (choose == "yes");
// var name = "ali";

// document.writeln("<h1>" + name + "</h1>");
// document.writeln("hello");
// document.writeln("<h1 style='color:red'>Mearn track</h1>");

// document.writeln("ali");
// document.writeln("hanaa");

// document.writeln("<img src='./1.jpg' />");

// var num1 = Number(prompt("Enter Your num1", 20)); // string
// var num2 = Number(prompt("Enter Your num2", 40));

// document.writeln(num1 + num2);

// alert("Item deleted");

// var result = confirm("are you sure you want to buy this course");
// result
// 	? document.writeln("<h1>added to your list</h1>")
// 	: document.writeln("<h4>Operation cancelled</h4>");
