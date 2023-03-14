'use strict'

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// Рекурсия
function printListRecursion(list) {
	if (list.next === null) {
		console.log(list.value);
		return;
	}
	printListRecursion(list.next);
	console.log(list.value);
}

printListRecursion(list);

// Цикл
function printListCycle(list) {
	let obj = list;
	const array = [];
	while (true) {
		array.push(obj.value);
		if (obj.next === null) break;
		obj = obj.next;
	}

	const arrayLength = array.length;
	for (let i = 0; i < arrayLength; i++) {
		console.log(array.pop());
	}
}

printListCycle(list);

