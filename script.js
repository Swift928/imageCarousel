let slideButton = document.querySelectorAll('.arrowButton');

slideButton.forEach((item) => {
    item.addEventListener('click', () => {
        let slides = document.querySelectorAll('.slide');
        slides.forEach((image, index) => {
            if (image.hasAttribute('data-active')) {
                image.removeAttribute('data-active');
                if (item.classList.contains('right')) {
                    if (index === slides.length - 1) {
                        slides[0].setAttribute('data-active', '');
                    } else {
                        slides[index + 1].setAttribute('data-active', '');
                    }
                } else {
                    if (index === 0) {
                        slides[slides.length - 1].setAttribute(
                            'data-active',
                            ''
                        );
                    } else {
                        slides[index - 1].setAttribute('data-active', '');
                    }
                }
            }
        });
    });
});
