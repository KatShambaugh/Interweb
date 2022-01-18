const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
loginErrorMsg.style.opacity = 0;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const studentName = loginForm.name.value;
    const studentID = loginForm.studentID.value;

    if (studentName == "Ventura" && studentID === "16388463") {
        alert("Logging in for Katie Ventura");
        window.location.assign("inbox.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})