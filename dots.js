function openParagraf() {
    var x = document.getElementById("popover");
    if (x.style.display === "none") {
        x.style.display = "flex";
    }
}

function closeParagraf() {
    var x = document.getElementById("popover");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }

}