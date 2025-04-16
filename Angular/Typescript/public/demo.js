"use strict";
// class Person {
// 	fname: string;
// 	age: number;
// 	constructor(fname: string, age: number) {
// 		this.fname = fname;
// 		this.age = age;
// 	}
// 	display(): void {
// 		console.log("display");
// 	}
// }
// class Person {
// 	constructor(private id: number, public fname: string, public age: number) {}
// 	display(): void {
// 		console.log("display");
// 	}
// 	get getId() {
// 		return this.id;
// 	}
// 	set setId(value: number) {
// 		this.id = value;
// 	}
// }
// let p1 = new Person(1, "mona", 25);
// p1.setId = 12;
// console.log(p1.getId);
// class User extends Person {
// 	constructor(fname: string, age: number, public password: string) {
// 		super(fname, age);
// 	}
// 	// override
// 	override display(): void {
// 		console.log("display");
// 	}
// 	generatePass(): string {
// 		return this.password;
// 	}
// }
// abstract class Person {
// 	constructor(public id: number, public fname: string, public age: number) {}
// 	display(): void {
// 		console.log("display");
// 	}
// }
// interface IPerson {
// 	id: number;
// 	fname: string;
// 	age: number;
// 	gender?: string;
// 	display: (x: number) => string;
// }
// interface IUser {
// 	test: string;
// }
// class Person implements IPerson, IUser {
// 	constructor(
// 		public id: number,
// 		public fname: string,
// 		public age: number,
// 		public test: string
// 	) {}
// 	display(x: number): string {
// 		return "ass";
// 	}
// }
// interface IProduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	category: string;
// }
// let products: IProduct[] = [
// 	{ id: 1, name: "book", price: 300, category: "shool" },
// 	{ id: 2, name: "book", price: 300, category: "electronics" },
// 	{ id: 3, name: "book", price: 300, category: "school" },
// ];
// class User extends Person {
// 	constructor(id, name, age) {
// 		super(id, name, age);
// 		// super(1,"ali",25)
// 	}
// }
// let myUser = new User(1, "ali", 25);
// generics
// enum fontStyle {
// 	normal,
// 	italic,
// 	bold,
// }
// let cairo = fontStyle.normal;
// let tahoma = fontStyle.bold;
