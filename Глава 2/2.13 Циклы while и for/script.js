'use strict'

// Задание 1
let i = 3;

while (i) {
  alert( i-- );
} 
// Последнее значение будет 1, т.к. используется постфиксный дикримент,
// Следовательно сначала выводится значение, потом оно уменьшается на 1,
// А дальше while(0) не будет выполнятся


// Задание 2

	// 1
	i = 0;
	while (++i < 5) alert( i );  // 1, 2, 3, 4

	// 2 
	i = 0;
	while (i++ < 5) alert( i );  // 1, 2, 3, 4, 5
	// Значения разные

// Задание 3

	// 1
	for (let i = 0; i < 5; i++) alert( i );  // 0, 1, 2, 3, 4

	// 2 
	for (let i = 0; i < 5; ++i) alert( i );  // 0, 1, 2, 3, 4
	// Значение одинаковые	


// Задание 4
for (let i = 2; i <= 10; i++) {
	if (i % 2 === 0) alert(i);
}


// Задание 5
i = 0;
while (i < 3) {
	alert( `number ${i}!` );
	i++
}


// Задание 6
let number
while (true) {
	number = prompt('Введите число больше 100');
	if (number > 100 || number === null) break;
}



// Задание 7
i = 2;
let n = 10;
for (i; i <= n; i++) {
	let isPrime = true
	for (let j = 2; j <= i / 2; j++) {
		if (i % j === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) alert(i);
}



