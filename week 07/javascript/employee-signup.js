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
var fields = [];
var submitButton;
var urlSignUp;
var characters = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var modal;
var message;
var errorsDiv;
var okButton;
var errorAlerts;
var userData;
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
window.onload = function(){
    submitButton = document.getElementById("submit-button");
    submitButton.onclick = function(e){
        e.preventDefault();
    };
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
    passRepeat = document.getElementById("password2");
    modal = document.getElementsByClassName("modal");
    message = document.getElementById("message");
    errorsDiv = document.getElementById("error-div");
    okButton = document.getElementsByClassName("ok");
    function blurListen(field, func){
        field.addEventListener("blur", func);
    };
    function focusListen(error, field){
        field.addEventListener("focus", function(){uncheck(error, field)})
    };
    submitButton.addEventListener("click", submitSignUp);       
    okButton[0].addEventListener("click", function(){closeModal(0)});
    okButton[1].addEventListener("click", function(){request(urlSignUp)});
    okButton[2].addEventListener("click", function(){closeModal(0)});
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
    firstName.value = localStorage.getItem('Name');
    lastName.value = localStorage.getItem('Last Name');
    DNI.value = localStorage.getItem('DNI');
    birthDate.value = localStorage.getItem('Date of Birth');
    phoneNumber.value = localStorage.getItem('Phone Number');
    address.value = localStorage.getItem('Address');
    city.value = localStorage.getItem('City');
    postal.value = localStorage.getItem('Zip code');
    email.value = localStorage.getItem('Email');
    pass.value = localStorage.getItem('Password');
    passRepeat.value = localStorage.getItem('Password');
};
function uncheck(number, field){
    var firstError = document.getElementById("error" + number);
    var SecondError = document.getElementById("error" + (number+1));
    field.classList.remove("red-border");    
    firstError.classList.remove("show");
    if(number != 7 && number != 17 && number != 20){ //the corresponding fields have only one possible error
        try{SecondError.classList.remove("show");}
        catch{};//Login page fields only have one error"
    };
};
function showError(number, field){
    var error = document.getElementById("error" + number);
    error.classList.add("show");
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
// function isEmpty(field){
//     if(field.value.length){
//         return true;
//     };
//     field.classList.add("red-border");
// };
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
        return "3";
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
function createPTag(addClass, content){
    var text = document.createElement("p");
    text.appendChild(document.createTextNode(content));
    text.classList.add(addClass);
    errorsDiv.appendChild(text);
};
function submitSignUp(){
    fields = [firstName, lastName, DNI, birthDate, phoneNumber, address, city, postal, email, pass, passRepeat];
    for(var i=0; i < fields.length; i++){ //don't open modal if there's any emprty field
        var required =document.getElementById("required");
        if(fields[i].value.length){
            required.classList.remove("show");
            fields[i].classList.remove("red-border");
        }
        else{
            required.classList.add("show");
            fields[i].classList.add("red-border");
            return false;
        };
    };
    var errors = 0;
    urlSignUp = "https://basp-m2022-api-rest-server.herokuapp.com/signup?"
    errorAlerts = document.getElementsByClassName("error-alert");
    userData = document.getElementsByClassName("data");
    function addErrors(number, error, func, data){
        if(func(data).indexOf("1") != -1){
            errorAlerts[number].innerHTML += document.getElementById("error" + error).innerHTML;
            errors += 1;
        };
        if(func(data).indexOf("2") != -1){
            errorAlerts[number].innerHTML += document.getElementById("error" + (error + 1)).innerHTML;
            errors += 1;
        };
    };
    function addData(number, text, data){
        userData[number].innerHTML += text;
        if(data.value){
            userData[number].innerHTML += data.value;
        }
        else{
            userData[number].innerHTML += data; //some of these are already sent as a strin arguments
        };        
    };
    addData(0, "Name:  ", firstName);
    addData(1, "Last name:  ", lastName);
    addData(2,  "DNI:  ", DNI);
    var birthDatecorrected = "";
    birthDatecorrected +=
    birthDate.value.substring(5, 7) + "/"  + birthDate.value.substring(8) + "/" + birthDate.value.substring(0,4);
    addData(3, "Birth date:  ",birthDatecorrected)
    addData(4, "Phone Number:  ", phoneNumber);
    addData(5, "Address:  ", address);
    addData(6, "Location:  ", city);
    addData(7, "Postal code:  ", postal);
    addData(8, "Email:  ", email);
    var hidden = "";
    for(var i = 0; i < pass.value.length; i++){
        hidden += "*";
    };
    addData(9, "Password:  ", hidden)
    addErrors(0, 1, checkName, firstName);
    addErrors(1, 3, checkName, lastName);
    addErrors(2, 5, checkDni);
    if(checkBirth() == false){
        errorAlerts[3] += document.getElementById("error7").innerHTML;
        errors += 1;
    };
    addErrors(4, 9, checkPhone);
    addErrors(5, 11, checkAddress);
    addErrors(6, 13, checkLocation);
    addErrors(7, 15, checkPostal);
    if(checkEmail() == false){
        errorAlerts[8] += document.getElementById("error17").innerHTML;
        errors += 1;
    };
    addErrors(9, 18, checkPass);
    if(checkPassRepeat() == false){
        errorAlerts[9] += document.getElementById("error20").innerHTML;
        errors += 1;
    };
    modal[0].classList.add("show");
    if(errors == 0){
        urlSignUp +=  "name=" + firstName.value + "&lastName=" + lastName.value + "&dni=" + DNI.value + "&dob="
        + birthDatecorrected + "&phone=" + phoneNumber.value + "&address=" + address.value + "&city=" + city.value + "&zip="
        + postal.value + "&email=" +  email.value + "&password=" + pass.value;
        okButton[0].innerHTML = "Back";
        okButton[1].classList.remove("none");
    }
    else{
        okButton[0].innerHTML = "Correct errors";
        okButton[1].classList.add("none");
    };
};
function request(url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        message = document.getElementById("message");
        modal[1].classList.add("show");
        if(response.success == true){
            message.innerHTML = response.msg
            localStorage.setItem('Name', response.data.name);
            localStorage.setItem('Last Name', response.data.lastName);
            localStorage.setItem('DNI', response.data.dni);
            localStorage.setItem('Date of Birth',
            response.data.dob.substring(6) +"-"+ response.data.dob.substring(0,2) +"-"+ response.data.dob.substring(3,5));
            localStorage.setItem('Phone Number', response.data.phone);
            localStorage.setItem('Address', response.data.address);
            localStorage.setItem('City', response.data.city);
            localStorage.setItem('Zip code', response.data.zip);
            localStorage.setItem('Email', response.data.email);
            localStorage.setItem('Password', response.data.password);
        }
        else{
            for(var i=0; i<response.errors.length; i++){
                createPTag("error-alert", ("Error: " + response.errors[i].msg));
            };
            throw new Error("Could not create user");
        };
    })
    .catch(function(error){
        message.innerHTML = error;
    });
};
function closeModal(){
    modal[0].classList.remove("show");
    try{modal[1].classList.remove("show");}
    catch{};
    for(var i=0; i < userData.length; i++){
        userData[i].innerHTML = "";
        errorAlerts[i].innerHTML = "";
    }
    message.innerHTML = "";
    while(errorsDiv.firstChild){
        errorsDiv.removeChild(errorsDiv.lastChild);
        i++;
    };
    errorsDiv.classList.remove("show");
};