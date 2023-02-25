'use strict'

// Задание 1
function A() { 
	this.name = 'Tom';
 }
function B() { 
	return a
 }

let a = new A();
let b = new B();

alert( a == b ); // true
// Да, возможно

// Задание 2
function Calculator() {
	this.read = function() {
		this.a = +prompt('a?');
		this.b = +prompt('b?');
	};

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function() {
		return this.a * this.b;
	};
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// Задание 3
function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt('value?');
	};
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений