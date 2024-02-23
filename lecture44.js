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

slides.forEach((slidepage, index)=> {
    slidepage.addEventListener('mousedown', function(e){
        isDragging = true;
        startX = e.clientX;
    })

    slidepage.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const distance = e.clientX - startX;
            slidepage.style.transform = `translateX(${distance}px)`;
        }
    })

    slidepage.addEventListener('mouseup', function(e){
        if(isDragging){
            isDragging = false;
            const distance = e.clientX - startX;
            if (distance >= 100) {
                showSlide(currentSlide -1);
            } else if (distance <= 100) {
                console.log(distance);
                showSlide(currentSlide + 1);
            } else {
                slidepage.style.transform = 'translateX(0)';
            }
        }
    })
})

/*
slides[0].addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX;
});

slides[0].addEventListener('mousemove', function(e) {
    if(isDragging) {
        const distance = e.clientX - startX;
        slides[currentSlide].style.transform = `translateX(${distance}px)`;
        console.log(distance);
    }
});


slides[0].addEventListener('mouseup', function(e) {
    if (isDragging) {
        isDragging = false;
        //dragging event 끄기
        var distance = e.clientX - startX;
        if (distance >= 100) {
            showSlide(currentSlide -1);
        } else if (distance <= -100) {
            showSlide(currentSlide+1);
        } else {
            slides[currentSlide].style.transform = 'translateX(0)';
        }

    }

    
});
*/
