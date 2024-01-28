var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

function calcTime1(){
    var date_now = new Date();
    var hr = date_now.getHours();
    var min = date_now.getMinutes();
    var sec = date_now.getSeconds();

    var calc_hr = (hr * 30) + (min / 2);
    var calc_min =    (min * 6)  ;
    var calc_sec = sec * 6 ;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    second.style.transform = `rotate(${calc_sec}deg)`;
}
calcTime1()
setInterval(calcTime1, 1000);

// & part two        

const time = document.getElementById("time");
const midday = document.getElementById("midday");

function calcTime2() {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let middayValue = "AM";

    middayValue = hr >= 12 ? "PM" : "AM";

    if (hr == 0) {
        hr = 12;
    } else if (hr > 12) {
        hr -= 12;
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    time.textContent = hr + ":" + min + ":" + sec;
    midday.textContent = middayValue;
}
calcTime2()
setInterval(calcTime2,1000);

