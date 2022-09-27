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
var passRepeat;
var submitButton;
var characters = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
window.onload = function(){
    submitButton = document.getElementById("submit-button");
    submitButton.onclick = function(e){
        e.preventDefault();
    }
    firstName = document.getElementById("first-name");
    lastName = document.getElementById("last-name");
    DNI = document.getElementById("DNI");
    birthDate = document.getElementById("birth-date");
    phoneNumber = document.getElementById("phone-number");
    address = document.getElementById("address");
    city = document.getElementById("city");
    postal = document.getElementById("postal");
    email = document.getElementById("email");
    pass = document.getElementById("password1");
    passRepeat = document.getElementById("password2")
    submitButton.addEventListener("click", submitSignUp);
    function blurListen(field, func){
        field.addEventListener("blur", func);
    };
    function focusListen(error, field){
        field.addEventListener("focus", function(){uncheck(error, field)})
    };
    firstName.addEventListener("blur", function(){checkName(firstName)});
    lastName.addEventListener("blur", function(){checkName(lastName)});
    blurListen(DNI, checkDni);
    blurListen(birthDate, checkBirth);
    blurListen(phoneNumber, checkPhone);
    blurListen(address, checkAddress);
    blurListen(city, checkLocation);
    blurListen(postal, checkPostal);
    blurListen(email, checkEmail);
    blurListen(pass, checkPass);
    blurListen(passRepeat, checkPassRepeat);
    focusListen(1, firstName);
    focusListen(3, lastName);
    focusListen(5, DNI);
    focusListen(7, birthDate);
    focusListen(9, phoneNumber);
    focusListen(11, address);
    focusListen(13, city);
    focusListen(15, postal);
    focusListen(17, email);
    focusListen(18, pass);
    focusListen(20, passRepeat);
};
function uncheck(number, field){
    var firstError = document.getElementById("error" + number);
    var SecondError = document.getElementById("error" + (number+1));
    field.classList.remove("red-border");    
    firstError.classList.remove("show-text");
    if(number != 7 && number != 17 && number != 20){ //the corresponding fields have only one possible error
        try{SecondError.classList.remove("show-text");}
        catch{};//Login page fields only have one error"
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
    else if(temp || temp == 0){
        return "3";
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
    var check = [];
    name == firstName? num = 1 : num = 3;
    if(name.value.length < 3){
        showError(num, name);
        check += "1";
    };
    for(var i = 0; i < name.value.length; i++){
        if(isNum(name.value[i])){
            showError(num + 1, name);
            check += "2";
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkDni(){
    var check = ""
    if(DNI.value.length < 8){
        showError(5, DNI);
        check += "1"
    };
    for(var i = 0; i < DNI.value.length; i++){
        if(isNum(DNI.value[i]) == false){
            showError(6, DNI);
            check += "2"
            break;
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkBirth(){
    if(birthDate.value.substring(0,4) < 1900 || birthDate.value.substring(0,4) > 2020){
        showError(7, birthDate);
        return false;
    };
};
function checkPhone(){
    var check = "";
    if(phoneNumber.value.length != 10){
        showError(9, phoneNumber);
        check += "1";
    }
    for(var i = 0; i < phoneNumber.value.length; i++){
        if(isNum(phoneNumber.value[i]) == false){
            showError(10, phoneNumber);
            check += "2";
            break;
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkAddress(){
    var check = "";
    if(address.value.indexOf(" ") == -1 || address.value.length < 5){
        showError(11, address);
        check += "1";
    };
    for(var i = 0; i < address.value.length; i++){
        if(isNum(address.value[i])){
            break;
        }
        else if(i == address.value.length -1 && isNum(address.value[i]) == false){
            showError(12, address);
            check += "2";
            break;
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkLocation(){
    var check = "";
    if(city.value.length < 4){
        showError(13, city);
        check += "1"
    };
    for(var i = 0; i < city.value.length; i++){
        if(isAlphaNum(city.value[i]) == false){
            showError(14, city);
            check += "2";
            break;
        };
    };
    if (check == ""){
        return true;
    }
    else{
        return check;
    };
};
function checkPostal(){
    var check = "";
    if(postal.value.length != 4 && postal.value.length != 5){
        showError(15, postal);
        check += "1"
    };
    for(var i = 0; i < postal.value.length; i++){
        if(isNum(postal.value[i]) == false){
            showError(16, postal);
            check += "2";
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkEmail(){
    if (emailExpression.test(email.value) == false){
        showError(17, email);
        return false;
    };
};
function checkPass(){
    var check = "";
    if(pass.value.length < 8){
        try{showError(18, pass);}
        catch{};
        check += "1";
    };
    var temp = 0;
    for(var i = 0; i < pass.value.length; i++){
        if(isNum(pass.value[i])){
            break;
        }
        else if(isNum(pass.value[i]) == false){
            temp++;
            if(temp == pass.value.length){
                showError(19, pass);
                check += "2";
                break;
            };
        };
    };
    for(var j = 0; j < pass.value.length; j++){
        if(isAlphaNum(pass.value[j]) == false || (pass.value[j]) == " "){
            showError(19, pass);
            check += "2";
            break;
        };
    };
    if (check == ""){
        return "3";
    }
    else{
        return check;
    };
};
function checkPassRepeat(){
    if(pass.value != passRepeat.value){
        showError(20, passRepeat);
        return false;
    };
};
function submitSignUp(){
    var showData = "";
    function addData(number, func, data){
        if(func(data).indexOf("1") != -1){
            showData += document.getElementById("error" + number).innerHTML + "\n";
        };
        if(func(data).indexOf("2") != -1){
            showData += document.getElementById("error" + (number + 1)).innerHTML + "\n";
        };
    };
    showData += "Name: " + firstName.value + "\n";
    addData(1, checkName, firstName);
    showData += "Last name: " + lastName.value + "\n";
    addData(3, checkName, lastName);
    showData += "DNI: " + DNI.value + "\n";
    addData(5, checkDni, null);
    var birthDatecorrected = "";
    birthDatecorrected +=
    birthDate.value.substring(8) + "/" + birthDate.value.substring(5,7) + "/"  + birthDate.value.substring(0,4);
    showData += "Birth date: " + birthDatecorrected + "\n";
    if(checkBirth() == false){
        showData += document.getElementById("error7").innerHTML + "\n";
    };
    showData += "Phone number: " + phoneNumber.value + "\n";
    addData(9, checkPhone);
    showData += "Address: " + address.value + "\n";
    addData(11, checkAddress);
    showData += "Location: " + city.value + "\n";
    addData(13, checkLocation);
    showData += "Postal code: " + postal.value + "\n";
    addData(15, checkPostal);
    showData += "Email: " + email.value + "\n";
    if(checkEmail() == false){
        showData += document.getElementById("error17").innerHTML + "\n";
    };
    var hidden = "";
    for(var i = 0; i < pass.value.length; i++){
        hidden += "*";
    };
    showData += "Password: " + hidden + "\n";
    addData(18, checkPass);
    showData += "Repeated password: " + hidden + "\n";
    if(checkPass() == false){
        showData += document.getElementById("error20").innerHTML + "\n";
    };
    alert(showData);
};