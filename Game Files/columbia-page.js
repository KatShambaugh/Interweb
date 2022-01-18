const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const hallName = loginForm.hall.value;

    if (hallName === "Halstead") {
        alert("Redirecting to Halstead Hall");
        window.location.assign("halstead-hall.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})