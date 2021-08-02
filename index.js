function openParagraf() {
    var x = document.getElementById("popover");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function closeParagraf() {
    var x = document.getElementById("popover");
    if (x.style.display === "block") {
        x.style.display = "none";
    }

}