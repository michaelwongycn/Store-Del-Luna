function inputvalidation(){
    
    var username = document.forms["form-register"]["form-username"].value;
    var password = document.forms["form-register"]["form-password"].value;
    var confirm_password = document.forms["form-register"]["form-confirmation-password"].value;
    var fullname = document.forms["form-register"]["form-fullname"].value;
    var gender = document.forms["form-register"]["form-gender"].value;
    var email = document.forms["form-register"]["form-email"].value;
    var age = document.forms["form-register"]["form-age"].value;
    var agree = document.getElementById("form-agreed").checked;
    
    if(username == ""){
        alert("Username can't be Empty!");
        return false;
    }

    if(username.length < 5) {
        alert("Username must have 5 or more character");
        return false;
    }

    if(password == ""){
        alert("Password can't be Empty!");
        return false;
    }
  
    if(password.length < 5) {
        alert("Password must have 5 or more character");
        return false;
    }

    if(confirm_password != password){
        alert("Password doesn't match!");
        return false;
    }

    if(fullname == ""){
        alert("Full Name can't be Empty!");
        return false;
    }

    if(gender == ""){
        alert("Please choose your gender");
        return false;
    }

    if(email == ""){
        alert("Email can't be Empty!");
        return false;
    }

    if(!(email.includes("@")) && !(email.includes("."))){
        alert("Not a valid email address");
        return false;
    }

    if(age == ""){
        alert("Please enter your age");
        return false;
    }

    if(age < 17){
        alert("You must be 17 or older to register");
        return false;
    }

    if(!agree){
        alert("You must agree to terms and conditions to continue");
        return false;
    }

    alert("Register success");
    return true;  
}