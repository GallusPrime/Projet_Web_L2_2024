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

    /*test*/
    const slider = document.querySelector('.sliderImg');
    const points = document.querySelectorAll('.points a');
    const images = document.querySelectorAll('.sliderImg img');

// Synchroniser les points avec les images
    points.forEach((point, index) => {
        point.addEventListener('click', (e) => {
            e.preventDefault();
            slider.scrollTo({
                left: images[index].offsetLeft,
                behavior: 'smooth',
            });
        });
    });

// Mettre en évidence le point actif en fonction de l'image visible
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft;
        images.forEach((image, index) => {
            if (Math.round(image.offsetLeft - scrollPosition) === 0) {
                points.forEach((point) => point.style.opacity = '0.75');
                points[index].style.opacity = '1';
            }
        });
    });
    /*fin test*/
});

