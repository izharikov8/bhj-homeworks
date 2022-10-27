const pics = Array.from(document.querySelectorAll('.slider__item')); 
const back = document.querySelector('.slider__arrow_prev');
const forward = document.querySelector('.slider__arrow_next');

const picsLength = pics.length;

function setBack (sliderCount) {
    pics[sliderCount].className = 'slider__item'
}

function set (sliderCount) {
    pics[sliderCount].className = 'slider__item slider__item_active'
}

forward.onclick = () => {
    let sliderCount = pics.findIndex(item => item.className === 'slider__item slider__item_active')
    setBack(sliderCount);
    sliderCount++;
    if (sliderCount == picsLength) {
        sliderCount = 0
    }
    set(sliderCount)
}

back.onclick = () => {
    let sliderCount = pics.findIndex(item => item.className === 'slider__item slider__item_active')
    setBack(sliderCount);
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = picsLength - 1;
    }
    set(sliderCount)
}