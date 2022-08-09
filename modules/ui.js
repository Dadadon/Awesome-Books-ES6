import grabber from './grabber.js';
export function showContact() {
    grabber('add-books-section').style.display = 'none';
    grabber('contact-section').style.display = 'none';
    grabber('book-section').style.display = 'block';
}

export function showAddBook() {
    grabber('add-books-section').style.display = 'block';
    grabber('book-section').style.display = 'none';
    grabber('contact-section').style.display = 'none';
}

export function showBookList() {
     grabber('add-books-section').style.display = 'none';
     grabber('book-section').style.display = 'none';
     grabber('contact-section').style.display = 'block';
}