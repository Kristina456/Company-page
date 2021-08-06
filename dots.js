function openParagraf(number) {
    var x = document.getElementById("popover-" + number);
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
}

function closeParagraf(number) {
    var x = document.getElementById("popover-" + number);
    if (x.style.display === "flex") {
        x.style.display = "none";
    }

}