console.log('Excercise 04: if/else');

// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
// mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
console.log('Excercise 4a');
var number1 = Math.random();
if (number1 >= 0.5){
    console.log('Greater than 0,5');
}
else{
    console.log('Lower than 0,5');
}

// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.
console.log('Excercise 4b');
var age = Math.floor(Math.random() * 101);
console.log('Age: ' + age + ' Age group:');
if (age < 2){
    alert('Bebé');
}else if (age >= 2 && age <= 12){
    alert('Niño');
}else if (age >= 13 && age <= 19){
    alert('Adolescente');
}else if (age >= 20 && age <= 30){
    alert('Jóven');
}else if (age >= 31 && age <= 60){
    alert('Adulto');
}else if (age >= 61 && age <= 75){
    alert('Adulto mayor');
}else if (age > 75){
    alert('Anciano');
}