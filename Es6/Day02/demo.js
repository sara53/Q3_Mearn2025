// let users;
// setTimeout(() => {
// 	users = [100, 200, 300];
// 	let user;

// 	setTimeout(() => {
// 		user = {
// 			id: users[0],
// 			name: "ahmed",
// 			address: "alex",
// 		};

// 		setTimeout(() => {
// 			let address = user.address;
// 			console.log(address);
// 		}, 500);
// 	}, 2000);
// }, 3000);

/**=============================== */
// function getAllUsers() {
// 	let users;
// 	let myPromise = new Promise((x, y) => {
// 		setTimeout(() => {
// 			users = [100, 200, 300];
// 			users ? x(users) : y("Error on getting Users List");
// 		}, 3000);
// 	});

// 	return myPromise;
// }

// function getUserDetails(userId) {
// 	let user;
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			user = {
// 				id: userId,
// 				name: "ahmed",
// 				address: "alex",
// 			};
// 			user ? resolve(user) : reject("Error on user details");
// 		}, 2000);
// 	});
// }

// function getAddress(user) {
// 	return new Promise(function (resolve, reject) {
// 		let address = user.address;
// 		address ? resolve(address) : reject("Error on getting address");
// 	});
// }

// async function execute() {
// 	try {
// 		let users = await getAllUsers();
// 		let user = await getUserDetails(users[0]);
// 		let address = await getAddress(user);
// 		console.log(address);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getAllUsers()
// 	.then((users) => {
// 		return getUserDetails(users[0]);
// 	})
// 	.then((user) => {
// 		return getAddress(user);
// 	})
// 	.then((address) => console.log(address))
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function fetchUsers() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// fetchUsers();
