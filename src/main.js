document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const progressIndicator = document.querySelector('.progress-indicator');

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth + 20; // Largeur de la slide + espace
        const totalSlides = slides.length;

        // Déplacement du carrousel
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Mise à jour de la barre de progression
        const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
        progressIndicator.style.width = `${progressPercentage}%`;
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < slides.length - 4) { // Affiche 4 slides à la fois
            currentIndex++;
            updateCarousel();
        }
    });


    // Ajuster la position du carrousel lors du redimensionnement
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // Initialisation
    updateCarousel();
});
