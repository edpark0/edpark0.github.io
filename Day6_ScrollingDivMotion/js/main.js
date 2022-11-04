const divs = document.querySelectorAll('.container');

['scroll', 'load', 'resize'].forEach( e =>
    window.addEventListener(e, scrollAnimation)
);

function scrollAnimation() {
    const visibleHeight = 175;
    const winHeight = window.innerHeight;

    for(let i = 0; i < divs.length; i++) {
        let elemTopEdge = divs[i].getBoundingClientRect().top;

        // console.log(elemTopEdge);
        //Add this to have the top part behaving like the bottom: && elemTopEdge >= 0
        if(elemTopEdge < winHeight - visibleHeight) {
            divs[i].classList.add("slide-motion")
        } else {
            divs[i].classList.remove("slide-motion")
        }
    }
}