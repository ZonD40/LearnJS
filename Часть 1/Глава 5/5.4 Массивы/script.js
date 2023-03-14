'use strict'

// Задание 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // Выведет 4


// Задание 2
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

styles[ Math.floor((styles.length) / 2) ] = 'Классика';

alert( styles.shift() );

styles.unshift('Реп', 'Регги');


// Задание 3
let arr = ["a", "b"];

arr.push(function() {
	alert( this );
});

arr[2](); // Выведет массив arr с 3 элеменнтами 


// Задание 4
function sumInput() {
	let array = [];
	while(true) {
		const input = prompt('Введите число');
		if ( isNaN(input) || input === null || input === '' ) {
			let sum = 0;
			for (let elem of array) {
				sum += elem;
			}
			return sum;
		}
		array.push(+input);
	}
}

alert( sumInput() );


// Задание 5
const array = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(array) {
	let iter = 0;
	let max = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j <= i; j++) {
			let sum = 0;
			for (let k = j; k <= i; k++) {
				sum += array[k];
				iter++;
			}
			if (sum > max) max = sum;
		}
	}
	console.log(iter);
	return max;
}

alert(getMaxSubSum(array));
