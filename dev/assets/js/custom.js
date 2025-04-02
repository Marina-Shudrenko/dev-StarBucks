//burger-menu

const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileContainer.classList.toggle('show');
})

//video-button

const processVideo = document.querySelector('#video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');

function playVideo() {
    processVideo.play();
}

function pauseVideo() {
    processVideo.pause();
}

function stopVideo() {
    processVideo.pause();
    processVideo.currentTime = 0;
}

play.addEventListener('click', () => {
    playVideo();
})

pause.addEventListener('click', () => {
    pauseVideo();
})

stop.addEventListener('click', () => {
    stopVideo();
})

//currentTime : html, css, js

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');

function timeHTML() {
    video.currentTime = 69;
}

function timeCSS() {
    video.currentTime = 109;
}

function timeJS() {
    video.currentTime = 202;
}

html.addEventListener('click', () => {
    timeHTML();
})

css.addEventListener('click', () => {
    timeCSS();
})

js.addEventListener('click', () => {
    timeJS();
})

// modal 

const modalTriggers = document.querySelectorAll('[data-trigger-modal]');
const modalClose = document.querySelectorAll('[data-close-modal]');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

function showModal() {
    overlay.classList.add('show');
    body.classList.add('overflow-hidden');
}

function closeModal() {
    const openModal = document.querySelector('.modal.show');

    openModal.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('overflow-hidden');
    stopVideo();
}

modalTriggers.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const dataTrigger = item.getAttribute('data-trigger-modal');
        const modal = document.querySelector('#' + dataTrigger);

        showModal();

        if (modal.classList.contains('video-process')) {
            modal.classList.add('show');
            playVideo();
        } else {
            modal.classList.add('show');
        }
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal);
})

//swiper1

const swiperProduct = new Swiper('.swiper-product', {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        769: {
            slidesPerView: 2,
            spaceBetween: 36,
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
        1561: {
            slidesPerView: 4,
            spaceBetween: 48,
        }
    }
});


//swiper mobile only

let swiperEvents;
let swiperEventsMediaQuery = window.matchMedia("(max-width: 1024px)");


function checkedBreakpoint(swiperEventsMediaQuery) {
    if (swiperEventsMediaQuery.matches) {
        if (!swiperEvents) {
            swiperEvents = new Swiper('.swiper-events', {
                spaceBetween: 36,
                loop: true,

                navigation: {
                    nextEl: '.swiper-events-button-next',
                    prevEl: '.swiper-events-button-prev'
                }
            });
        }
    } else {
        if (swiperEvents) {
            swiperEvents.destroy(true, true);
            swiperEvents = null;
        }
    }
}

checkedBreakpoint(swiperEventsMediaQuery);

swiperEventsMediaQuery.addEventListener("change", checkedBreakpoint);



/* swiperEvents = new Swiper('.swiper-events', {
    navigation: {
        nextEl: '.swiper-events-button-next',
        prevEl: '.swiper-events-button-prev'
    }
});

const swiperEventsMediaQuery = window.matchMedia("(max-width: 768px)");


function checkedBreakpoint(swiperEventsMediaQuery) {
    if (swiperEventsMediaQuery.matches) {
       return;
    } else {
            swiperEvents.destroy(true, true);
    }
}

checkedBreakpoint(swiperEventsMediaQuery);

swiperEventsMediaQuery.addEventListener("change", checkedBreakpoint); */



/* let swiperEvents = null;

function initSwiper() {
    if (window.innerWidth <= 768) {
        if (!swiperEvents) {
            swiperEvents = new Swiper(".swiper-events", {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        } else {
            if (swiperEvents) {
                swiperEvents.destroy(true, true);
                swiperEvents = null;
            }
        }
    }
}

initSwiper();
window.addEventListener("resize", initSwiper); */


/* let init = false;
let swiperEvents;

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiperEvents = new Swiper(".swiper-events", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 32,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiperEvents.destroy(true, true);
        swiperEvents = null;
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard); */


/* 1 занятие

const btnTriggerProcess = document.querySelector('[data-trigger-modal="process"]')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')
const html = document.querySelector('html')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal button')


function showModal(event) {
overlay.classList.add('show')
modal.classList.add('show')
body.classList.add('overflow-hidden')
html.classList.add('overflow-hidden')
event.preventDefault()
}

function closeModal() {
    overlay.classList.remove('show')
    modal.classList.remove('show')
    body.classList.remove('overflow-hidden')
    html.classList.remove('overflow-hidden')
    }


btnTriggerProcess.addEventListener('click', showModal)
closeButton.addEventListener('click', closeModal) 
*/