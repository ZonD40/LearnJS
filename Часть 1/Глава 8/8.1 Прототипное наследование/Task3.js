'use strict'

let animal = {
	eat() {
		this.full = true;
	}
};

let rabbit = {
	__proto__: animal
};

rabbit.eat();

// свойство full получит объект rabbit

console.log(animal.full);
console.log(rabbit.full);