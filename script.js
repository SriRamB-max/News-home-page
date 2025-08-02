const btnOpen = document.getElementById('btnOpen')
const body = document.querySelector('body')
const overlay = document.getElementById('layer')
const menuContent = document.getElementById('content')
const btnClose = document.getElementById('btn-close')
btnOpen.addEventListener("click", (e) => {
    e.preventDefault()

    menuContent.classList.add('open');
    menuContent.classList.remove('menu-content');
    body.classList.add('overflow');
    overlay.classList.add('overlay');
    overlay.classList.remove('overlay-hidden');

});

btnClose.addEventListener("click", (e) => {
    e.preventDefault()
    
    menuContent.classList.remove('open');
    menuContent.classList.add('menu-content');
    body.classList.remove('overflow');
    overlay.classList.remove('overlay');
    overlay.classList.add('overlay-hidden');

});