'use strict'

function factorial(n) {
	return (n === 1) ? 1 : n * factorial(--n);
}

console.log( factorial(5) ); // 120