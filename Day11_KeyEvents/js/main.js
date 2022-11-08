window.addEventListener('keydown', getKeyData);

//as soon as first key is pressed, this gets executed once and removed
window.addEventListener('keydown', togglePromptDisplays, {once : true});

function getKeyData(e) {
    const eKey = document.querySelector('#event-key');
    const eAscii = document.querySelector('#event-ascii');
    const eCode = document.querySelector('#event-code');

    eKey.textContent = e.key;
    eAscii.textContent = e.key.charCodeAt(0);
    eCode.textContent = e.code;
}

function togglePromptDisplays() {
    const keyPrompt = document.querySelectorAll('.key-prompt');
    const keyEvents = document.querySelectorAll('.key-events');

    keyPrompt.forEach(element => element.classList.toggle('hide'));
    keyEvents.forEach(element => element.classList.toggle('hide'));
}