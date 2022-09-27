window.onload = function(){
    submitButton = document.getElementById("submit-button");
    submitButton.onclick = function(e){
        e.preventDefault();
    }
    email = document.getElementById("email");
    pass = document.getElementById("password1");
    submitButton = document.getElementById("submit-button");
    email.addEventListener("blur", checkEmail);
    pass.addEventListener("blur", checkPass);
    email.addEventListener("focus", function(){uncheck(17, email)});
    pass.addEventListener("focus", function(){uncheck(19, pass)});
    submitButton.addEventListener("click", submitLogIn);
};
function submitLogIn(){
    var showData = "";
    showData += "Email: " + email.value + "\n";
    if(checkEmail() == false){
        showData += document.getElementById("error17").innerHTML + "\n";
    };
    var hidden = "";
    for(var i = 0; i < pass.value.length; i++){
        hidden += "*";
    };
    showData += "Password: " + hidden + "\n";
    if(checkPass().indexOf("2") != -1){
        showData += document.getElementById("error19").innerHTML + "\n";
    };
    alert(showData);
};