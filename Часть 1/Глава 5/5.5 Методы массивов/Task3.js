'use strict'

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
	const length = arr.length;
	for (let i = 0; i  < length; i++) {
		if ( (arr[i] < a) || (arr[i] > b) ) {
			arr.splice(i, 1);
			i--;
		}
	};
}


filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]

