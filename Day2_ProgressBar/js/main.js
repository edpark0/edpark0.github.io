const prevButtons = document.querySelectorAll('.prevProgress');
const nextButtons = document.querySelectorAll('.nextProgress');

for(let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', e => 
        {
            let counter;
            const parentProgress = e.target.parentNode.parentNode;
            const steps = parentProgress.querySelectorAll('ol > li');

            for(counter = 0; counter < steps.length; counter++) {
                if(!steps[counter].classList.contains('complete')) {
                    steps[counter].classList.add('complete');
                    break;
                }
            }

            if (counter === 3) {
                parentProgress.querySelector('.nextProgress').setAttribute("disabled", "");
            } else {
                parentProgress.querySelector('.prevProgress').removeAttribute("disabled");
            }
        }
    );
}

for(let i = 0; i < prevButtons.length; i++) {
    prevButtons[i].addEventListener('click', e => 
        {
            let counter;
            const parentProgress = e.target.parentNode.parentNode;
            const steps = parentProgress.querySelectorAll('ol > li');
        
            for(counter = steps.length-1; counter > 0; counter--) {
                if(steps[counter].classList.contains('complete')) {
                    steps[counter].classList.remove('complete');
                    break;
                }
            }

            if (counter === 1) {
                parentProgress.querySelector('.prevProgress').setAttribute("disabled", "");
            } else {
                parentProgress.querySelector('.nextProgress').removeAttribute("disabled");
            }
        }
    );
}

