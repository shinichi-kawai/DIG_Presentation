'use strict'

//時間処理関数呼び出し（ループ）
function showNowTime() {
    nowTime(); //時間表示する
    restart(); //1000msec 待つ
}

//時刻表示用
function nowTime(){
    //indexから時間のelementIDを取得する
    const hour_time = document.getElementById("nowHour");      
    const minute_time =document.getElementById("nowMin");  
    const second_time = document.getElementById("nowSec"); 

    hour_time.textContent = String(new Date().getHours()).padStart(2,"0");
    minute_time.textContent=String(new Date().getMinutes()).padStart(2,"0");
    second_time.textContent=String(new Date().getSeconds()).padStart(2,"0");
}

//1000msec　wait
function restart(){
    setTimeout(showNowTime,1000); 
}

window.alert("表示確認 使ってみたかっただけ！");

//時間表示
showNowTime()

let favoriteThingCount = 0;
const favoriteThingSlide = [
    "favoriteThingSlide1.gif",
    "favoriteThingSlide2.jpg",
    "favoriteThingSlide3.jpg",
    "favoriteThingSlide4.png",
    "favoriteThingSlide5.png"
];
const impressionsSlide = "DIGの所感.png";
const impressions = document.getElementById("impressions");
const favoriteThing = document.getElementById("favoriteThing");

function displayFavoriteThing(){
    document.getElementById("outputArea").src  = favoriteThingSlide[favoriteThingCount];
    favoriteThingCount += 1;
    if ( favoriteThingCount === 3 ) {
        favoriteThingCount = 0;
    }
}
function displayImpressions(){
    document.getElementById("outputArea").src  = impressionsSlide;
}

favoriteThing.addEventListener("click",() =>
    displayFavoriteThing ()
);
impressions.addEventListener("click",() =>
    displayImpressions ()
);
