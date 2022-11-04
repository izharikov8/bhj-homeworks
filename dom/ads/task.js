const rotators = Array.from(document.querySelectorAll('.rotator__case'));

setInterval (function rotation() {
  let idx = rotators.findIndex((rotatorCase) => 
    rotatorCase.classList.contains('rotator__case_active'));

  rotators[idx].classList.remove('rotator__case_active');
  idx += 1;

  if (idx === rotators.length) {
    idx = 0;
    rotators[idx].classList.add('rotator__case_active');
  } else {
      rotators[idx].classList.add('rotator__case_active');
  }
}, 1000);