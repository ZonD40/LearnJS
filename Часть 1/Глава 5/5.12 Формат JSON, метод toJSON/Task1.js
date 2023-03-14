'use strict'

let user = {
	name: "Василий Иванович",
	age: 35
};

const JSONUser = JSON.parse( JSON.stringify(user) );

console.log(JSONUser);