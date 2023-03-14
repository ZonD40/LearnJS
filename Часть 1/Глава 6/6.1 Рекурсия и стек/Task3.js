'use strict'

function fib(n) {
	let sum = 1
	let prev = 0;
	for (n; n > 1; n--) {
		let i = sum;
		sum += prev;
		prev = i;
	}	
	return sum;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757