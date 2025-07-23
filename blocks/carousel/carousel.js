import Swiper from '../carousel/swiper-bundle.min.js'

function createSwiper(block) {
    // Only wrap if not already Swiper markup
    if (!block.classList.contains('swiper')) {
        const rows = Array.from(block.children);
        const swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
        rows.forEach(row => {
            row.classList.add('swiper-slide');
            swiperWrapper.append(row);
        });
        block.append(swiperWrapper);
    }
}

function swiperInit(block) {
    const swiperConfig = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    const nextBtn = document.createElement('div');
    nextBtn.classList.add('swiper-button-next');
    const prevBtn = document.createElement('div');
    prevBtn.classList.add('swiper-button-prev');
    block.append(nextBtn, prevBtn);

    applyPagination(block, swiperConfig);
    applyBreakpoints(block, swiperConfig);
    const swiperone = applyBreakpoints(block, swiperConfig);
    console.log(swiperone)
}

function applyPagination(block, swiperConfig) {
    if (block.classList.contains('pagination')) {
        const swiperPagination = document.createElement('div');
        swiperPagination.classList.add('swiper-pagination');
        block.append(swiperPagination);
        swiperConfig.pagination = {
            el: '.carousel.block.pagination .swiper-pagination',
            clickable: true,
        }
    }
}

function applyBreakpoints(block, swiperConfig) {
    if (block.classList.contains('deals-carousel')) {
        swiperConfig.breakpoints = {
            320: { slidesPerView: 1, spaceBetween: 15 },
            1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 15 }
        }
    }

    if (block.classList.contains('banner-carousel')) {
        swiperConfig.loop = true;
        swiperConfig.autoplay = {
            delay: 3000
        };
        swiperConfig.breakpoints = {
            320: { slidesPerView: 1 }
        }
    }

    if (block.classList.contains('services-carousel')) {
        swiperConfig.loop = true;
        swiperConfig.autoplay = {
            delay: 3000
        };
        swiperConfig.breakpoints = {
            320: { slidesPerView: 1, spaceBetween: 15 },
            1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 }
        }
    }
    return new Swiper(block, swiperConfig)
}


function wrapImageInLink(block) {
    if (block.classList.contains('services-carousel') || block.classList.contains('experience-carousel')) {
        const slides = block.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            const anchor = slide.querySelector('p.button-container a');
            if (!anchor) return;
            const link = anchor?.href;
            const newAnchor = document.createElement('a');
            newAnchor.href = link;

            const picture = slide.querySelector('picture');
            const imgWrapper = picture?.parentElement;
            newAnchor.append(picture);
            imgWrapper.append(newAnchor);
        })
    }
}


// --- Add this function for direct Swiper init on already correct markup ---
export function initSwiperOnly(block) {

    // Find the .swiper element (block may be a wrapper)
    const swiperEl = block.classList.contains('swiper') ? block : block.querySelector('.swiper');
    if (!swiperEl) return;
    // Use child selectors for navigation/pagination
    const nextBtn = swiperEl.querySelector('.swiper-button-next') || swiperEl.appendChild(document.createElement('div'));
    nextBtn.classList.add('swiper-button-next');
    const prevBtn = swiperEl.querySelector('.swiper-button-prev') || swiperEl.appendChild(document.createElement('div'));
    prevBtn.classList.add('swiper-button-prev');
    let pagination = swiperEl.querySelector('.swiper-pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.classList.add('swiper-pagination');
        swiperEl.appendChild(pagination);
    }
    const swiperConfig = {
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        pagination: {
            el: pagination,
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 15 },
            600: { slidesPerView: 2, spaceBetween: 15 },
            900: { slidesPerView: 3, spaceBetween: 16 },
            1200: { slidesPerView: 3, spaceBetween: 16 }
        },
        loop: false,
        observer: true,
        observeParents: true,
    };
    new Swiper(swiperEl, swiperConfig);
}


export default function decorate(block) {
    const isDesktop = window.matchMedia('(min-width: 900px)');

    createSwiper(block);
    wrapImageInLink(block);

    if (block.classList.contains('services-carousel') && block.classList.contains('experience-carousel') && isDesktop.matches) return;
    swiperInit(block);
}
