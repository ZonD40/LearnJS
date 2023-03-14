'use strict'

let hamster = {
	stomach: [],
  
	eat(food) {
		this.stomach = [...this.stomach];
		this.stomach.push(food);
	}
	// eat(food) {
	// 	this.stomach = [food];
	// }  
	// Решение автора сработает в данном конкретном случае, но что если кролик съест 2 яблока за раз?
	// Получается, что первое яблоко исчезнет неизвестно куда
	// В моем решении хомяк может кушать столько яблок, сколько захочет, 
	// и все они будут хранится у него в животике! ʕ ᵔᴥᵔ ʔ

};

let speedy = {
	__proto__: hamster
};

let lazy = {
	__proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
speedy.eat("apple2");
speedy.eat("apple3");
console.log( speedy.stomach ); // apple, apple2, apple3 


console.log( lazy.stomach ); // []

// Проблема возникает потому, что .push, не находя свойства stomach у объекта speedy,
// продолжает поиск в прототипе, т.е. в объекте hamster, туда он и пушет food
// Поэтому, обращаясь к свойству stomach как у speedy, так и у lazy, 
// мы попадаем к свойству hamster.stomach 