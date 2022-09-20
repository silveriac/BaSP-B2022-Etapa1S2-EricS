// Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor
// de dicha variable en la consola del navegador.
var number1 = Math.floor(Math.random()* 100);
var number2 = Math.floor(Math.random()* 100);
function ex6A(){
    console.log('Excercise 6a');
    function sum(value1, value2){
        return value1 + value2;
    };
    var result = sum(number1, number2);
    console.log(number1 + ' + ' + number2 + ' = ' + result);
}
// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error
// y retornar el valor NaN como resultado.
function ex6B(){
    console.log('Excercise 6b');
    function sum(value1, value2){
        if(typeof value1 != 'number' || typeof value2 != 'number'){
            alert('At least one parameter has an error');
            return 'NaN';
        }
        else{
            return value1 + value2;
        };
    };
    var result2 = sum('asdasd', number2);
    console.log('result2 is: ' + result2);
};
// Aparte, crear una función validate Integer que reciba un número como parámetro
// y devuelva verdadero si es un número entero.
function validateInteger(value){
    if(typeof value != 'number'){
        return NaN;
    }
    else if(Number.isInteger(value)){
        return true;
    }
    else{
        return false;
    }
};
function ex6C(){
    console.log('Excercise 6c');
    console.log(validateInteger(0.969));
    console.log(validateInteger('this is not a number'));
};
// A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
// y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error
// y retornar el número convertido a entero (redondeado).
function ex6D(){
    console.log('Excercise 6d');
    function sum(value1, value2){
        if(typeof value1 != 'number' || typeof value2 != 'number'){
            alert('Error: not a number');
            return 'NaN';
        }
        else if(Number.isInteger(value1) == false || Number.isInteger(value2) == false){
            alert('Error: Decimal number detected, the result will be rounded');
            return Math.round(value1 + value2);
        }
        else{
            return value1 + value2;
        };
    };
    console.log(sum(3, 5.45));
};
// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
// probando que todo siga funcionando igual.
function ex6E(){
    console.log('Excercise 6e');
    function validation(value){
        if(Number.isInteger(value) == false){
            alert('Error: Decimal number detected, the result will be rounded');
            return Math.round(value);
        }
        else{
            return value;
        }
    }
    function sum3(value1, value2){
        if(typeof value1 != 'number' || typeof value2 != 'number'){
            alert('Error: not a number');
            return 'NaN';
        }
        else{
            return validation(value1) + validation(value2);
        };
    };
    console.log(sum3(42, 30.67));
}