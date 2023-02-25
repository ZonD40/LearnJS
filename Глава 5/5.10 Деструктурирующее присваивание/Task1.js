'use strict'

function topSalary(salaries) {
	let name = null;
	let max = 0;
	for (let [key, value] of Object.entries(salaries)) {
		name = value > max ? key : name;
		max = value > max ? value : max;
	}
	return name;
}

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

console.log( topSalary(salaries) );