const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const welcomeText = document.getElementById("welcome-text");

const localStorageArray = [];
const USER_KEY = "user";


const submitHandler = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    localStorageArray.push(nameValue);
    reaction(nameValue);
    saveNameFn();
}

const reaction = (nameValue) => {
    nameInput.style.display = "none";
    welcomeText.style.display = "block";
    welcomeText.innerText = `${nameValue}님 환영합니다.`;
}

const saveNameFn = () => {
    localStorage.setItem(USER_KEY ,JSON.stringify(localStorageArray));
}




nameForm.addEventListener("submit", submitHandler);

const saveName = localStorage.getItem(USER_KEY );

if(saveName !== null) {
    const parseName = JSON.parse(localStorage.user);
    nameInput.style.display = "none";
    welcomeText.style.display = "block";
    welcomeText.innerText = `${parseName}님 환영합니다!`
}
