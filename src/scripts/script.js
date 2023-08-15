// Variables
const divHamburger = document.querySelector("div.header__main-nav__hamburger");
const divHamburgerMenu = document.querySelector("div.header__hamburger-menu");

// Events
divHamburger.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
        divHamburger.classList.toggle("active");
        divHamburgerMenu.classList.toggle("active");
    }
});