const controls = document.querySelector(".video-controls");
const playstop = document.querySelector(".icon-play");
const video = document.querySelector(".video-back");
const videoInfo = document.querySelector(".video-info");
const videoDur = document.querySelector(".video__time");

function playAndStop(){
    if (video.paused){
        video.play();
        videoInfo.style.display = 'none';
        video.style.opacity = '1';
    }
    else{
        video.pause();
        videoInfo.style.display = 'flex';
        video.style.opacity = '0.6';
    }
}

video.addEventListener("click", playAndStop);
controls.addEventListener("click", playAndStop);
document.addEventListener("DOMContentLoaded", function(){
    const dur = video.duration;
    if (dur) {
        videoDur.innerText = dur;
    }
});