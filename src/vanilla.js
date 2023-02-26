const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const slideControls = document.querySelectorAll(".slide-control button");

let slideIndex = 0;
let interval = setInterval(changeSlide, 5000);

function changeSlide() {
  slideIndex++;
  if (slideIndex >= slideImages.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateSlideControls();
}

function updateSlideControls() {
  slideControls.forEach((control, index) => {
    if (index === slideIndex) {
      control.classList.add("active");
    } else {
      control.classList.remove("active");
    }
  });
}

slideControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    slideIndex = index;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    clearInterval(interval);
    interval = setInterval(changeSlide, 5000);
    updateSlideControls();
  });
});
