let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let isDragging = false;
let startX = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);

slides[0].addEventListener('mousedown', function(e) {
  
    startX = e.clientX;
});

document.addEventListener('mousemove', function(e) {

        const distance = e.clientX - startX;
        slides[0].style.transform = `translateX(${distance}px)`;

});

document.addEventListener('mouseup', function() {
    isDragging = false;
});
