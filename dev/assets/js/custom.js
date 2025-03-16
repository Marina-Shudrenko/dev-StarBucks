const burger = document.querySelector('#btn-burger')
const mobileContainer = document.querySelector('#mobile-container')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    mobileContainer.classList.toggle('show')
})

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
