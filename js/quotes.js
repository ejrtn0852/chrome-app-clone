const quotes = document.getElementById("quotes-text");
const quotes2 = document.getElementById("quotes-text2");

const arob = [{
    quote : "인생에 뜻을 세우는데 적당한 때는 없다.",
    name: "-볼드윈",
},{
    quote:"승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
    name: "-J.하비스",
},{
    quote:"모든 일에는 이유가 있다.",
    name: "- Jeong Min Park"
}
,{
    quote:"인생은 가까이서 보면 비극, 멀리서 보면 희극이다.",
    name: "-찰리 채플린"
}]
const randomQuotes = () => {
   const arobIndex = arob[Math.floor(Math.random() * arob.length)];
    quotes.innerText = `${arobIndex.quote} ${arobIndex.name}`;
}

randomQuotes();

