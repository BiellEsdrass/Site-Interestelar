let imgTrailer = document.getElementById('imgTrailer');

imgTrailer.addEventListener('mouseover', function(){
    imgTrailer.src = "/img/TrailerPlay.jpg"

    imgTrailer.addEventListener('mouseleave', function(){
        imgTrailer.src = "/img/Trailer.jpg"
    })
})


let trailerVideo = document.getElementById('video__trailer');
let closeTrailerVideo = document.getElementById('close__video__trailer');
let trailerBlur = document.getElementById('trailer__blur');


imgTrailer.addEventListener('click', function(){
    trailerVideo.style.display = "block";
    trailerVideo.style.opacity = "1";
    trailerBlur.style.display = 'block';
})

closeTrailerVideo.addEventListener('click', function(){
    trailerVideo.style.display = "none";
    trailerVideo.style.opacity = "0";
    trailerBlur.style.display = 'none';
})

