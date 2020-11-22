const menuTarget = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

menuTarget.addEventListener('click', () => {
    event.preventDefault()
    menuTarget.lastElementChild.classList.toggle('text-brand')
    menu.classList.toggle('hidden')
})