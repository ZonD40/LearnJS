'use strict'

// Задание 1
alert( null || 2 || undefined );  // 2


// Задание 2
alert( alert(1) || 2 || alert(3) );  // 1, потом 2 

// Задание 3
alert( 1 && null && 2 );  // null


// Задание 4
alert( alert(1) && alert(2) );  // 1


// Задание 5
alert( null || 2 && 3 || 4 ); 3


// Задание 6
const age = 445;

if ((age >= 14) && (age <= 90)) alert(true);


// Задание 7

if (!(age >= 14) || !(age <= 90)) alert(false); // Вариант 1

if ((age < 14) || (age > 90)) alert(false); // Вариант 2


// Задание 8

if (-1 || 0) alert( 'first' );  // alert выполнится, в if будет -1
if (-1 && 0) alert( 'second' );  // alert не выполнится, в if будет 0
if (null || -1 && 1) alert( 'third' );  // alert выполнится, в if будет 1


// Задание 9

const userName = prompt('Кто там?');

if (userName === null || userName === '') {
	alert('Отменено');
} else if (userName === 'Админ') {
	const userPassword = prompt('Пароль?');

	if (userPassword === null || userPassword === '') {
		alert('Отменено');
	} else if (userPassword === 'Я Главный') {
		alert('Здравствуйте!');
	} else {
		alert('Неверный пароль');
	}
} else {
	alert('Я вас не знаю');
}