'use strict'

function aclean(arr) {
	const newArr = [];
	let map = new Map();
	map.set(['nap', 'pan']);
	map.set(['ear', 'are', 'era']);
	map.set(['cheaters', 'hectares', 'teachers']);
	
	arr.forEach((item) => {
		for (let key of map.keys()) {
			if ( key.includes(item.toLowerCase()) && !map[key] ) {
				map[key] = item;
				newArr.push(item);
			}
		}
	});


	return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"