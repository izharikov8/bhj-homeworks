const pics = Array.from(document.querySelectorAll('.slider__item')); 
const back = document.querySelector('.slider__arrow_prev');
const forward = document.querySelector('.slider__arrow_next');

let sliderCount = 0;
const picsLength = pics.length;

function setBack () {
    pics[sliderCount].className = 'slider__item'
}

function set () {
    pics[sliderCount].className = 'slider__item slider__item_active'
}

forward.onclick = () => {
    setBack();
    sliderCount++;
    if (sliderCount == picsLength) {
        sliderCount = 0
    }
    set()
}

back.onclick = () => {
    setBack();
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = picsLength - 1;
    }
    set()
}