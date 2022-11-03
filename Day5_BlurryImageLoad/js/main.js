const pictureBox = document.querySelector('#bkg-container');
const percentText = document.querySelector('#percent');
const percentBox = document.querySelector('#percent-container');

window.addEventListener('load', e => {
        const progressCount = 100;
        let timeOffset = 100;

        for(let i = progressCount; i >= 0; i--) {
            setTimeout(function() {adjustBlur(i * .2);}, timeOffset)
            setTimeout(function() {adjustPercent(progressCount - i, i / 100);}, timeOffset)
            timeOffset += 50;
        }
    }
);

function adjustBlur(blurVal) {
    pictureBox.style.webkitTransform = `blur(${blurVal}px)`;
    pictureBox.style.mozTransform = `blur(${blurVal}px)`;
    pictureBox.style.filter = `blur(${blurVal}px)`;
}

function adjustPercent(percent, opacityVal) {
    percentText.textContent = `${percent}%`;
    percentBox.style.opacity = opacityVal;
}