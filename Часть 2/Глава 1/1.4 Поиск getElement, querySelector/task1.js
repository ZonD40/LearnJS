
const table = document.getElementById('age-table'),
	  labels = document.querySelectorAll('#age-table label'),
	  firstTd = table.querySelector('td'),
	  form = document.getElementsByName('search')[0],
	  firstInput = form.querySelector('input'),
	  inputs = form.querySelectorAll('input'),
	  lastInput = inputs[inputs.length - 1];

console.log(table);
console.log(labels);
console.log(firstTd);
console.log(form);
console.log(firstInput);
console.log(lastInput);