

// navscroll bar........................................
let nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scroll', window.scrollY > 0);
})

// Active Toggle navbar green line appearnce.......................................

let navlinka = document.querySelectorAll('.nav-link li a');

navlinka.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active')
    })
})

const removeActive = () => navlinka.forEach(item => {
    item.classList.remove('active')
})



// Menu bar 

let MenuBar = document.querySelector('nav button');
let navlinks = document.querySelector('.nav-link')

MenuBar.addEventListener('click', () => {
    navlinks.classList.toggle('nav-link-block')
})
