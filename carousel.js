let slides = document.querySelectorAll(".slideshow__section");
let slideDots = document.querySelectorAll(".slideshow__dots__dot");

// Slide idexes
let currentSlideIndex = 0;
const lastSlideIndex = slides.length - 1;

function nextSlide() {
    if (currentSlideIndex === lastSlideIndex) {
        currentSlideIndex = 0;
        currentSlide(currentSlideIndex);
    } else {
        currentSlideIndex += 1;
        currentSlide(currentSlideIndex)
    }
}

function previousSlide() {
    if (currentSlideIndex === 0) {
        currentSlideIndex = lastSlideIndex;
        currentSlide(currentSlideIndex)
    } else {
        currentSlideIndex -= 1;
        currentSlide(currentSlideIndex)
    }
}

function currentSlide(index) {
    for (let i = 0; i <= lastSlideIndex; i++) {
        inactiveSlide(slideDots[i], slides[i]);
    }
    activeSlide(slideDots[index], slides[index]);
}


function activeSlide(dot, section) {
    const dotItem = dot.querySelector(".one-dot__item");
    const dotText = dot.querySelector(".dot__text");

    const dotItemDarts = dotItem.querySelectorAll(".dart");
    dotItemDarts.forEach(dart => {
        if (dart.classList.contains("u-hide")) {
            dart.classList.remove("u-hide");
        }

        if (!dart.classList.contains("u-show")) {
            dart.classList.add("u-show");
        }
    })

    const dotItemImage = dotItem.querySelector(".dot__img");

    if (dotItemImage.classList.contains("dot__img--inactive")) {
        dotItemImage.classList.remove("dot__img--inactive")
    }

    if (!dotItemImage.classList.contains("dot__img--active")) {
        dotItemImage.classList.add("dot__img--active")
    }

    if (dotText.classList.contains("dot__text--inactive")) {
        dotText.classList.remove("dot__text--inactive");
    }

    if (!dotText.classList.contains("dot__text--active")) {
        dotText.classList.add("dot__text--active");
    }

    section.style.display = "block";
}

function inactiveSlide(dot, section) {
    const dotItem = dot.querySelector(".one-dot__item");
    const dotText = dot.querySelector(".dot__text");

    const dotItemDarts = dotItem.querySelectorAll(".dart");
    dotItemDarts.forEach(dart => {
        if (dart.classList.contains("u-show")) {
            dart.classList.remove("u-show");
        }

        if (!dart.classList.contains("u-hide")) {
            dart.classList.add("u-hide");
        }
    })

    const dotItemImage = dotItem.querySelector(".dot__img");

    if (dotItemImage.classList.contains("dot__img--active")) {
        dotItemImage.classList.remove("dot__img--active")
    }

    if (!dotItemImage.classList.contains("dot__img--inactive")) {
        dotItemImage.classList.add("dot__img--inactive")
    }

    if (dotText.classList.contains("dot__text--active")) {
        dotText.classList.remove("dot__text--active");
    }

    if (!dotText.classList.contains("dot__text--inactive")) {
        dotText.classList.add("dot__text--inactive");
    }

    section.style.display = "none";
}

currentSlide(0);