const albums = document.querySelectorAll('.expanding-album');

for(let i = 0; i < albums.length; i++) {
    albums[i].addEventListener('click', e => {
            // console.log(e.target);
            // console.log(e.target.parentNode); 
            // console.log(e.currentTarget);
            const parent = e.target.parentNode;

            if(parent.classList.contains('pic-slide')) {
                let slides = e.currentTarget.children;
                
                for(let slide of slides) {
                    slide.classList.remove('selected');
                }
                
                parent.classList.add('selected');
            }
        }
    );
}