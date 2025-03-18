
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.embla__slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('is-selected', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Autoplay every 3 seconds
    setInterval(nextSlide, 3000);
});