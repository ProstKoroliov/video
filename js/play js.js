const MAX = 400;
function init() {


    media = document.getElementById("media");
    play = document.getElementById("play");
    mute = document.getElementById("mute");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volume = document.getElementById("volume");

    play.addEventListener("click", push);
    media.addEventListener("click", push);

    mute.addEventListener("click", sound);

    bar.addEventListener("click", move);

    

}

function move(e) {

    if (!media.ended) {
        let mouseX = e.pageX - bar.offsetLeft;
        let newTime = mouseX * media.duration / MAX;
        media.currentTime = newTime;
        progress.style.width = `${mouseX}px`;
    }

}





function sound() {

    if (!media.muted){
        media.muted = true;
        mute.style.background = "red"
    
    } else {
        media.muted = false;
        mute.style.background = "rgb(255, 255, 255)";
        mute.style.color = "#000";
    
    }

}


function push() {

if (!media.paused && !media.ended){
    media.pause();
    play.innerHTML = "Воспр.";
    clearInterval(loop);

} else {
    media.play();
    play.innerHTML = "Пауза";
    loop = setInterval(myStatys, 1000);
}

    }

    function myStatys() {

        if (!media.ended) {
            let size = media.currentTime * MAX / media.duration;
            progress.style.width = `${parseInt(size)}px`;
        } else {
            progress.style.width = "0";
            play.innerHTML = "Воспр.";
            clearInterval(loop);
        
        }

    }








addEventListener('load', init);