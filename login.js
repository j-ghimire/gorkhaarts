// login.js

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate authentication (replace with server-side logic)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
