let btn = document.querySelector('.dropdown__value')
let activator = document.querySelector('.dropdown__list')
const buttons = document.querySelectorAll('.dropdown__item')


btn.onclick = function () {
    if (activator.className === 'dropdown__list') {
        (activator.className = 'dropdown__list dropdown__list_active')
    }
    else {activator.className = 'dropdown__list'}
    }


for (var idx = 0; idx < buttons.length; idx ++) {
    buttons[idx].addEventListener('click', function(event) {
        btn.textContent = event.target.textContent;
    })}










    



