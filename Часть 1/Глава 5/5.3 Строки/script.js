'use strict'

// Задание 1
function ucFirst(str) {
	if (str) {
		return str[0].toUpperCase() + str.substring(1);
	}
	return str;
}
alert ( ucFirst("вася") == "Вася" );

// Задание 2
function checkSpam(str) {
	str = str.toLowerCase();
	if ( str.includes('viagra') || str.includes('xxx') ) {
		return true;
	}
	return false;
}


alert( checkSpam('buy ViAgRA now') == true );
alert( checkSpam('free xxxxx') == true );
alert( checkSpam("innocent rabbit") == false );


// Задание 3
function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.substring(0, maxlength - 1) + '…';
	}
	return str;	
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));


// Задание 4
function extractCurrencyValue(str) {
	return +str.substring(1);
}

alert( extractCurrencyValue('$120') === 120 );