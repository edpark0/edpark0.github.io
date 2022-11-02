const searchButton = document.querySelector("#search-submit");
searchButton.addEventListener('click', searchToggle);

function searchToggle() {
    const searchBar = document.querySelector("#search-text")
    searchBar.classList.toggle("show-search");
}