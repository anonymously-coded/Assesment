function passwordToggle () {
    const togglePassword = document.querySelector('#togglePassword');
    const pwd = document.querySelector('#pwd');
    const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
    pwd.setAttribute('type', type);
    togglePassword.className = togglePassword.className=="bi bi-eye-slash"?"bi bi-eye":"bi bi-eye-slash";
    }