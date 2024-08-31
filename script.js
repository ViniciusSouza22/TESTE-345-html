
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const isMenuOpen = menu.style.left === '0px';
    menu.style.left = isMenuOpen ? '-250px' : '0px';
}


window.addEventListener('click', (event) => {
    const menu = document.getElementById('side-menu');
    const button = document.querySelector('.menu-button');

    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.left = '-250px';
    }
});



