var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

var currentIndex = slides.length -1;

function updateSlides() {
    for (var i = slides.length -1; i >=0; i--) {
        slides[i].style.zIndex = i;
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length -1;
    }
    updateSlides();
});

nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex =0;
    }
    updateSlides();
});

for (let i = slides.length -1; i >=0; i--) {
    dots[i].addEventListener('click', function() {
        currentIndex = i;
        updateSlides();
    });
}

updateSlides();
