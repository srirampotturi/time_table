function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check credentials (dummy data)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
		
    }
     else {
        alert('Invalid credentials. Please try again.');
    }
}
