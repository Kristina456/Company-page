function hamburgerMenu() {
    const MENU = document.getElementById("small-nav");
    if (MENU.classList.contains("hide")) {
        console.log("SHowing menu")
        MENU.classList.remove("hide");
        MENU.classList.add("show");
    } else {
        console.log("Hiding menu")
        MENU.classList.remove("show");
        MENU.classList.add("hide");
    }
}