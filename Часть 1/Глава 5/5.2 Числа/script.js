'use strict'

// Задание 1
const a = +prompt('Введите 1 число');
const b = +prompt('Введите 2 число');

alert( +(a + b).toFixed(5) );  // Кол-во знаков после запятой зависит от точности, которая нам нужна


// Задание 2
alert( 6.35.toFixed(1) ); // 6.3
// Возможно, 6.35 преобразется в 6.3 т.к. в двочной записи числа 
// Неточность немого уменьшает число и оно преобразуется в 6.3 
// Мой вариант
alert( Math.round(6.35 * 10) / 10 ); 


// Задание 3
function readNumber() {
	while (true) {
		const number = prompt('Введите число');
		if (number === '' || number === null) {
			return null;
		} else if ( isFinite( number ) ) {
			return +number;
		}
	}
}


// Задание 4
let i = 0;
while (i != 10) {
  i += 0.2;
}
// Цикл бесконечный, т.к. 0.2 в двоичной системе счисления содержит погрешность,
// Следовательно при суммировании 0.2 погрешность накаливается и при достижении целых 10
// Мы будем иметь что-то вроде 10.00000000003, а это не равно 10


// Задание 5
function random(min, max) {
	return Math.random() * (max - min) + min;
}

alert( random(1, 5) ); 
alert( random(1, 5) ); 
alert( random(1, 5) ); 


// Задание 6
function randomInteger(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 
alert( randomInteger(1, 5) ); 