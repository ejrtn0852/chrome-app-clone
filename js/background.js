

const body = document.querySelector("body");
export const bgImg = document.createElement("img");
const alarm = document.querySelector("#alarm-animation > i");

const secondBg = "http://127.0.0.1:5500/backgruondImg/wow.jpeg";
export const firstBg = "http://127.0.0.1:5500/backgruondImg/chromAppImg2.jpeg";

const bgImgArr = ["chromAppImg2.jpeg","wow.jpeg"];
const bgIndex = bgImgArr[Math.floor(Math.random() * bgImgArr.length)];


bgImg.src = `backgruondImg/${bgIndex}`;
body.appendChild(bgImg);


if(bgImg.src === secondBg){
    alarm.style.color = "white";
}