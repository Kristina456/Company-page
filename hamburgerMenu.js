function hamburgerMenu() {
    const MENU = document.getElementById("small-nav");
    if (MENU.classList.contains("hide")) {
        MENU.classList.remove("hide");
        MENU.classList.add("show");
    } else {
        MENU.classList.remove("show");
        MENU.classList.add("hide");
    }
}