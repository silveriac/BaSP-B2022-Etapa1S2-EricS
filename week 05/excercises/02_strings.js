// Crear una variable de tipo string con al menos 10 caracteres
// y convertir todo el texto en mayúscula (utilizar toUpperCase).
function ex2A(){
    console.log('Excercise 2a');
    var text3 = 'I have no creativity for these variables';
    console.log('text3 is:' + text3)
    console.log(text3.toUpperCase());
};
// Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los primeros 5 caracteres guardando
// el resultado en una nueva variable (utilizar substring).
function ex2B(){
    console.log('Excercise 2b');
    var text4 = 'power rangers';
    console.log('text4 is:' + text4);
    var text4ButShorter = text4.substring(0 , 5);
    console.log('text4ButShorter is: ' + text4ButShorter);
};
// Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con los últimos 3 caracteres guardando el resultado
// en una nueva variable (utilizar substring).
function ex2C(){
    console.log('Excercise 2c');
    var text5 = 'I love my dog';
    console.log("text 5 is: " + text5);
    var pet = text5.substring(text5.length - 3, text5.length);
    console.log('My pet is a: ' + pet);
};
// Crear una variable de tipo string con al menos 10 caracteres
// y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula.
// Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
// toLowerCase y el operador +).
function ex2D(){
    console.log('Excercise 2d');
    var tale = 'oNCe UpOn A tIME...';
    console.log('var tale is: ' + tale);
    var firstLetter = tale.substring(0,1);
    var allTheRest = tale.substring(1, tale.length);
    var taleCorrected = firstLetter.toUpperCase() + allTheRest.toLowerCase();
    console.log('taleCorrected is: ' + taleCorrected);
};
// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
function ex2E(){
    console.log('Excercise 2e');
    var terminator = 'Hasta la vista, baby';
    var blankSpace = terminator.indexOf(' ');
    console.log('The index of the first blank space in "' + terminator + '" is: ' + blankSpace);
};
// Crear una variable de tipo string con al menos 2 palabras largas
// (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores
// para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula
// y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
function ex2F(){
    console.log('Excercise 2f');
    var lakeAnimals = 'alliGATOr hipPOPotamus';
    console.log('lakeAnimals is: ' + lakeAnimals);
    var initial1 = lakeAnimals.substring(0, 1);
    //substring from second letter up to space char:
    var theRest1 = lakeAnimals.substring(1, lakeAnimals.indexOf(' ') + 1);
    var animal1 = initial1.toUpperCase() + theRest1.toLowerCase(); //first word
    var initial2 = lakeAnimals.substring(lakeAnimals.indexOf(' ') + 1, lakeAnimals.indexOf(' ') + 2);
    // substring from the second letter of second word to the end of the string:
    var theRest2 = lakeAnimals.substring(lakeAnimals.indexOf(' ') + 2, lakeAnimals.length); //second word
    var animal2 = initial2.toUpperCase() + theRest2.toLowerCase();
    var lakeAnimalsCorrected = animal1 + animal2;
    console.log('lakeAnimals is: ' + lakeAnimalsCorrected);
};