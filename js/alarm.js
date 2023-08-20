
const alarmButton = document.getElementById("alarm-animation");
const alarmSpan = document.querySelector("#alarm-text > span");
const alarmText = document.getElementById("alarm-text");
let onOff = 0;
let whatValue = false;

let alarmLocal = [];
const ALARM_KEY = "id";

const stopHandler = () => {
    const alarmAni = document.querySelector(".alarm-button");
    const alarmTitle = document.querySelector(".alarm-title");
    alarmTitle.innerText = "Alarm"
    alarmTitle.style.color = "palevioletred";
    alarmAni.classList.remove("trans-alarm");
    
}


const alarmClock = (hoursValue) => {
    const date = new Date();
    let hours = date.getHours();
    const min = date.getMinutes();  
    hours = hours%12;
    let realMin = min;
    let hoursResult = (hours + hoursValue) % 12;
    hoursResult = hoursResult < 10 ? "0"+hoursResult : hoursResult
    realMin = realMin < 10 ? "0"+realMin : realMin
    alarmSpan.innerText = `${hoursResult}:${realMin}`
    const currentHours = `${hoursResult}`
    const currentMin =  `:${realMin}`;
    saveAlarm(currentHours,currentMin)
        hoursResult = parseInt(hoursResult);
    if(hours === hoursResult){
        const alarmAni = document.querySelector(".alarm-button");
        const alarmTitle = document.querySelector(".alarm-title");
        alarmAni.classList.add("trans-alarm");
        alarmTitle.style.color = "tomato";
        alarmTitle.innerText = "Check!";
        // 개발자의 능력부족으로 많은걸 해보고 싶었으나 시간이 촉박하여 hours알람 밖에 못맞췄음
        // 테스트를 하실진 모르겠지만 혹시 하시게 되거든 타이머 시간이 되면 알람이 울리는 거십니다
        // 테스트를 위해서 0을 눌러보으시면 됩니다 - 이상 멘탈나간 dog올림
    }
}


const clickHandler = () => {
    onOff++;
    alarmText.style.display = "flex";
    if(onOff%2 == 0) {
        onOff = 0;
        alarmText.style.display = "none";
    }
    const stopButton = document.getElementById("alarm-stop");
    stopButton.addEventListener("click", stopHandler);
}

const alarmSubmitHandler = (e) => {
    e.preventDefault()
    const alarmInputHours = document.getElementById("alarm-input__hours");
    const hoursValue = parseInt(alarmInputHours.value);
    alarmInputHours.value = "";
    if(isNaN(hoursValue) || hoursValue > 10){
        alarmSpan.innerText = "숫자만 입력(1~10)";
    }else {
        whatValue = true;
        alarmClock(hoursValue);
        const count = false;
    }
}

const saveAlarm = (currentHours,currentMin) => {
    const alarmObj = {
        id : Date.now(),
        hours: String(currentHours),
        min: currentMin
}
localStorage.setItem(ALARM_KEY,JSON.stringify(alarmObj));

}


alarmButton.addEventListener("click", clickHandler);
alarmText.addEventListener("submit", alarmSubmitHandler);


const currentLocalStorage = localStorage.getItem(ALARM_KEY);

if(currentLocalStorage !== null){
    const parseAlarm = JSON.parse(localStorage.id);
    alarmLocal = parseAlarm;
    alarmSpan.innerText = `${alarmLocal.hours} ${alarmLocal.min}`
}

if(whatValue === true ) {
    setInterval(alarmClock,1000)
}

