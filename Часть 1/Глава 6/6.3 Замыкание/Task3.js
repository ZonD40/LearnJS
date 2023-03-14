'use strict'

let phrase = "Hello";

if (true) {
	let user = "John";

	function sayHi() {
  		console.log(`${phrase}, ${user}`);
	}
}

sayHi();  // Ошибка, т.к. в глобальном лексическом окружении нету функцции sayHi, она есть только в лексическом коружении if