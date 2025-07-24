import Swiper from 'swiper';
import '../carousel/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.carousel-wrapper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            600: {
                slidesPerView: 2
            },
            900: {
                slidesPerView: 3
            }
        }
    });
});
