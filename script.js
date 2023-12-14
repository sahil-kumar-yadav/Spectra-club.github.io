// script for navigation bar

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

    // Attached the updateNavbar function to the window's scroll event
    window.addEventListener("scroll", function () {
        updateNavbar();
    });

    // Initial update
    updateNavbar();
});


// scroll to section not working
// script.js

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// contributers script




