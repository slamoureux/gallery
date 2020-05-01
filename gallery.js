const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const galleryImages = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevButton.addEventListener("click", function () {
    galleryImages[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImages[currentlySelected].classList.add("active");
    nextButton.disabled = false;

    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});

nextButton.addEventListener("click", function () {
    galleryImages[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImages[currentlySelected].classList.add("active");
    prevButton.disabled = false;

    if (galleryImages.length - 1 === currentlySelected) {
        nextButton.disabled = true;
    }
});