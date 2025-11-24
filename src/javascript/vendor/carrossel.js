const carrossel = document.querySelector(".carrossel-slide");
const slides = document.querySelectorAll(".slide");
let current = 0;
let interval;

function showSlide(index) {
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = current <= 0 ? slides.length - 1 : current - 1;
  showSlide(current);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}

document.getElementById("left").onclick = () => {
  prevSlide();
  resetInterval();
};

document.getElementById("right").onclick = () => {
  nextSlide();
  resetInterval();
};

carrossel.addEventListener("click", resetInterval);

interval = setInterval(nextSlide, 4000);

showSlide(current);
