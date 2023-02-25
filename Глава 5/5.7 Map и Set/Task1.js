'use strict'

function unique(arr) {
	let set = new Set();
	const newArr = [];

	arr.forEach( item => set.add(item) );

	for (let value of set.keys()) {
		newArr.push(value);
	};
	return newArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O