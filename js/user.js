const userForm = document.getElementById("user-form");

const userInfo = []
const UESR_KEY = "name";

const submitHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("user-login");
    const todoInput = document.getElementById("user-todo");
    const userValue = userInput.value;
    const todoValue = userTodo.value;
    userInfo.push(userValue);
    userInfo.push(todoValue);
    console.log(todovalue);
    valueHandler(userValue);
    saveUserInfo();
}

const valueHandler = (userValue) => {
    const userText = document.getElementById("user-text");
    const greeting = () => {
        userText.innerText = `${userValue}님`
    }
    setTimeout(greeting,3000)
    userText.innerText = `${userValue}님 환영합니다.`
} 

const saveUserInfo = () =>{
    localStorage.setItem(UESR_KEY, JSON.stringify(userInfo));
    localStorageData();

}



userForm.addEventListener("submit", submitHandler);

const localStorageData = () => {
    const saveUserInfos = localStorage.getItem(UESR_KEY);
    if(UESR_KEY !== null){
    const userInput = document.getElementById("user-login");
    userInput.style.display = "none";
    const parsedUserInfo = JSON.parse(saveUserInfos);
    const userText = document.getElementById("user-text");
    parsedUserInfo.forEach( (item) => userText.innerText = `${item}님 안녕하세요.`)
}

}

