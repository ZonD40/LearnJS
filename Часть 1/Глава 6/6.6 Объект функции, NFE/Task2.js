'use strict'

function sum(arg) {
	let result = arg;

	function subSum(arg2) {
		subSum.toString = function() {
			return result;
		}

		result += arg2;

		return subSum;
	}

	return subSum;
}
  
console.log(sum(1)(2) == 3);
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);