let email = document.getElementById("email");
let password = document.getElementById("password");

let Emailerror = document.getElementById("EmailError");
let pwderror = document.getElementById("pwdError");

function validate() {
    let emailval = Emailvalidate();
    let passval = passValidate();

     if (emailval && passval) {
        return true;
    }
    else {
        return false;
    }
}

function Emailvalidate() {
    let emailregexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (emailregexp.test(email.value)) {
        Emailerror.innerHTML = "Valid";
        Emailerror.style.color = "green";
        return true;
    }
    else {
        Emailerror.innerHTML = "Invalid";
        Emailerror.style.color = "red";
        return false;
    }
}

function passValidate() {
    let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (strongRegex.test(password.value)) {
        pwderror.innerHTML = "Strong";
        pwderror.style.color = "green";
        // pwderror.style.border = "4px solid green";
        return true;
    } else if (mediumRegex.test(password.value)) {
        alert("Password must be at least 8 characters long, contain one uppercase letter and lowercase letter");
        pwderror.innerHTML = "Medium";
        pwderror.style.color = "orange";
        // pwderror.style.border = "4px solid orange";
        return false;
    } else {
        alert("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit.");
        pwderror.innerHTML = "Poor";
        pwderror.style.color = "red";
        // pwderror.style.border = "4px solid red";
        return false;
    }
}