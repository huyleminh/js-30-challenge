const timer = document.querySelector(".timer");
const secFinger = document.querySelector(".clock__finger__sec");
const minFinger = document.querySelector(".clock__finger__min");
const hourFinger = document.querySelector(".clock__finger__hour");


function running() {
    const audio = document.querySelector("audio")
    audio.currentTime = 0;
    audio.play();

    const now = new Date();
    timer.innerHTML = now.toLocaleTimeString();

    const nowSec = now.getSeconds();
    const nowMin = now.getMinutes();
    const nowHour = now.getHours();

    const secDeg = 90 + (nowSec * 6);
    secFinger.style.transform = `rotate(${secDeg}deg)`;

    const minDeg = 90 + (nowMin * 6);
    minFinger.style.transform = `rotate(${minDeg}deg)`;

    const hourDeg = 90 + (nowHour * 30);
    hourFinger.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(running, 1000);