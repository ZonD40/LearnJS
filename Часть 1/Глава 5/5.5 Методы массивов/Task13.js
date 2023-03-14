'use strict'

function groupById(users) {
	const usersById = {};
	users.reduce((finalObj, item) => {
		finalObj[item.id] = item;
		return finalObj;
	}, usersById);
	return usersById;
}

let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById);
