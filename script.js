document.getElementById("carousel-left").addEventListener("click", () => {
  const carousel = document.getElementById("carousel-images");
  carousel.scrollBy({ left: -200, behavior: "smooth" });
});

document.getElementById("carousel-right").addEventListener("click", () => {
  const carousel = document.getElementById("carousel-images");
  carousel.scrollBy({ left: 200, behavior: "smooth" });
});
