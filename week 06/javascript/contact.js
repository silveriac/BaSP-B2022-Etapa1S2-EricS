var userName;
var email;
var message;
var contactArea;
var submitButton;
var characters = "abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ.,:;¡!¿?()=*+-%/@&{}[]´.<>|_";
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
window.onload = function(){
    submitButton = document.getElementById("submit");
    submitButton.onclick = function(e){
        e.preventDefault();
    }
    userName = document.getElementById("user-name");
    email = document.getElementById("email");
    message = document.getElementById("message");
    contactArea = document.getElementById("contact-area");
    submitButton.addEventListener("click", submitMessage);
    function listenEvents(field, func, error){
        field.addEventListener("blur", func);
        field.addEventListener("focus", function(){uncheck(error, field)});
    };
    listenEvents(userName, checkName, 1);
    listenEvents(email, checkEmail, 3);
    listenEvents(contactArea, checkArea, 7);
    listenEvents(message, checkMessage, 8);
};
function uncheck(number, field){
    var firstError = document.getElementById("error" + number);
    var SecondError = document.getElementById("error" + (number+1));
    field.classList.remove("red-border");    
    firstError.classList.remove("show-text");
    if(number != 7 && number != 8){ //the corresponding fields have only one possible error
        try{SecondError.classList.remove("show-text");}
        catch{};
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
function acceptCharacters(letter){
    for (var j = 0; j < characters.length; j++){
        if(letter == characters[j]){
            return true;
        }
    };
    return false;
};
function checkName(){
    var check = [];
    if(userName.value.length < 3){
        showError(1, userName);
        check += "1";
    };
    for(var i = 0; i < userName.value.length; i++){
        if(isNum(userName.value[i])){
            showError(2, userName);
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
    console.log('asd');
    var check = "";
    if(email.value.length < 1){
        showError(3, email);
        check += "1";
    console.log('asd1');

    };
    if(emailExpression.test(email.value) == false){
        showError(4, email);
        check += "2";
    console.log('asd2');

    };
    if (check == ""){
    console.log('asd3');

        return "3";
        
    }
    else{
    console.log(check);

        return check;
    };
};
function checkArea(){
    if(contactArea.value == "none"){
        showError(7, contactArea);
        return false;
    };
    return true;
}
function checkMessage(){
    var check = "";
    if(message.value.length < 3){
        showError(8, email);
        return false;
    };
    return true;
};
function submitMessage(){
    var showData = "";
    function addData(number, func, data){
        if(func(data).indexOf("1") != -1){
            showData += document.getElementById("error" + number).innerHTML + "\n";
        };
        if(func(data).indexOf("2") != -1){
            showData += document.getElementById("error" + (number + 1)).innerHTML + "\n";
        };
    };
    showData += "Name: " + userName.value + "\n";
    addData(1, checkName, userName);
    showData += "Email: " + email.value + "\n";
    addData(3, checkEmail, email);

    showData += "Contact area: " + contactArea.value + "\n";
    if(checkArea() == false){
        showData += document.getElementById("error7").innerHTML + "\n";
    };
    showData += "Message: " + message.value + "\n";
        if(checkMessage() == false){
        showData += document.getElementById("error8").innerHTML + "\n";
    };
    alert(showData);
};