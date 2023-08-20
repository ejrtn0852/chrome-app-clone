const loginInput = document.getElementById("login-id");
const loginText = document.getElementById("login-text");
const loginBtn = document.getElementById("login-btn")
const form = document.getElementById("form");


const loginHandler = (e) =>{
    e.preventDefault()
        loginInput.style.display = "none";
        loginBtn.style.display = "none";
        loginText.innerText = `${loginInput.value}님 환영합니다!`
}

form.addEventListener("submit", loginHandler)