'use strict'

function throttle(f, ms) {
	function wrapper() {
		wrapper.lastArgs = arguments;
		wrapper.lasrThis = this;

		if (!wrapper.timeout) {
			wrapper.currentArgs = arguments;
			f.apply(this, arguments);
			wrapper.timeout = true;
			
			setTimeout(() => {
				wrapper.timeout = false;
				if (wrapper.lastArgs !== wrapper.currentArgs) {
					wrapper.apply(this, wrapper.lastArgs);
				}
			}, ms);
		} 
	}

	wrapper.timeout = false;

	return wrapper;
}

function f(a) {
	console.log(a)
  }
  
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)


// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано