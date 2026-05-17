function showLoginHelp() {
    alert("Username is Student48 and Password is Peroxide");
}
function login() {
    const username = document.getElementById("usernameInp").value;
    const password = document.getElementById("passwordInp").value;
    const messageElem = document.getElementById("loginMessage");

    switch (true) {
        case (username === "Student48" && password === "Peroxide"):
            messageElem.textContent = "Login successful! Welcome, " + username + ".";
            messageElem.style.color = "green";
            window.location.href = "notebooks.html";
            break;
        default:
            messageElem.textContent = "Incorrect Username or Password. Please try again.";
            messageElem.style.color = "red";
    }
}
function toggleVisi(){
    const passwordInput = document.getElementById("passwordInp");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}