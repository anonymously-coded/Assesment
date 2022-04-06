function passwordToggle () {
    const togglePassword = document.querySelector('#togglePassword');
    const pwd = document.querySelector('#pwd');
    const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
    pwd.setAttribute('type', type);
    togglePassword.className = togglePassword.className=="bi bi-eye-slash"?"bi bi-eye":"bi bi-eye-slash";
    }

function redirectPage () {
    var url = new URL("http://127.0.0.1:5501/pages/Registration.html");
    window.location.href = url;
}

function validateUserName() {
    var userNameRegex = /^[A-Za-z0-9_]{7,29}$/;
    var userNameId = document.getElementById("userNameId");
    var userNameValue = document.getElementById("uname").value;
    if (userNameRegex.test(userNameValue)){
        userNameId.classList.add("hidden");
    }else {
        userNameId.classList.remove("hidden");
        userNameId.style.color = "black";
    }
}

function validatePassword(){
    var passwordRegax = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    var passwordId = document.getElementById("passwordId");
    var passwordValue = document.getElementById("pwd").value;
    if (passwordRegax.test(passwordValue)){
        passwordId.classList.add("hidden");
    }else {
        passwordId.classList.remove("hidden");
        passwordId.style.color = "black";
    }
}

function validateLogin(){
    var passwordRegax = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/
    var passwordId = document.getElementById("passwordId");
    var passwordValue = document.getElementById("pwd").value;
    if (passwordRegax.test(passwordValue)){
        passwordId.classList.add("hidden");
    }else {
        passwordId.classList.remove("hidden");
        passwordId.style.color = "black";
        var url = new URL("http://127.0.0.1:5500/pages/Home.html");
        window.location.href = url;
    }
}