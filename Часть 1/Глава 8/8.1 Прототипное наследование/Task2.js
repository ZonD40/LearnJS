'use strict'

let head = {
	glasses: 1
};

let table = {
	__proto__: head,
	pen: 3
};

let bed = {
	__proto__: table,
	sheet: 1,
	pillow: 2
};

let pockets = {
	__proto__: bed,
	money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

// 2
// Быстрее получить glasses через head.glasses, т.к. JS будетт искать свойство внутри объекта 
// head и сразу найдет его
// А при получении через pockets.glasses JS сначала поищет в pockets, далее в bed, затем в table
// и лишь потом найдет в head