import { grabber } from './grabber.js';
const oldBooks = JSON.parse(localStorage.getItem('booksArray')) || [];
const form = document.forms['books-form'];


export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  deleteBook(index) {
    oldBooks.splice(index, 1);
    localStorage.setItem('booksArray', JSON.stringify(oldBooks));
  }

  addBook() {
    const title = form.booktitle;
    const author = form.bookauthor;
    const bookItem = new Book(title.value, author.value);
    oldBooks.push(bookItem);

    localStorage.setItem('booksArray', JSON.stringify(oldBooks));
    document.forms['books-form'].reset();
  }
}
