let email = document.getElementById("email");
let password = document.getElementById("password");
let mobNum = document.getElementById("mobileNumber");
let Emailerror = document.getElementById("Emailerror");
let MobNumerror = document.getElementById("MobNumerror");
let pwderror = document.getElementById("pwderror");


function validate() {
    let emailval = Emailvalidate();
    let passval = passValidate();
    let mobval = mobvalidate();
   
    if (emailval && passval && mobval) {
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
        pwderror.innerHTML = "Valid";
        pwderror.style.color = "green";
        pwderror.style.border = "4px solid green";
        return true;
    } else if (mediumRegex.test(password.value)) {
        pwderror.innerHTML = "Valid";
        pwderror.style.color = "green";
        pwderror.style.border = "4px solid orange";
        return true;
    } else {
        alert("Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit.");
        pwderror.innerHTML = "Invalid";
        pwderror.style.color = "red";
        pwderror.style.border = "4px solid red";
        return false;
    }
}

function mobvalidate() {
    let phoneRegex = /^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (phoneRegex.test(mobNum.value)) {
        MobNumerror.innerHTML = "Valid";
        MobNumerror.style.color = "green";
        return true;
    }
    else {
        alert("Please enter a valid phone number");
        MobNumerror.innerHTML = "Invalid";
        MobNumerror.style.color = "red";
        return false;
    }
}