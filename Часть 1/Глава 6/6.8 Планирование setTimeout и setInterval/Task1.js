'use strict'

// С setInterval
function printNumbersInterval(from, to) {
	let number = from; 

	let intervalId = setInterval(() => {
		if (number === to) clearInterval(intervalId);

		console.log(`Interval: ${number++}`);
	}, 1000) 
}

// С setTimeout
function printNumbersTimeout(from, to) {
	let number = from;

	let timerId = setTimeout(function print() {
		console.log(`Timeout: ${number++}`);

		if (number <= to) timerId = setTimeout(print, 1000);
	}, 1000)
}

printNumbersInterval(3, 7);
printNumbersTimeout(3, 7);