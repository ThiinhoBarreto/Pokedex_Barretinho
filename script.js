
document.querySelectorAll(".banner").forEach(banner => {
    banner.addEventListener("click", () => {
        const front = banner.querySelector(".banner__front");
        const back = banner.querySelector(".banner__back");

        front.classList.toggle("off");
        back.classList.toggle("active");

        
            if (back.classList.contains("active")) {
                // Redirecione para a página
                setTimeout(() => {
                    location.replace('./home.html');
                }, 2200);
            }
        });
});

var audio_abertura = document.getElementById('audio_abertura');

audio_abertura.addEventListener('canplaythrough', function() {
    audio_abertura.play();
});

setTimeout(function() {
    audio_abertura.play();
}, 1000);



