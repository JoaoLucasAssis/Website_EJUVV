// Variables
const divHamburger = document.querySelector("div.header__main-nav__hamburger");
const divHamburgerMenu = document.querySelector("div.header__hamburger-menu");

const header = document.querySelector("header#header");

// Events
divHamburger.addEventListener("click", () => {
    if (window.innerWidth <= 800) {
        divHamburger.classList.toggle("active");
        divHamburgerMenu.classList.toggle("active");
    }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#282A6B";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
