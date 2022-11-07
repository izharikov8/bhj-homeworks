const bookBtn = document.querySelector('.book');

bookBtn.onclick = function(event) {
    if (event.target.className === 'font-size font-size_small') {
        bookBtn.className = 'book book_fs-small'
    }
    if (event.target.className === 'font-size font-size_active') {
        bookBtn.className = 'book'
    }
    if (event.target.className === 'font-size font-size_big') {
        bookBtn.className = 'book book_fs-big'
    }
    event.preventDefault()
}