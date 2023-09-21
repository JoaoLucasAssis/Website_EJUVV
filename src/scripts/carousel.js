const carousel = document.querySelector("ul.services__content--carousel__pages");
const pages = Array.from(carousel.children);
const pageWidth = pages[0].getBoundingClientRect().width;

const leftArrow = document.querySelector("div.services__content--carousel__arrow.left-arrow");
const rightArrow = document.querySelector("div.services__content--carousel__arrow.right-arrow");

// Set the initial position of each page
const setPagePosition = (page, index) => {

    page.style.left = pageWidth * index + "px";
};
pages.forEach(setPagePosition);

// Move to the next or previous page
const moveToPage = (currentPage, targetPage) => {

    if (targetPage !== null) {
        carousel.style.transform = `translateX(-${targetPage.style.left})`;

        currentPage.classList.remove("current-page");
        targetPage.classList.add("current-page");
    }
};

// Hide/Show arrows based on index
const hideShowArrows = (targetIndex) => {

    if (targetIndex === -1) {
        leftArrow.style.display = "none";
        rightArrow.style.display = "none";
    } else {
        leftArrow.style.display = targetIndex === 0 ? "none" : "block";
        rightArrow.style.display = targetIndex === pages.length - 1 ? "none" : "block";
    }

};

// Move the carousel to the previous page
leftArrow.addEventListener("click", () => {
    const currentPage = carousel.querySelector(".current-page");
    const previousPage = currentPage.previousElementSibling;

    const previousIndex = pages.findIndex((page) => page === previousPage);

    moveToPage(currentPage, previousPage);
    hideShowArrows(previousIndex);
});

// Move the carousel to the next page
rightArrow.addEventListener("click", () => {
    const currentPage = carousel.querySelector(".current-page");
    const nextPage = currentPage.nextElementSibling;

    const nextIndex = pages.findIndex((page) => page === nextPage);

    moveToPage(currentPage, nextPage);
    hideShowArrows(nextIndex);
});