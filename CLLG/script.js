// JavaScript to handle footer reveal
window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    let contentHeight = document.body.scrollHeight;
    let yOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;

    if (yOffset + windowHeight >= contentHeight) {
        footer.classList.add("show"); // Show the footer when scrolled to the bottom
    } else {
        footer.classList.remove("show"); // Hide the footer when not scrolled to the bottom
    }
});
