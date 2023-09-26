const videos = document.querySelectorAll('.video-container');
const pageNumbers = document.querySelectorAll('.page-number');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function showVideo(index) {
    videos.forEach((video, i) => {
        video.style.display = i === index ? 'block' : 'none';
    });
}

function updatePageNumbers() {
    pageNumbers.forEach((pageNumber, i) => {
        if (i === currentIndex) {
            pageNumber.classList.add('current-page');
            pageNumber.classList.add('current-page1');
        } else {
            pageNumber.classList.remove('current-page');
            pageNumber.classList.remove('current-page1');
        }
    });
}

pageNumbers.forEach((pageNumber, i) => {
    pageNumber.addEventListener('click', () => {
        showVideo(i);
        currentIndex = i;
        updatePageNumbers();
    });
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    showVideo(currentIndex);
    updatePageNumbers();
    restartCurrentVideo();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex);
    updatePageNumbers();
    restartCurrentVideo();
});

function restartCurrentVideo() {
    const currentVideo = videos[currentIndex].querySelector('video');
    currentVideo.currentTime = 0;
}   
showVideo(currentIndex);
updatePageNumbers();