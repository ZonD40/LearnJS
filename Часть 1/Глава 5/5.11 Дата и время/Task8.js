'use strict'

function formatDate(date) {
	const nowDate = new Date();
	
	if ( (nowDate - date) / 1000 < 1) {
		return "прямо сейчас";
	} else if ( (nowDate - date) / 1000 / 60 < 1 ) {
		return `${(nowDate - date) / 1000} сек. назад`;
	}
	else if ( (nowDate - date) / 1000 / 60 / 60 < 1 ) {
		return `${(nowDate - date) / 1000 / 60} мин. назад`;
	} else {
		const year = date.getFullYear().toString().slice(2),
			  month = date.getMonth().toString().length === 1 ? '0'.concat((date.getMonth() + 1).toString()) : date.getMonth() + 1,
			  day = date.getDate().toString().length === 1 ? '0'.concat(date.getDate().toString()) : date.getDate(),
			  hours = date.getHours().toString().length === 1 ? '0'.concat(date.getHours().toString()) : date.getHours(),
			  minutes = date.getMinutes().toString().length === 1 ? '0'.concat(date.getMinutes().toString()) : date.getMinutes();
			  // Выше, в длинных строках, если число ед. времени однозначное, то к нему добавляется 0
		return `${day}.${month}.${year} ${hours}:${minutes}`
	}
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );