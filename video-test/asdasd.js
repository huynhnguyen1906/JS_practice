const skillInfor5 = document.querySelectorAll('.skill-infor-container5');
const skillList5 = document.querySelectorAll('.skill-list5');
const skillBackBtn5 = document.getElementById('skill-back-btn5');
const skillFwdBtn5 = document.getElementById('skill-fwd-btn5');

let currentIndex5 = 0;

function showInfor5(index) {
    skillInfor5.forEach((skillInfor5, i) => {
        skillInfor5.style.display = i === index ? 'block' : 'none';
    });
}

function updatePageNumbers5() {
    skillList5.forEach((skillList5, i) => {
        if (i === currentIndex5) {
            skillList5.classList.add('skill-list-active');
        } else {
            skillList5.classList.remove('skill-list-active');
        }
    });
}

skillList5.forEach((skillList5, i) => {
    skillList5.addEventListener('click', () => {
        showInfor5(i);
        currentIndex5 = i;
        updatePageNumbers5();
        skillBoxAnimation5();
    });
});

skillBackBtn5.addEventListener('click', () => {
    currentIndex5 = (currentIndex5 - 1 + skillInfor5.length) % skillInfor5.length;
    showInfor5(currentIndex5);
    updatePageNumbers5();
    skillBoxAnimation5();
});

skillFwdBtn5.addEventListener('click', () => {
    currentIndex5 = (currentIndex5 + 1) % skillInfor5.length;
    showInfor5(currentIndex5);
    updatePageNumbers5();
    skillBoxAnimation5();
});

function skillBoxAnimation5() {
    skillInfor5.forEach((skillInfor5, i) => {
        const computedStyle5 = getComputedStyle(skillInfor5);
        const display5 = computedStyle5.getPropertyValue('display');
        if (display5 === 'block') {
            skillInfor5.classList.add('skill-active');
        } else {
            skillInfor5.classList.remove('skill-active');
        }
    });
}

showInfor5(currentIndex5);
updatePageNumbers5();
skillBoxAnimation5();