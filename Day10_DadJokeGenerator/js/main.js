const jokeBox = document.querySelector('#joke-message');
const jokeButton = document.querySelector('#joke-button');
const url = 'https://icanhazdadjoke.com'; 

window.addEventListener('load', displayJoke);
jokeButton.addEventListener('click', displayJoke);

async function displayJoke() {
    let joke = await getJoke(url);
    jokeBox.textContent = joke;
}

async function getJoke(url) {
    let response;
    try {
        response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Ed GitHub project'
            }
        });        
    } catch (error) {
        response = 'Network issues with connecting to server to get jokes';
        // console.log(error)
    }

    if(response.status !== 200) {
        return (typeof response.statusText !== undefined ? response : response.statusText);
    }

    const result = await response.json();
    return result.joke;
  };