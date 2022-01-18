const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const location = loginForm.location.value;

    if (location === "42.008902, -74.476440") {
        alert("Correct!");
        window.location.assign("final.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})