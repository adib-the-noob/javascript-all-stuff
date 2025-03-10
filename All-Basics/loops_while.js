let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if (username === "admin" && password === "password") {
        loggedIn = true;
        alert("Welcome, admin!");
    } else {
        alert("Invalid username or password. Try again.");
    }
}