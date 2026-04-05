document.getElementById('eyeIcon').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert('Welcome to Game Items Shop!\nLogging in as: ' + email);
});
