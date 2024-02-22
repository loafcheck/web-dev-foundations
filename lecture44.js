let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function showSlide(n) {
    //showSlide(1)
  slides[currentSlide].style.display = 'none';
  //slides[0].styel.display='none';
  //slides[0].style.display='none';
  //slides[1].style.display ='none';
  //slides[2].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  //currentSlide = (0 + 3) % 3 -> 0
  //currentSlide = (1 + 3) % 3 -> 1
  //currentSlide = (2 + 3) % 3 -> 2
  //currentSlide = (3 + 3) % 3 -> 0
  slides[currentSlide].style.display = 'block';
  //slides[0].style.display = 'block'
  //slides[1].style.display = 'block'
  //slides[2].style.display = 'block'
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
  //showSlide(0+1)->1;
  //showSlide(1+1) ->2;
  //showSlide(2+1) -> 3;
});

showSlide(currentSlide);
