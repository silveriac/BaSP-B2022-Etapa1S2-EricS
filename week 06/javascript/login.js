console.table(characters);
window.onload = function(){
    email = document.getElementById("email");
    pass = document.getElementById("password1");
    email.addEventListener("blur", checkEmail);
    pass.addEventListener("blur", checkPass);
    email.addEventListener("focus", function(){uncheck(17, email)});
    pass.addEventListener("focus", function(){uncheck(18, pass)});
};