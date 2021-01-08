function playAudio(e) {
    const keyCode = (e.keyCode >= 97) ? e.keyCode - 32 : e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.keys__container__item[data-key="${keyCode}"]`);
    

    if (!audio)
        return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("keys__container__item__playing");
}

function removePlayingClass(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove("keys__container__item__playing");
}

const keys = document.querySelectorAll(`.keys__container__item`);
keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

window.addEventListener("keydown", playAudio);

