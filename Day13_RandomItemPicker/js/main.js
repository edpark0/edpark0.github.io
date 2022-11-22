const textBox = document.querySelector('#user-input');
const results = document.querySelector('#results');
let timeoutArr = [];

textBox.addEventListener('keyup', makeItemList);

function makeItemList(e) {
    clearTimeouts();

    if(e.code.toLowerCase() === "enter") {
        if(textBox.value.trim() !== "") {
            randomItemPicker();    
        } else {
            removeAllChilds(results)
        }

        textBox.value = "";
    } else {
        const items = textBox.value
            .split(',')
            .map(element => element.trim())
            .filter(element => element);

        removeAllChilds(results);

        items.forEach(element => {
            const resultsChild = results.appendChild(document.createElement('span'));
            resultsChild.classList.add('items');
            resultsChild.textContent = element;
        });
    }
}

function randomItemPicker() {
    const results = document.querySelectorAll('#results span');
    const maxEntities = results.length;
    let currIndex = 0;

    //ensure all span childs are de-selected
    for(let i = 0; i < results.length; i++) {
        results.item(i).classList.remove('selected')
    }

    //first remove previous nth child with selected class,
    //then add that class to random new nth child, to give a toggle appearance
    for(let i = 0; i < 30; i++) {
        timeoutArr.push(
            setTimeout(function() {
                if(i % 2 === 0) {
                    // console.log('even', currIndex)
                    results.item(currIndex).classList.remove('selected')
                } else {
                    currIndex = getRandomIndex(maxEntities);
                    //console.log('odd', currIndex)
                    results.item(currIndex).classList.add('selected')
                } 
            }, 100 * i) 
        ); 
    }
}

function getRandomIndex (num) {
    return Math.floor(Math.random() * num);
}

function removeAllChilds(element) {
    let child = element.lastElementChild; 
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
}

//This is to ensure if user immediately takes some action while timeouts are running,
//to simply cancel queued timeouts and empty the array
//this ensures we are only clearing timeouts made by us, not from external sources
function clearTimeouts() {
    if(timeoutArr.length > 0) {
        for(let i = 0; i < timeoutArr.length; i++) {
            clearTimeout(timeoutArr[i]);
        }

        timeoutArr = [];
    }
}