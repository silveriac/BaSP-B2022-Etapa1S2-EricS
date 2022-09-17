console.log('Excercise 05: for');

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
// para mostrar una alerta utilizando cada una de las palabras.
console.log('Excercise 5a');
var names = ['eric', 'agus', 'javi', 'ana', 'romi'];
for(var i = 0; i < names.length; i++){
    alert(names[i]);
};

// Al array anterior convertir la primera letra de cada palabra en mayúscula
// y mostrar una alerta por cada palabra modificada.
console.log('Excercise 5b');
for(i = 0; i < names.length; i++){
    var currentNameCapital = names[i].substring(0,1);
    var currentNameRest = names[i].substring(1, tale.length);
    names[i] = currentNameCapital.toUpperCase() + currentNameRest.toLowerCase();
    alert('Name ' + i + ' is: ' + names[i]);
};

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con
// un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.
console.log('Excercise 5c');
var sentence = '';
for (j = 0; j < names.length; j++){
    sentence = sentence + (names[j]);
};
alert(sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
// es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
// desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
console.log('Excercise 5d');
var numbers0To9 =[];
for (k = 0; k<10; k++){
    numbers0To9[k] = k;
};
console.log(numbers0To9);