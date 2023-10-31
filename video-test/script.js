// ver slider box

const verSlider = document.querySelectorAll('.ver-slider');
const verDots = document.querySelectorAll('.ver-dot');
const verPreviousButton = document.getElementById('ver-prev-btn');
const verNextButton = document.getElementById('ver-next-btn');
let verCurrentIndex = 0;

function verUpdateDivOrder() {
for (let i = 0; i < verSlider.length; i++) {
    const newIndex = (i - verCurrentIndex + verSlider.length) % verSlider.length;

    verSlider[i].classList.remove("ver-activate", "ver-active-next", "ver-active-prev");

    if (newIndex === 0) {
        verSlider[i].classList.add("ver-activate");
    } else if (newIndex === 1) {
        verSlider[i].classList.add("ver-active-next");
    } else if (newIndex === 2) {
        verSlider[i].classList.add("ver-active-prev");
    }
}

    verDots.forEach((dot, i) => {
        dot.classList.remove('ver-dot-active');
        if (i === verCurrentIndex) {
        dot.classList.add('ver-dot-active');
        }
        });
}

function verGoToSlide(index) {
    verCurrentIndex = index;
    verUpdateDivOrder();
}

function verNextSlide() {
    verCurrentIndex = (verCurrentIndex + 1) % verSlider.length;
    verUpdateDivOrder();
}

function verPreviousSlide() {
    verCurrentIndex = (verCurrentIndex - 1 + verSlider.length) % verSlider.length;
    verUpdateDivOrder();
}

verPreviousButton.addEventListener('click', () => {
    verPreviousSlide();
    verUpdateDivOrder();
});

verNextButton.addEventListener('click', () => {
    verNextSlide();
    verUpdateDivOrder();
});

for (let i = 0; i < verDots.length; i++) {
    verDots[i].addEventListener('click', () => {
    ververGoToSlide(i);
    verUpdateDivOrder();
    });
}
verUpdateDivOrder();
const verPlayBtns = document.querySelectorAll('.ver-play-btn');
const verVideoPopups = document.querySelectorAll('.ver-video-popup');
const verSubVideos = document.querySelectorAll('.ver-sub-video');

verPlayBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        verSubVideos[index].currentTime = 0;
        verVideoPopups[index].style.zIndex = 10;
        verVideoPopups[index].style.display = 'block';
        verSubVideos[index].play();
    });
});

verVideoPopups.forEach((popup, index) => {
    popup.addEventListener('click', (event) => {
        if (event.target !== verSubVideos[index]) {
            popup.style.display = 'none';
            verSubVideos[index].pause();
        }
    });
});