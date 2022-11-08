let observer = new IntersectionObserver(onEntry);

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('reveal_active');
      }
    });
  }


  let elements = document.querySelectorAll('.reveal');
  for (let elm of elements) {
    observer.observe(elm);
  }