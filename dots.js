function openParagraf(number) {
    let x = document.getElementById("popover-" + number);
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
}

function closeParagraf(number) {
    let x = document.getElementById("popover-" + number);
    if (x.style.display === "flex") {
        x.style.display = "none";
    }

}