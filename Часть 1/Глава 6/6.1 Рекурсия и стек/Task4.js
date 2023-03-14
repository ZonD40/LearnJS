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
	console.log(list.value);
	if (list.next === null) return;
	printListRecursion(list.next);
}

printListRecursion(list);

// Цикл
function printListCycle(list) {
	let obj = list;
	while (true) {
		console.log(obj.value);
		if (obj.next === null) break;
		obj = obj.next;
	}
}

printListCycle(list);

// Лучше с рикурсией 