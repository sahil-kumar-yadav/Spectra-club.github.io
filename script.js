// script.js

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var navbarOffset = navbar.offsetTop;

    function updateNavbar() {
        if (window.scrollY > navbarOffset) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    // Attach the updateNavbar function to the window's scroll event
    window.addEventListener("scroll", function () {
        updateNavbar();
    });

    // Initial update
    updateNavbar();
});
