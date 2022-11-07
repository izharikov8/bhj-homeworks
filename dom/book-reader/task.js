const bookBtn = document.querySelector('.book');

bookBtn.onclick = function(event) {
    for (var idx = 0; idx < fonts.length; idx++) {
        if (fonts[idx].classList.contains('font-size_active')){
            fonts[idx].classList.remove('font-size_active')
        }
    }
    if (event.target.className === 'font-size font-size_small') {
        event.target.className = 'font-size font-size_small font-size_active';
        bookBtn.className = 'book book_fs-small';
    }
    if (event.target.className === 'font-size' ) {
        event.target.className = 'font-size font-size_active';
        bookBtn.className = 'book';
    }
    if (event.target.className === 'font-size font-size_big') {
        event.target.className = 'font-size font-size_big font-size_active'    
        bookBtn.className = 'book book_fs-big'
    }
    event.preventDefault()
}