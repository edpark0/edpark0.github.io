const displayButtons = document.querySelectorAll('.display-toggle');
const toggleMenu = document.querySelector('#toggle-panel');
const contentPage = document.querySelector('#main-content');

for(let i = 0; i < displayButtons.length; i++) {
    console.log(displayButtons[i]);
    displayButtons[i].addEventListener('click', rotatePage);
}

function rotatePage() {
    toggleMenu.classList.toggle("rotate-perpendicular");
    contentPage.classList.toggle("rotate-main");
    document.querySelector('nav').classList.toggle("nav-show");
}