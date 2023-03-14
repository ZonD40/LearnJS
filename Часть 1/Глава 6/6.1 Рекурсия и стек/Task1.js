'use strict'

// С помощью цикла 
function sumToCycle(n) { 
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

console.log( sumToCycle(100) ); // 5050


// С помощью рекурсии
function sumToRecursion(n) { 
	return (n === 1) ? 1 : n + sumToRecursion( --n );
}

console.log( sumToRecursion(100) ); // 5050


// С помощью формулы арифметической прогрессии
function sumToRecursion(n) { 
	return n * ( ( 1 + n ) / 2 )
}

console.log( sumToRecursion(100) ); // 5050

// Самый быстрый вариант - с арифметической прогрессей, т.к. там просто нужно вычеслить 3 простейшие операции
// Самый медленный - рекурсивный, т.к. там каждый раз вызывается функция и каждый раз создается новый контекст вызова
// При помощт рекурсии нельзя посчитать sumToRecursion(100000), т.к. обычно максимальная глубина рекурсии 10000