const popUps = Array.from(document.querySelectorAll('.reveal'))

for (var idx = 0; idx < popUps.length; idx++) {
    const { top, bottom } = popUps[idx].getBoundingClientRect();
    if (popUps[idx].bottom < 0) {
        popUps[idx].className = 'reveal'

    }

    if (popUps[idx].top > window.innerHeight) {
        popUps[idx].className = 'reveal'
    }
    else {
        popUps[idx].className = 'reveal reveal_active'
    }
}