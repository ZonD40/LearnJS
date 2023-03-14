'use strict'

function F() {  // Пример функции, с которой вызов сработает
	this.name = 'Tony';
}

function F2() {  // Пример функции, с которой вызов не сработает
	this.name = 'David';
}
F2.prototype = null;

let obj = new F();
let badObj = new F2();

let obj2 = new obj.constructor();  // Да, мы можем так сделать 
let badObj2 = new badObj.constructor();  // А так мы сделать не можем

console.log(obj2.name)
console.log(badObj2.name)