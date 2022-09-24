console.log(5);
window.onload = function () {
    var firstName = document.getElementById("first-name");
    console.log(firstName);
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var submitButton = document.getElementById("submit-button");
    
    function checkName(name){
        if(firstName.value.length < 3){
            var errorLength = document.getElementById("error1");
            var errorNumber = document.getElementById("error2");

            firstName.classList.add("red-border");
            errorLength.classList.add("show-text");
            for (var i = 0; i < firstName.value.length; i++){
                if ( Number(firstName.value[i]) != NaN){
                     console.log(errorNumber);
                     errorNumber.classList.add("show-text");
                 }
             }
        }
    }
    firstName.onblur = checkName;





    // firstName.onblur = function(name){
    //     if(firstName.value.length < 3){
    //         var errorLength = document.getElementById("error1");
    //         var errorNumber = document.getElementById("error2");

    //         firstName.classList.add("red-border");
    //         errorLength.classList.add("show-text");
    //         for (var i = 0; i < firstName.value.length; i++){
    //             if ( Number(firstName.value[i]) != NaN){
    //                 console.log(errorNumber);
    //                 errorNumber.classList.add("show-text");
    //             }
    //         }
    //     }
    // }
    submitButton.onclick = function(e){
        e.preventDefault();
    }

}