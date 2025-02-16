function toggleMusic() {
    var audio = document.getElementById("musicM");
    var pauseSignal = document.getElementById("pauseSignal");
    var resumeSignal = document.getElementById("resumeSignal");
    var pauseOverlay = document.getElementById("pause-overlay");
    if (audio.paused) {
        audio.play();
        resumeSignal.style.opacity = 1;
        setTimeout(function() {
            resumeSignal.style.opacity = 0;
        }, 500);
        pauseOverlay.classList.remove("show");
    } else {
        audio.pause();
        pauseSignal.style.opacity = 1;
        setTimeout(function() {
            pauseSignal.style.opacity = 0;
        }, 500);
        pauseOverlay.classList.add("show");
    }
}
function toggleRepeat() {
    var repeatSetting = document.querySelector(".repeat-setting");
    if (repeatSetting.style.opacity === "1") {
        repeatSetting.style.opacity = 0;
    } else {
        repeatSetting.style.opacity = 1;
    }
}