const template = document.createElement('template');
import { grabber } from './grabber.js';
import { Book } from './book.js';

const bookf = new Book();
export function initialLoad() {
  const oldBooks = JSON.parse(localStorage.getItem('booksArray')) || [];
  grabber('books-container').innerHTML = '';
  oldBooks.forEach((bookItem, index) => {
    const btn = document.createElement('button');
    btn.className = 'add-book-btn';
    btn.innerText = 'Remove';
    btn.addEventListener('click', () => {
      bookf.deleteBook(index);
      initialLoad();
    });

    template.innerHTML = `<li class='book-item' id='b-cont'><div class='book-details'>
                <h5>${bookItem.title} by ${bookItem.author}</h5></div>
                </li>`;
    const far = template.content.lastElementChild;
    template.content.getElementById('b-cont').appendChild(btn);
    grabber('books-container').appendChild(far);
  });
}
