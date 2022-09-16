console.log('Excercise 02: strings')
// Crear una variable de tipo string con al menos 10 caracteres
// y convertir todo el texto en mayúscula (utilizar toUpperCase).
var text3 = 'I have no creativity for these variables';
console.log(text3.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los primeros 5 caracteres guardando
// el resultado en una nueva variable (utilizar substring).
var text4 = 'power rangers';
var text4ButShorter = text4.substring(0 , 5);
console.log('text4ButShorter is: ' + text4ButShorter);

// Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los últimos 3 caracteres guardando el resultado
// en una nueva variable (utilizar substring).
var text5 = 'I love my dog';
var pet = text5.substring(text5.length - 3, text5.length);
console.log('My pet is a: ' + pet);