const soundboard = document.querySelectorAll('#sound-board button');

for(let i = 0; i < soundboard.length; i++) {
    soundboard[i].addEventListener('click',  e => {playAudio(e);});
}

function playAudio(element) {
    const audio = document.querySelector(`#${element.target.id} + audio`);
    audio.play();
}