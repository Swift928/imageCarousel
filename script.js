let slideButton = document.querySelectorAll('.arrowButton');
let slides = document.querySelectorAll('.slide');

slideButton.forEach((item) => {
    item.addEventListener('click', () => {
        let currentSlide = document.querySelector('.slide[data-active="true"]');
        if (item.classList.contains('rightArrowButton')) {
            if (currentSlide) {
                currentSlide.removeAttribute('data-active');
                let nextSlide = currentSlide.nextElementSibling || slides[0];
                nextSlide.setAttribute('data-active', 'true');
            }
        } else {
            if (currentSlide) {
                currentSlide.removeAttribute('data-active');
                let nextSlide =
                    currentSlide.previousElementSibling ||
                    slides[slides.length - 1];
                nextSlide.setAttribute('data-active', 'true');
            }
        }
    });
});

let displayDots = document.querySelector('.displayDots');
let svg = document.querySelector('.imageDot');

slides.forEach(() => {
    let copiedDot = svg.cloneNode(true);
    displayDots.appendChild(copiedDot);
    displayDots.firstElementChild.setAttribute('data-active', 'true');
});

let dots = document.querySelectorAll('.imageDot');
dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        slides.forEach((item) => item.removeAttribute('data-active'));
        slides[index].setAttribute('data-active', 'true');
        dots.forEach((item) => item.removeAttribute('data-active'));
        item.setAttribute('data-active', 'true');
    });
});

function updateDots(index) {
    dots.forEach((item) => item.removeAttribute('data-active'));
    dots[index].setAttribute('data-active', 'true');
}

slideButton.forEach((item) => {
    item.addEventListener('click', () => {
        slides.forEach((item, index) => {
            if (item.hasAttribute('data-active')) {
                dots.forEach((item) => item.removeAttribute('data-active'));
                dots[index].setAttribute('data-active', 'true');
            }
        });
    });
});
