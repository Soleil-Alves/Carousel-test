const slides = document.querySelectorAll(".carousel img")
const firstSlide = 0;
const lastSlide = slides.length - 1
let activeSlide = 0

const goToPrev = () => {
    slides[activeSlide].classList.remove("active")
    if (activeSlide !== firstSlide) {
        activeSlide = activeSlide - 1
    } else {
        activeSlide = lastSlide
    }
    slides[activeSlide].classList.add("active")
}

const goToNext = () => {
    slides[activeSlide].classList.remove("active")
    if (activeSlide !== lastSlide) {
        activeSlide = activeSlide + 1
    } else {
        activeSlide = firstSlide
    }
    slides[activeSlide].classList.add("active")
}