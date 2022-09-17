console.log('Excercise 03: arrays');

// Dado el siguiente array:["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] // mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('Excercise 3a');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('The 5th and 11th months are: ' + months[4] + ' and ' + months[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('Excercise 3b');
months.sort();
console.table(months);

// Agregar un elemento al principio y al final del array (utilizar unshift y push).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Excercise 3c');
months.unshift('Preenero');
months.push('Diciembre 2: the sequel');
console.log('The new months are ' + months[0] + ' and ' + months[months.length - 1]);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('Excercise 3d');
months.shift();
months.pop();
console.log('First and last months are: ' + months[0] + ' and ' + months[months.length - 1]);

// Invertir el orden del array (utilizar reverse).
console.log('Excercise 3e');
months.reverse();
console.table(months)

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('Excercise 3f');
var allMonths = months.join('-');
console.log('allMonths is: ' + allMonths)

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('Excercise 3g');
months.reverse();
var shorterYear = months.slice(4,13);
console.log('shorterYear:');
console.table(shorterYear);
