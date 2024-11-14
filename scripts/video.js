const body = document.querySelector("body");
const video = document.querySelector(".boxVideo");
const videoPlay = document.querySelector(".boxVideo video");
const abrir = document.querySelector(".play");
const fechar = document.querySelector(".boxVideo .fechar");

abrir.addEventListener("click", function(){
    //  console.log("Cicou em abrir");
    videoPlay.play();
    body.classList.add("hidden");
    video.classList.add("ativo");
});
fechar.addEventListener("click", function(){
    videoPlay.pause();
    body.classList.remove("hidden");
    video.classList.remove("ativo");
});
