
// Selecciono el boton  y el nev mediante vanilla javascript
const btn = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');

nav.addEventListener("mouseout", hideNav);
btn.addEventListener("mouseover", displayNav);

function displayNav() {
    nav.style.display.remove = "none";
    nav.style.display = "block";
}

function hideNav() {
    nav.style.display.remove = "block";
    nav.style.display = "none";
}