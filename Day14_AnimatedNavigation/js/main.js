const navToggle = document.querySelector('#toggle')

navToggle.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    const menuLinks = document.querySelectorAll('#nav-menu .link');

    if(navToggle.classList.contains('fa-xmark')) {
        navToggle.classList.remove('fa-xmark')
        navToggle.classList.add('fa-bars');
        navToggle.ariaLabel = "Open navigation menu"
    } else {
        navToggle.classList.remove('fa-bars')
        navToggle.classList.add('fa-xmark')   
        navToggle.ariaLabel = "Close navigation menu"
    }

    navToggle.classList.toggle('spinning-toggle');
    menuLinks.forEach(element => element.classList.toggle('hidden'));
}