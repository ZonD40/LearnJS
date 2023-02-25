'use strict'

// Задание 1
it("Возводит x в степень n", function() {
	let x = 5;
  
	let result = x;
	assert.equal(pow(x, 1), result);
  
	result *= x;
	assert.equal(pow(x, 2), result);
  
	result *= x;
	assert.equal(pow(x, 3), result);
  });
  
  // Тут несколько тесто в одном блоке it, правильнее разбить их на 3 отдельных блока:

it('5 в 1 степени равен ', () => {
	assert.equal( pow(5, 1), 5 );
});
it('5 в 2 степени равен ', () => {
	assert.equal( pow(5, 2), 25 );
});
it('5 в 3 степени равен ', () => {
	assert.equal( pow(5, 3), 125 );
});
