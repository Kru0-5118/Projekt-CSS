let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSliderPosition();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSliderPosition();
}