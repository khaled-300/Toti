function toggle() {
    var responsive = document.getElementById("mynavbar");
    if (responsive.className === "navbar") {
        responsive.className += " responsive";
    } else {
        responsive.className = "navbar";
    }
}