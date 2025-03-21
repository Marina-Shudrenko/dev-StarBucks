const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

// modal 

const modalTriggers = document.querySelectorAll('[data-trigger-modal]');
const modalClose = document.querySelectorAll('[data-close-modal]');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const html = document.querySelector('html');

function showModal() {
    overlay.classList.add('show');
    body.classList.add('overflow-hidden');
    html.classList.add('overflow-hidden');
}

function closeModal() {
    const openModal = document.querySelector('.modal.show');

    openModal.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('overflow-hidden');
    html.classList.remove('overflow-hidden');
}

modalTriggers.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const dataTrigger = item.getAttribute('data-trigger-modal');
        const modal = document.querySelector('#' + dataTrigger);

        showModal();
        modal.classList.add('show');
    })
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})




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