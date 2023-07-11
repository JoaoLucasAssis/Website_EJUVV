// Variables
const divHamburger = document.querySelector("div.header__main-nav__hamburger");
const divHamburgerMenu = document.querySelector("div.header__hamburger-menu");

// Eventt
divHamburger.addEventListener('click', () => {
    divHamburger.classList.toggle("active");
    divHamburgerMenu.classList.toggle("active");
});