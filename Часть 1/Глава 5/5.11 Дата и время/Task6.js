'use strict'

function getSecondsToday() {
	const nowDate = new Date();
	const today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate())
	let ms = nowDate - today;
	return ms / 1000;
}

console.log(getSecondsToday());