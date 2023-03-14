'use strict'

function sum(arg1) {
	return function(arg2) {
		return arg1 + arg2;
	};
}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );