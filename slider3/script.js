let currentIndex = 0;
const divs = document.querySelectorAll('.child');
const dots = document.querySelectorAll('.dot');
const previousButton = document.getElementById('previousBtn');
const nextButton = document.getElementById('nextBtn');

function updateDivOrder() {
  for (let i = 0; i < divs.length; i++) {
    const newIndex = (i - currentIndex + divs.length) % divs.length;

    // Xóa các lớp CSS cũ
    divs[i].classList.remove("activate1", "active-next", "active-prev");

    // Thêm lớp CSS mới dựa trên newIndex
    if (newIndex === 0) {
      divs[i].classList.add("activate1");
    } else if (newIndex === 1) {
      divs[i].classList.add("active-next");
    } else if (newIndex === 2) {
      divs[i].classList.add("active-prev");
    }
  }

  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateDivOrder();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % divs.length;
  updateDivOrder();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + divs.length) % divs.length;
  updateDivOrder();
}

// Attach click event listeners to the buttons
previousButton.addEventListener('click', () => {
  previousSlide();
  updateDivOrder();
});

nextButton.addEventListener('click', () => {
  nextSlide();
  updateDivOrder();
});

// Attach click event listeners to the dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    goToSlide(i);
    updateDivOrder();
  });
}

// Initial display
updateDivOrder();