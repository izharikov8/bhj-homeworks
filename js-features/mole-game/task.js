(() => {
    const inputs = document.querySelectorAll('div > .hole');
    for (var idx = 0; idx < inputs.length; idx++) {
        inputs[idx].addEventListener("click", getHole);
    }
    function getHole() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent < 9 & lost.textContent < 4) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent = Number(dead.textContent) + 1;
            } else {
                lost.textContent = Number(lost.textContent) + 1;
            }
        } else 
        if (dead.textContent == 9) {
            alert('You won!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 4){
            alert('You lost!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    })();
