// Predefined user credentials
const users = {
    admin: 'admin123',
    admin: 'admin1234',
    teacher: 'teacher123',
    student: 'student123'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (users[username] && users[username] === password) {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});
