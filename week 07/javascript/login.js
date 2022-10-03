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
console.log('rose@radiumrocket.com');
console.log('BaSP2022');
function submitLogIn(){
    var urlLogIn = "https://basp-m2022-api-rest-server.herokuapp.com/login?";
    var showData = "";
    var errors = 0;
    showData += "Email: " + email.value + "\n";
    if(checkEmail() == false){
        showData += document.getElementById("error17").innerHTML + "\n";
        errors += 1;
    };
    var hidden = "";
    for(var i = 0; i < pass.value.length; i++){
        hidden += "*";
    };
    showData += "Password: " + hidden + "\n";
    if(checkPass().indexOf("2") != -1){
        showData += document.getElementById("error19").innerHTML + "\n";
        errors += 1;
    };
    // alert(showData);

    if(errors == 0){
        urlLogIn +=  "email=" + email.value + "&password=" + pass.value;
        fetch(urlLogIn)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            data = data.msg;
            if(data != "Employee logged"){
                data = "Error: " + data;
            }
            alert(data); //si no se cumplen las validaciones del server esto tira undefined, cómo uso la info del error?
        });
        // .catch(function(response){
        //     console.log(response);
        // });
    }
};

