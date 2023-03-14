'use strict'

function getSecondsToTomorrow() {
	const nowDate = new Date();
	const today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1)
	let ms = today - nowDate;
	return ms / 1000;
}

console.log(getSecondsToTomorrow());