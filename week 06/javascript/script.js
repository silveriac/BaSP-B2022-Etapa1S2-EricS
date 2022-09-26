
var firstName;
var lastName;
var DNI;
var birthDate;
var phoneNumber;
var address;
var city;
var postal;
var email;
var pass;
var characters = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 0123456789";
console.table(characters);
// var submitButton;
// console.log(("a" * 4));
// console.log((Number("5") * 4));
// console.log(" " * 4);
// if (NaN){
//     console.log("hola")
// }else if("/" * 3){
//     console.log("hola de nuevo")
// }
window.onload = function(){
    firstName = document.getElementById("first-name");
    lastName = document.getElementById("last-name");
    DNI = document.getElementById("DNI");
    birthDate = document.getElementById("birth-date");
    phoneNumber = document.getElementById("phone-number");
    address = document.getElementById("address");
    city = document.getElementById("city");
    postal = document.getElementById("postal");
    email = document.getElementById("email");
    pass = document.getElementById("password");
    submitButton = document.getElementById("submit-button");
    submitButton.onclick = function(e){
        e.preventDefault();
    }
    //blur
    firstName.addEventListener("blur", () => checkName(firstName));
    lastName.addEventListener("blur", () => checkName(lastName));
    DNI.addEventListener("blur", checkDni);
    birthDate.addEventListener("blur", checkBirth);
    phoneNumber.addEventListener("blur", checkPhone)
    address.addEventListener("blur", checkAddress);
    city.addEventListener("blur", checkLocation);
    postal.addEventListener("blur", checkPostal);
    email.addEventListener("blur", checkEmail);

    //focus
    firstName.addEventListener("focus", () => uncheck(1, firstName));
    lastName.addEventListener("focus", () => uncheck(3, lastName));
    DNI.addEventListener("focus", () => uncheck(5, DNI));
    birthDate.addEventListener("focus", () => uncheck(7, birthDate));
    phoneNumber.addEventListener("focus", () => uncheck(9, phoneNumber));
    address.addEventListener("focus", () => uncheck(11, address));
    city.addEventListener("focus", () => uncheck(13, city));
    postal.addEventListener("focus", () => uncheck(15, postal));
    email.addEventListener("focus", () => uncheck(17, email));

};
function uncheck(number, field){
    console.log("uncheck");
    var error1 = document.getElementById("error" + number);
    var error2 = document.getElementById("error" + (number+1));
    field.classList.remove("red-border");
    error1.classList.remove("show-text");
    if(number != 7){
        error2.classList.remove("show-text");
    };
};
function showError(number, field){
    var error = document.getElementById("error" + number);
    error.classList.add("show-text");
    field.classList.add("red-border");
};
function isNum(char){
    var temp = char * 1;
    if(char == " "){
        return false;
    }
    else if(temp || temp == 0){ //compare each character to numbers 0 - 9
        return true;
    }
    else{
        return false;
    };
}
function isAlphaNum(letter){
    for (var j = 0; j < characters.length; j++){        
        if(letter == characters[j]){
            return true;
        }
    };
    return false;
};
function checkName(name){
    var num;
    name == firstName? num = 1 : num = 3;
    if(name.value.length < 3){
        showError(num, name);
    };
    for(var i = 0; i < name.value.length; i++){
        if(isNum(name.value[i])){
            showError(num + 1, name);
        }
    }
};
function checkDni(){
    if(DNI.value.length < 8){
        showError(5, DNI);
    };
    for(var i = 0; i < DNI.value.length; i++){
        if(isNum(DNI.value[i]) == false){
            showError(6, DNI);
            return false;
        };
    };    
};
function checkBirth(){
    var day = birthDate.value.substring(0,2);
    var month = birthDate.value.substring(3,5);
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year = birthDate.value.substring(6);
    if (year % 4 == 0){ //account for leap years
        monthLength[1] = 29;
    }
    if (birthDate.value.length != 10){
        showError(7, birthDate);
        return false;
    }
    else if(day > monthLength[month - 1]){
        showError(7, birthDate);
        return false;
    }
    else if(month > 12){
        showError(7, birthDate);
        return false;
    }
    else if(year < 1900 || year > 2021){
        showError(7, birthDate);
        return false;
    }
    else if(birthDate.value[2] != "/" || birthDate.value[5] != "/"){
        showError(7, birthDate);
        return false;
    }
    else{
        for(var i = 0; i < 10; i++){
            switch(i){
                case 2://only check character against numbers if they aren't the 3rd and 5th char("/")
                    break;
                case 5:
                    break;
                default:
                    for(var j = 0; j<10; j++){
                        if(isNum(birthDate.value[i]) == false){
                            showError(7, birthDate);
                            return false;
                            };
                        }
            };
        };
    };
};
function checkPhone(){
    if(phoneNumber.value.length != 10){
        showError(9, phoneNumber);
    }
    for(var i = 0; i < phoneNumber.value.length; i++){
        if(isNum(phoneNumber.value[i]) == false){
            showError(10, phoneNumber);
            return false;
        };
    };
};
function checkAddress(){
    if(address.value.indexOf(" ") == -1 || address.value.length < 5){  
        showError(11, address);
    };
    for(var i = 0; i < address.value.length; i++){
        console.log(address.value);
        if(isNum(address.value[i])){
            console.log(address.value[i] + i);
            return true;
        }
        else if(i == address.value.length -1 && isNum(address.value[i]) == false){
            console.log("asdas");
            showError(12, address);
            return false;
        };
    };
};
function checkLocation(){
    if(city.value.length < 4){
        showError(13, city);
    };
    for(var i = 0; i < city.value.length; i++){
        if(isAlphaNum(city.value[i]) == false){
            showError(14, city);
            return false;
        };
    };
};
function checkPostal(){
    if(postal.value.length != 4 && postal.value.length != 5){
        showError(15, postal);
    };
    for(var i = 0; i < postal.value.length; i++){
        if(isNum(postal.value[i]) == false){
            showError(16, postal);
        };
    };
};
function checkEmail(){ //check functionality
    if(email.value.indexOf("@") == -1 || email.value.indexOf("@") < 2){
        showError(17, email)
        return false;
    }
    else if(email.value.indexOf(".") == -1 || email.value.indexOf("@") < 4){
        showError(17, email);
        return false;
    }
    else if(email.value.length < 5){
        showError(17, email);
        return false;
    }
};
function checkPass(){ //check functionality
    if(password.value.length < 8){
        showError(18);
    }
    var temp = 0
    for(var i = 0; i < password.value.length; i++){
        if(isNum(passwod.value[i]) == false){
            temp ++;
            if(temp == passwod.value.length){
                showError(19);
                return false;
            };
        };
    };
    temp = 0;
    for(var i = 0; i < password.value.length; i++){
        if(isAlphaNum(passwod.value[i]) == false){
            temp ++;
            if(temp == passwod.value.length){
                showError(19);
                return false;
            };
        };
    };
};