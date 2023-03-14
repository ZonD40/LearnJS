'use strict'

function ucFirst(str) {  // Делает первую букву строки заглавной
	if (str) {
		return str[0].toUpperCase() + str.substring(1);
	}
	return str;
}

function camelize(str) {
	let array = str.split('-');
	array = array.map((item, index) => {
		return index != 0 ? ucFirst(item) : item;
	});
	return array.join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") ) 
console.log( camelize("-webkit-transition") ) 
