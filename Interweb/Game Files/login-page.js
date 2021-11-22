const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "katieventura" && password === "LyfeIsG00d") {
        alert("You have successfully logged in.");
        window.location.assign("secret.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})