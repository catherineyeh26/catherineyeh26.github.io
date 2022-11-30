

function toggleteas() {
    container.colordots.classList.toggle("visible");
    container.discriptions.classList.toggle("visible");

}
function toggleWhite() {
    document.getElementById("white_intro").classList.toggle("visible");
}
document.getElementById("white_color").onclick = toggleWhite;
document.getElementById("green_color").onhover = toggleteas;
document.getElementById("black_color").onhover = toggleteas;

// colordots: position absolute
// hw 9(from week 9)

