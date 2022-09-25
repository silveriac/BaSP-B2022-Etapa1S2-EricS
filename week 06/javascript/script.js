
var firstName;
var lastName;
var DNI;
var birthDate;
var phoneNumber;
var address;
// var email;
// var submitButton;
window.onload = function(){
    firstName = document.getElementById("first-name");
    lastName = document.getElementById("last-name");
    DNI = document.getElementById("DNI");
    birthDate = document.getElementById("birth-date");
    phoneNumber = document.getElementById("phone-number");
    address = document.getElementById("address");
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

    //focus
    firstName.addEventListener("focus", () => uncheck(1, firstName));
    lastName.addEventListener("focus", () => uncheck(3, lastName));
    DNI.addEventListener("focus", () => uncheck(5, DNI));
    birthDate.addEventListener("focus", () => uncheck(7, birthDate));
    phoneNumber.addEventListener("focus", () => uncheck(9, phoneNumber));
    address.addEventListener("focus", uncheck(11, address));
};
function uncheck(number, field){
    console.log("uncheck");
    var errorLength = document.getElementById("error" + number);
    var errorNumber = document.getElementById("error" + (number+1));
    field.classList.remove("red-border");
    errorLength.classList.remove("show-text");
    if(number != 7){
        errorNumber.classList.remove("show-text");
    }
};
function checkName(name){
    var temp;
    name == firstName? temp = 1 : temp = 3;
    var errorLength = document.getElementById("error" + temp);
    var errorNumber = document.getElementById("error" + (temp+1));
    if(name.value.length < 3){
        name.classList.add("red-border");
        errorLength.classList.add("show-text");
    };
    for(var i = 0; i < name.value.length; i++){
        for(var j = 0; j<10; j++){
            if(Number(name.value[i]) == j){
                name.classList.add("red-border");
                errorNumber.classList.add("show-text");
                break;
            };
        };
    };
};
function checkDni(){
    var errorLength = document.getElementById("error5");
    var errorNumber = document.getElementById("error6");
    if(DNI.value.length < 8){
        DNI.classList.add("red-border");
        errorLength.classList.add("show-text");
    }
    for(var i = 0; i < DNI.value.length; i++){
        for(var j = 0; j<10; j++){
            if(Number(DNI.value[i]) != j){
                if(j==9){
                    DNI.classList.add("red-border");
                    errorNumber.classList.add("show-text");
                };
            }
            else{
                break;
            };
        };
    };
};
function checkBirth(){
    var error = document.getElementById("error7");
    function printError(){
        birthDate.classList.add("red-border");
        error.classList.add("show-text");
    }
    var day = birthDate.value.substring(0,2);
    var month = birthDate.value.substring(3,5);
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year = birthDate.value.substring(6);
    if (year % 4 == 0){ //account for leap years
        monthLength[1] = 29;
    }
    if (birthDate.value.length != 10){
        printError();
        return false;
    }
    else if(day > monthLength[month - 1]){
        printError();
        return false;
    }
    else if(month > 12){
        printError();
        return false;
    }
    else if(year < 1900 || year > 2021){
        printError();
        return false;
    }
    else if(birthDate.value[2] == "/" && birthDate.value[5] == "/"){
        for(var i = 0; i < 10; i++){
            switch(i){
                case 2:
                    break;
                case 5:
                    break;
                default:
                    for(var j = 0; j<10; j++){
                        if(Number(birthDate.value[i]) != j){
                            if(j == 9){
                                printError();
                                return false;
                            };
                        }
                        else{
                            break;
                        };
                    };
            };
        };
    };
};
function checkPhone(){
    var errorLength = document.getElementById("error9");
    var errorNumber = document.getElementById("error10");
    if(phoneNumber.value.length != 10){
        phoneNumber.classList.add("red-border");
        errorLength.classList.add("show-text");
    }
    for(var i = 0; i < phoneNumber.value.length; i++){
        for(var j = 0; j<10; j++){
            if(Number(phoneNumber.value[i]) == j){
                break;
            }
            else if(j==9){
                phoneNumber.classList.add("red-border");
                errorNumber.classList.add("show-text");
            };
        };
    };
}


//no funciona, let's check tomorrow
function checkAddress(){
    var error1 = document.getElementById("error11");
    var error2 = document.getElementById("error12");
    function printError(number){
        address.classList.add("red-border");
        switch(number){
        case 1:
            error1.classList.add("show-text");
            break;
        case 2:
            error2.classList.add("show-text");
            break;
        default:
            return false;
        }
    }
    if(address.value.indexOf(" ") == -1 || address.value.length < 5){
        printError(1)
        return false;
    };
    for(var i = 0; i < address.value.length; i++){
        for(var j = 0; j<10; j++){
            if(Number(address.value[i]) == j){
                break;
            }
            else if(j==9){
                printError(2)
                return false;
            };
        };
    };
}