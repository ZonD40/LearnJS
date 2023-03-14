'use strict'

function f() {
	console.log( this );
}

let user = {
	g: f.bind(null)
};

user.g();  // Функция выведет null