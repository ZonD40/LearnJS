'use strict'

let map = new Map();

map.set("name", "John");

// let keys = map.keys();
// Не работает, т.к. map.keys() возвращает объект
// Нам нужно преобразовать оюъект в массив, 
// для этого используем Array.from:
let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
