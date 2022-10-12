// get (array) hamburger button
let toggleButton = document.getElementsByClassName("toggle-button")[0];
// returns array so we have to get the first and only value.

// get navbar links
let navbarLinks = document.getElementsByClassName("navbar-links")[0];
// returns array so we have to get the first and only value.

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active");
});