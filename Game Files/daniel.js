const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "ComputerWhiz2000") {
        alert("Logged in");
        window.location.assign("daniel-site.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})