'use strict'

function unique(arr) {
	const newArr = [];
	arr.forEach((item) => {
		if (!newArr.includes(item)) {
			newArr.push(item);
		}
	});
	return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O