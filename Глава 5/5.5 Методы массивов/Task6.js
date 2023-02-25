'use strict'

function Calculator() {
	this.operations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	};
	
	this.calculate = function(str) {
		const arr = str.split(' ');
		
		for (key in this.operations) {
			if (arr[1] === key) {
				return this.operations[key](+arr[0], +arr[2]);
			} 
		}
		return 'Операция не определена!'
	};

	this.addMethod = function(name, func) {
		this.operations[name] = func;
	};
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("4 * 3");
console.log( result ); // 12