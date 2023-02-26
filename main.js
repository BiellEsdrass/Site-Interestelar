let imgTrailer = document.getElementById('imgTrailer');

imgTrailer.addEventListener('mouseover', function(){
    imgTrailer.src = "/img/TrailerPlay.jpg"

    imgTrailer.addEventListener('mouseleave', function(){
        imgTrailer.src = "/img/Trailer.jpg"
    })
})



