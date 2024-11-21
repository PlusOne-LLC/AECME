let currentIndex = 0;
const images = document.querySelectorAll('#slideshow .item');
const totalImages = images.length;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

// Troca de imagem a cada 3 segundos (3000 milissegundos)
setInterval(showNextImage, 9000);



