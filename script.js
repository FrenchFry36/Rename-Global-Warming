const carousel = document.getElementById("carousel-images");
const images = document.querySelectorAll("#carousel-images img");
let currentIndex = 0;

document.getElementById("carousel-left").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

document.getElementById("carousel-right").addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const imageWidth = images[0].clientWidth; // Get single image width
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}
