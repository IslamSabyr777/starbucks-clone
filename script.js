const hamburgerIcon = document.getElementById('hamburger-icon');

const hamburgerMenu = document.getElementById('id-hamburger-menu');

function menuToggle() {
    hamburgerIcon.classList.toggle('open')
    hamburgerMenu.classList.toggle('hamburger-menu-hidden')
}

hamburgerIcon.addEventListener('click', menuToggle)