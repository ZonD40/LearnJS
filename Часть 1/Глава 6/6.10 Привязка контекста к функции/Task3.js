'use strict'

function sayHi() {
	console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: "Вася"
});

console.log( bound.test );
// Выведет undefined, потому что .bind создает обертку для функции, а у этой обертки нету свойства test 