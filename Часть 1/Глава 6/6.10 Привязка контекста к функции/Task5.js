'use strict'


function askPassword2(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
}

let user2 = {
	name: 'John',

	login(result) {
		alert( this.name + (result ? ' logged in' : ' failed to log in') );
}
};

askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false)); 