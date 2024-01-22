document.querySelectorAll(".cards__card").forEach(card => {

    card.addEventListener("click", () => {
        card.querySelector(".cards__card__front").classList.toggle("off");
        card.querySelector(".cards__card__back").classList.toggle("active");
    });

});

var audio_home = document.getElementById('audio_home');

audio_home.addEventListener('canplaythrough', function() {
    audio_home.play();
});

setTimeout(function() {
    audio_home.play();
}, 1000);
