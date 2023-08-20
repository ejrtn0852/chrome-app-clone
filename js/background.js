

const body = document.querySelector("body");
export const bgImg = document.createElement("img");
const alarm = document.querySelector("#alarm-animation > i");

const secondBg = "https://ejrtn0852.github.io/chrome-js/backgruondImg/wow.jpeg";
export const firstBg = "https://ejrtn0852.github.io/chrome-js/backgruondImg/chromAppImg2.jpeg";

const bgImgArr = ["chromAppImg2.jpeg","wow.jpeg"];
const bgIndex = bgImgArr[Math.floor(Math.random() * bgImgArr.length)];


bgImg.src = `backgruondImg/${bgIndex}`;
body.appendChild(bgImg);


if(bgImg.src === secondBg){
    alarm.style.color = "white";
}