const clockTitle = document.getElementById("clock");


const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    const ampm = hours < 12 ?  "am" : "pm";
    hours = hours%12;
    hours = hours < 10 ? "0"+hours : hours
    min = min < 10 ? "0"+min : min
    clockTitle.innerText = `${hours}:${min} ${ampm}`
}

setInterval(clock,1000);