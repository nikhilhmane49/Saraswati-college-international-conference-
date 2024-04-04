    // JavaScript for slider functionality
    const containers = document.querySelectorAll('.track-container-c1');

    containers.forEach((container) => {
        const checkboxes = container.querySelectorAll('.slide-nav input[type="radio"]');

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                const slides = container.querySelectorAll('.slider-content-in-c');
                const index = checkbox.id.split('-')[1] - 1;

                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                slides[index].classList.add('active');
            });
        });
    });