function passwordToggle () {
const togglePassword = document.querySelector('#togglePassword');
const pwd = document.querySelector('#pwd');
const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
pwd.setAttribute('type', type);
togglePassword.className = togglePassword.className == "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash";
}

function validateName(){
    console.log("checking validation")
    var nameRegex = /^[A-Za-z]{1,15}$/
    var nameId = document.getElementById("nameId");
    var nameValue = document.getElementById("yname").value;
    var nameInputId = document.getElementById("yname"); 
    console.log(nameValue.match(nameRegex))
    
    if(nameRegex.test(nameValue)){
        nameId.classList.add("hidden");
        nameInputId.style.borderColor = "black";
    }else{
        nameId.classList.remove("hidden");
        nameId.style.color = "black"; 
        nameInputId.style.borderColor = "black";
    }
}

function validateUserName(){
    var userNameRegax = /^[A-Za-z0-9_]{7,29}$/;
    var userNameId = document.getElementById("userNameId");
    var userNameValue = document.getElementById("uname").value;
    if (userNameRegax.test(userNameValue)){
        userNameId.classList.add("hidden");
    } else {
        userNameId.classList.remove("hidden");
        userNameId.style.color = "black";
    }
}

function validateEmail(){
    var emailRegax = /([a-z0-9\._]{4,25})@([a-z]{3,8}\.[a-z]{2,5})/
    var emailId = document.getElementById('emailId');
    var emailValue = document.getElementById('email').value;
    if (emailRegax.test(emailValue)){
        emailId.classList.add("hidden");
    }else{
        emailId.classList.remove("hidden");
        emailId.style.color = "black";
    }
}

function validatePassword(){
    var passwordRegax = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    var passwordId = document.getElementById("passwordId");
    var passwordValue = document.getElementById("pwd").value;
    if(passwordRegax.test(passwordValue)){
        passwordId.classList.add("hidden");
    }else{
        passwordId.classList.remove("hidden");
        passwordId.style.color = "black";
    }
}

function validateConfirmPassword(){
    var confPasswordId = document.getElementById("confPasswordId");
    var confPasswordValue = document.getElementById("con_pwd").value;
    var passwordValue = document.getElementById("pwd").value;
    if(confPasswordValue == passwordValue){
        confPasswordId.classList.add("hidden");
    }else{
        confPasswordId.classList.remove("hidden");
        confPasswordId.style.color = "black";
    }
}

function validateForm(){
    var passwordValue = document.getElementById("pwd").value;
    var confPasswordValue = document.getElementById("con_pwd").value;
    var confPasswordId = document.getElementById("confPasswordId");
    if(confPasswordValue == passwordValue){
        alert("Registration success!!!");
        var url = new URL("http://127.0.0.1:5501/pages/login.html");
        window.location.href = url;
        }else {
        confPasswordId.classList.remove("hidden");
        confPasswordId.style.color = "black";
    }
}