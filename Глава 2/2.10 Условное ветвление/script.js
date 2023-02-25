'use strict'

// Задание 1
if ("0") {
	alert( 'Привет' );
  }
// Алерт выведется


// Задание 2
const nameOfJS = prompt('Какое «официальное» название JavaScript?');

if (nameOfJS === 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!')
}


// Задание 3
const number = +prompt('Введите число');

if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else {
	alert(0);
}


// Задание 4
let result;

result = (a + b < 4) ? 'Мало' : 'Много';


// Задание 5
let message;

message = (login == 'Сотрудник') ? 'Привет' : 
		  (login == 'Директор') ? 'Здравствуйте' :
		  (login == '') ? 'Нет логина' : 
		  '';