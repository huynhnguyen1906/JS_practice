let currentIndex = 0;
  const divs = document.querySelectorAll('.child');
  const dots = document.querySelectorAll('.dot');
  const previousButton = document.getElementById('previousBtn');
  const nextButton = document.getElementById('nextBtn');

  function updateDivOrder() {
    for (let i = 0; i < divs.length; i++) {
      const newIndex = (i - currentIndex + divs.length) % divs.length;
      divs[i].className = "child " + "div" + (newIndex + 1);
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
    currentIndex = (currentIndex + 1 + divs.length) % divs.length;
    updateDivOrder();
  }
  
  function previousSlide() {
    currentIndex = (currentIndex - 1) % divs.length;
    updateDivOrder();
  }

  // Attach click event listeners to the buttons
  previousButton.addEventListener('click', previousSlide);
  nextButton.addEventListener('click', nextSlide);

  // Attach click event listeners to the dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      goToSlide(i); 
    });
  }

  // Initial display
  updateDivOrder();