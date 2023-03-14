'use strict'

// Задание 1
function checkAge(age) {
	if (age > 18) {
		return true;
	} //else {
		// ...
		return confirm('Родители разрешили?');
	//} 
	// В данном случае обе функции сработают одинаково
  }


// Задание 2

	// 1
	function checkAge(age) {
		return (age > 18) ? true : confirm('Родители разрешили?');
	}

	// 2 
	function checkAge(age) {
		return (age > 18) || confirm('Родители разрешили?');
	}

// Задание 3
function min(a, b) {
	return a > b ? b : a;
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


// Задание 4
function pow(x, n) {
	return  n === 0 ? 1 :
			n === 1 ? x :
			x *= pow(x, n - 1);
}

const x = prompt('Введите x');
const n = prompt('Введите n');

alert(`x в степени n = ${pow(x, n)}`);


