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

    // premier slider
    const slider = document.querySelector('.sliderImg');//prend le conteneur d'image
    const points = document.querySelectorAll('.points a');//prend les point un par un
    const images = document.querySelectorAll('.sliderImg img');// prend les image

// point image synchro
    points.forEach((point, index) => {
        point.addEventListener('click', (e) => {
            e.preventDefault(); // ne fais pas le mode defaut lien
            slider.scrollTo({
                left: images[index].offsetLeft, // scroll jusqu'as la position de la next image
                behavior: 'smooth',// rend ça fluide
            });
        });
    });

    // sycro les point opacity a l'image
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft; //prend la position actuellee du scroll
        images.forEach((image, index) => {
            if (Math.round(image.offsetLeft - scrollPosition) === 0) { //si image alligné a gauche
                points[index].style.opacity = '1';// point opaque au bon moment

            } else {
                points[index].style.opacity = '0.65'; // mets les autre a 65
                if (points[0].style.opacity && points[1].style.opacity === '0.65') { // regle le problem d'allignement a gauche pour le dernier
                    points[2].style.opacity = '1';
                }
            }
            if (points[0].style.opacity === '1') {// regle le problem a cause du décalage du a
                points[2].style.opacity = '0.65';
            }

        });
    });
});

