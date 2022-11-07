const username = document.querySelector('#username');
const password = document.querySelector('#password');

addTransitionDelays(username, 50);
addTransitionDelays(password, 50); 
toggleUserLabel();

username.addEventListener('focus', e => { doWaveStyle(e.target) });
username.addEventListener('blur', e => { doWaveStyle(e.target) });

password.addEventListener('focus', e => { doWaveStyle(e.target) });
password.addEventListener('blur', e => { doWaveStyle(e.target) });

function addTransitionDelays(element, offset) {
    const letters = getLabelChildsById(element);

    for(let i = 0; i < letters.length; i++) {
        letters[i].style.WebkitTransitionDelay = `${i * offset}ms`;
        letters[i].style.transitionDelay = `${i * offset}ms`;
    }
}

function doWaveStyle(element) {
    if(!String(element.value)) {
        toggleWaveStyle(element);
    } 
}

function toggleWaveStyle(element) {
    const letters = getLabelChildsById(element);

    for(let i = 0; i < letters.length; i++) {        
        letters[i].classList.toggle('wave-up');
    }
}

function toggleUserLabel() {
    if(String(username.value)) {
        toggleWaveStyle(username);
    }
}

function getLabelChildsById(element) {
    return document.querySelector(`label[for="${element.id}"]`).children;
}