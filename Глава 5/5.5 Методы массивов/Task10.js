'use strict'

function shuffle(arr) {
	arr.sort(() => Math.random() - Math.random());
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

