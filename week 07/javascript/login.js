window.onload = function(){
    submitButton = document.getElementById("submit-button");
    submitButton.onclick = function(e){
        e.preventDefault();
    };
    email = document.getElementById("email");
    pass = document.getElementById("password1");
    submitButton = document.getElementById("submit-button");
    modal = document.getElementsByClassName("modal");
    message = document.getElementById("message");
    errorsDiv = document.getElementById("error-div");
    okButton = document.getElementsByClassName("ok")
    email.addEventListener("blur", checkEmail);
    pass.addEventListener("blur", checkPass);
    email.addEventListener("focus", function(){uncheck(17, email)});
    pass.addEventListener("focus", function(){uncheck(19, pass)});
    okButton[0].addEventListener("click", closeModal);
    submitButton.addEventListener("click", submitLogIn);
    email.value = "rose@radiumrocket.com";
    pass.value = "BaSP2022";
};
function submitLogIn(){
    var fields = [email, pass];
    for(var i=0; i < fields.length; i++){
        var required = document.getElementById("required");
        if(fields[i].value.length){
            required.classList.remove("show");
            fields[i].classList.remove("red-border");
        }
        else{
            required.classList.add("show");
            console.log("asdasd")
            fields[i].classList.add("red-border");
            return false;
        };
    };
    var errors = 0;
    var urlLogIn = "https://basp-m2022-api-rest-server.herokuapp.com/login?";
    userData = document.getElementsByClassName("data");
    errorAlerts = document.getElementsByClassName("error-alert");
    if(checkEmail() == false){
        createPTag("error-alert", document.getElementById("error17").innerHTML);
        errors += 1;
    };
    if(checkPass().indexOf("2") != -1){
        createPTag("error-alert", document.getElementById("error18").innerHTML);
        errors += 1;
    };
    if(checkPass().indexOf("1") != -1){
        createPTag("error-alert", document.getElementById("error19").innerHTML);
        errors += 1;
    };
    if(errors != 0){
        createPTag("data", ("Email:  " + email.value))

        var hidden = "";
        for(var i = 0; i < pass.value.length; i++){
            hidden += "*";
        };
        createPTag("data", ("Password:  " + hidden))


        okButton[0].innerHTML = "Try again";
        errorsDiv.classList.remove("none");
    }
    else{
        urlLogIn +=  "email=" + email.value + "&password=" + pass.value;
        var message = document.getElementById("message");
        fetch(urlLogIn)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            if(response.success == true){
                message.innerHTML += response.msg
                okButton[0].innerHTML = "Ok"
            }
            else{
                errorsDiv.classList.add("show");
                createPTag("error-alert", response.msg);
                okButton[0].innerHTML = "Back";
                throw new Error("Could not log in");
            };
        })
        .catch(function(error){
            message.innerHTML += error;
        });
    };
    modal[0].classList.add("show");
};
function request(url){

}
