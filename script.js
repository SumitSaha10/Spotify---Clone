window.addEventListener('load', function () {
    let songIndex = 0;
    let songElm = new Audio('songs/1.mp3');
    let playSong = document.getElementById('playSong');
    let myProgress = document.getElementById('myProgress');
    let songPreviewName = document.getElementById('songPreviewName');
    let gif = document.getElementById('gif');

    let songs = [
        { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Rabba - Heropanti", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
        { songName: "Sakhiyaan - Bell Bottom", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
        { songName: "Bhula Dena - Ashiqui 2", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
        { songName: "Tumhari Kasam", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
        { songName: "Na Jaana", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
    ]
    //Code for previewing song in song item
    let songItems = Array.from(document.getElementsByClassName('songItem'));
    songItems.forEach((element, i) => {
        element.getElementsByTagName('img')[0].src = songs[i].coverPath;
        element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    });

    //Code for play and pause the song
    playSong.addEventListener('click', function () {

        if (songElm.paused || songElm.duration < 0) {
            songElm.play();
            playSong.classList.remove('fa-play-circle');
            playSong.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            songItemPlay[songIndex].classList.remove('fa-play-circle');
            songItemPlay[songIndex].classList.add('fa-pause-circle');
        }
        else {
            songElm.pause();
            playSong.classList.remove('fa-pause-circle');
            playSong.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            songItemPlay[songIndex].classList.remove('fa-pause-circle');
            songItemPlay[songIndex].classList.add('fa-play-circle');
        }

    })

    //Code for updating the progress bar value
    songElm.addEventListener('timeupdate', function () {
        myProgress.value = ((songElm.currentTime / songElm.duration) * 100);
        if (myProgress.value >= 100) {
            playSong.classList.remove('fa-pause-circle');
            playSong.classList.add('fa-play-circle');
            songItemPlay[songIndex].classList.remove('fa-pause-circle');
            songItemPlay[songIndex].classList.add('fa-play-circle');
        }
    })

    //Code for skipping some parts of song
    myProgress.addEventListener('change', function () {
        songElm.currentTime = myProgress.value * songElm.duration / 100;
    })

    const makeAllPlay = () => {

        songItemPlay.forEach(element => {

            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');

        })

    }

    //Code for showing the play and pause icons in song item
    let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

    songItemPlay.forEach(element => {

        element.addEventListener('click', function () {

            songIndex = parseInt(element.id);

            makeAllPlay();

            if (songElm.paused) {
                songElm.src = `songs/${songIndex + 1}.mp3`;
                songPreviewName.innerText = songs[songIndex].songName;
                element.classList.remove('fa-play-circle');
                element.classList.add('fa-pause-circle');
                playSong.classList.remove('fa-play-circle');
                playSong.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
                songElm.currentTime = 0;
                songElm.play();
            }
            else {
                songElm.pause();
                console.log('else in')
                playSong.classList.remove('fa-pause-circle');
                playSong.classList.add('fa-play-circle');
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
                gif.style.opacity = 0;
            }
        })

    })

    //Code for playing next song
    document.getElementById('next').addEventListener('click', function () {
        if (songIndex >= 9) {
            songIndex = 0;
        }
        else {
            songIndex += 1;
        }
        songElm.src = `songs/${songIndex + 1}.mp3`;
        songElm.currentTime = 0;
        songElm.play();
        songPreviewName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        playSong.classList.remove('fa-play-circle');
        playSong.classList.add('fa-pause-circle');
        songItemPlay[songIndex - 1].classList.remove('fa-pause-circle');
        songItemPlay[songIndex - 1].classList.add('fa-play-circle');
        songItemPlay[songIndex].classList.remove('fa-play-circle');
        songItemPlay[songIndex].classList.add('fa-pause-circle');
    })

    //Code for playing previous song
    document.getElementById('previous').addEventListener('click', function () {
        if (songIndex <= 0) {
            songIndex = 0;
        }
        else {
            songIndex -= 1;
        }
        songElm.src = `songs/${songIndex + 1}.mp3`;
        songElm.currentTime = 0;
        songElm.play();
        songPreviewName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        playSong.classList.remove('fa-play-circle');
        playSong.classList.add('fa-pause-circle');
        songItemPlay[songIndex + 1].classList.remove('fa-pause-circle');
        songItemPlay[songIndex + 1].classList.add('fa-play-circle');
        songItemPlay[songIndex].classList.remove('fa-play-circle');
        songItemPlay[songIndex].classList.add('fa-pause-circle');
    })
})