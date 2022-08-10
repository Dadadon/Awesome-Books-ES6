import grabber from './modules/grabber.js';
import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';
import { showAddBook, showBookList, showContact } from './modules/ui.js';
import initialLoad from './modules/initialLoad.js';

const bookf = new Book();
const date = DateTime;

grabber('date-section').innerHTML = date
  .now()
  .toLocaleString(date.DATETIME_MED);

initialLoad();

grabber('submit').addEventListener('click', () => {
  grabber('books-container').innerHTML = '';
  bookf.addBook();
  initialLoad();
});

grabber('add-books-section').style.display = 'none';
grabber('contact-section').style.display = 'none';
grabber('blist').addEventListener('click', () => {
  showContact();
});

grabber('abook').addEventListener('click', () => {
  showAddBook();
});

grabber('contact').addEventListener('click', () => {
  showBookList();
});
