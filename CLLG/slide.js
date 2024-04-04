let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);
