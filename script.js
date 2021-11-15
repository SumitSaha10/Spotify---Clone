window.addEventListener('load',function() {
    let songElm = new Audio('1.mp3');
    let playSong = document.getElementById('playSong');
    let myProgress = document.getElementById('myProgress');
    let gif = document.getElementById('gif');
    playSong.addEventListener('click',function() {
        if (songElm.paused || songElm.duration<0) {
            songElm.play();
            playSong.classList.remove('fa-play-circle');
            playSong.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } 
        else {
            songElm.pause();
            playSong.classList.remove('fa-pause-circle');
            playSong.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    songElm.addEventListener('timeupdate',function() {
        myProgress.value = ((songElm.currentTime/songElm.duration)*100);
    })
})