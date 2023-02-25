'use strict'

// Задание 1
const user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

// Задание 2
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
	let propAmount = 0;
	for (key in obj) propAmount++;
	
	return propAmount === 0;
}


// Задание 3
const user = {
	name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";  // Будет!!


// Задание 4
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

function summObjectValue(obj) {
	let result = 0;
	for (let key in obj) {
		result += obj[key];
	}
	return result;
}

const sum = summObjValue(salaries);


// Задание 5
let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

console.log(menu);
multiplyNumeric(menu); 

function multiplyNumeric(obj) {
	for (let key in obj) {
		if ( typeof(obj[key]) === 'number' ) obj[key] *= 2;
	}
}
console.log(menu);