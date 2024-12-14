let slideIndex = 0;
showSlides(slideIndex);

// Função para mudar os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Exibe o slide atual
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}

// Função para arrastar
let startX;

const slideshowContainer = document.getElementById('slideshow');

slideshowContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    slideshowContainer.style.cursor = 'grabbing';
});

slideshowContainer.addEventListener('mouseup', (e) => {
    const endX = e.clientX;
    if (startX > endX + 30) {
        plusSlides(1); // Deslizou para a esquerda
    } else if (startX + 30 < endX) {
        plusSlides(-1); // Deslizou para a direita
    }
    slideshowContainer.style.cursor = 'grab';
});

slideshowContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slideshowContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX > endX + 30) {
        plusSlides(1); // Deslizou para a esquerda
    } else if (startX + 30 < endX) {
        plusSlides(-1); // Deslizou para a direita
    }
});

// Inicializa o primeiro slide
showSlides(slideIndex);

// Muda de slide a cada 3 segundos
setInterval(() => {
    plusSlides(1);
}, 3000); // 3000 milissegundos = 3 segundos