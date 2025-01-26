document.addEventListener('DOMContentLoaded', () => { //fais le javascript après que tout le web a été load
    const carousel = document.querySelector('.carousel');//prend le carousel
    const slides = document.querySelectorAll('.slide');//le slide
    const leftArrow = document.querySelector('.left-arrow');//button gauche
    const rightArrow = document.querySelector('.right-arrow');// button droite
    const progressIndicator = document.querySelector('.progress-indicator');// la ou on est

    let currentIndex = 0;// valeur de la posisiton actuelle

    function updateCarousel() { // met le carousel a jour le carousel
        const slideWidth = slides[0].offsetWidth + 20; // largeur de la slide plus l'espace
        const totalSlides = slides.length;

        // mouve le carrousel
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // mets la barre a jour
        const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
        progressIndicator.style.width = `${progressPercentage}%`;
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();//misa a jour
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < slides.length - 4) {// affiche 4 slides à la fois
            currentIndex++;
            updateCarousel();// met a jour
        }
    });

    // ajuster la position du carrousel
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // initialise
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

