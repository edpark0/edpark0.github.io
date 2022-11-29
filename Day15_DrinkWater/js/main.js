const buttons = document.querySelectorAll('#filling-panel button');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', changeWaterLevel, false);
    buttons[i].myPos = i + 1;
}

function changeWaterLevel(e) {
    let currentPos = e.currentTarget.myPos;
    const prevPos = document.querySelectorAll('#filling-panel .water').length;

    //this handles the toggle like behavior if user clicks the same water level as previous level
    if(prevPos === currentPos) {
        currentPos--;
    }

    fillButtons(currentPos)
    displayFillerStatuses(currentPos)   
}

function fillButtons(buttonPos) { 
    for(let i = 0; i < buttons.length; i++) {
        if(i < buttonPos) {
            buttons[i].classList.add('water');
        } else {
            buttons[i].classList.remove('water');
        }
    }
}

function displayFillerStatuses(buttonPos) {
    const maxWaterLevel = 2;
    const emptySpace = document.querySelector('#empty-space');
    const waterSpace = document.querySelector('#water-space');
    const waterLevel = Number(buttonPos) / buttons.length * 100;

    waterSpace.style.flexBasis = `${waterLevel}%`;
    document.querySelector('#water-percentage').textContent = `${waterLevel}%`; 
    emptySpace.style.flexBasis = `${100 - waterLevel}%`;
    document.querySelector('#empty-remaining').textContent = `${(100 - waterLevel) * maxWaterLevel / 100}L`;
}