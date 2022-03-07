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
//時・分・秒の2桁化をして文字代入
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
//現在のスライドの位置を格納する
let favoriteThingCount = 0;
//スライドの名前保存
const favoriteThingSlide = [
    "favoriteThingSlide1.gif",
    "favoriteThingSlide2.JPG",
    "favoriteThingSlide3.JPG",
    "favoriteThingSlide4.JPG",
    "favoriteThingSlide5.JPG",
    "favoriteThingSlide6.JPG",
    "favoriteThingSlide7.JPG",
    "favoriteThingSlide8.JPG",
    "favoriteThingSlide9.JPG",
    "favoriteThingSlide10.JPG",
    "favoriteThingSlide11.JPG",
    "favoriteThingSlide12.JPG",
    "favoriteThingSlide13.JPG",
    "favoriteThingSlide14.JPG"
];
//初期設定　要素取得など
const impressionsSlide = "DIGの所感.png";
const impressions = document.getElementById("impressions");
const favoriteThing = document.getElementById("favoriteThing");

//スライド名を表示エリアへ登録する
function displayFavoriteThing(){
    document.getElementById("outputArea").src  = favoriteThingSlide[favoriteThingCount];
    //スライド位置をインクリメント
    favoriteThingCount += 1;
    //スライドが１４まで到達したら、０へ戻す
    if ( favoriteThingCount === 14 ) {
        favoriteThingCount = 0;
    }
}
//DIGの学習の所感を表示
function displayImpressions(){
    document.getElementById("outputArea").src  = impressionsSlide;
}
//好きな事をクリックされたときの処理
favoriteThing.addEventListener("click",() =>
    displayFavoriteThing ()
);
//DIG学習の所感をクリックされたときの処理
impressions.addEventListener("click",() =>
    displayImpressions ()
);
