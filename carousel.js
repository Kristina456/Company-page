var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow__section");
    var dots = document.getElementsByClassName("dot");
    var img = document.getElementsByClassName("dot__img");
    var text = document.getElementsByClassName("dot__text");



    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        img[i].className = img[i].className.replace(" dot__img--active", "");
        text[i].className = text[i].className.replace(" dot__text--active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    img[slideIndex - 1].className += " dot__img--active";
    text[slideIndex - 1].className += " dot__text--active";
}