let burger = document.querySelector('.menu-burger__header')
let nav = document.querySelector('.header__nav')
burger.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
  burger.classList.toggle('open-menu')
})
