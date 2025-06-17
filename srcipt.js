const booksContainer = document.querySelector('.books-container');
const formContainer = document.querySelector('.form-container');

const btn = document.querySelector('button');

const booksStorage = [];


function Book(title, author, pages, genre, subGenre, publishedDate, hadReadBook, copyType){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.subGenre = subGenre;
    this.publishedDate = publishedDate;
    this.hadReadBook = hadReadBook;
    this.copyType = copyType;
}

Book.prototype.changeReadStatus = function(){
    this.hadReadBook = !this.hadReadBook;
}

function addBookToStorage(){
    const b1 = new Book("The Bride", "Judith Mcnaught", "Romance", "Historical Romance", "2018", true, "eBook" );
    const b2 = new Book("A Bride for the Prizefighter", "Alice Coldbreath", "Romance", "Historical Romance", "2019", true, "eBook" );
    const b3 = new Book("His Seductive Mistress", "Elizabeth Holls", "Romance", "Historical Romance", "2017", true, "eBook" );
    const b4 = new Book("His Consolation Prize", "Alice Coldbreath", "Romance", "Historical Romance", "2009", true, "eBook" );

    booksStorage.push(b1);
    booksStorage.push(b2);
    booksStorage.push(b3);
    booksStorage.push(b4);

}

function removeBook(id){
    const index = booksStorage.findIndex(book => book.id === id);
    
    if(index !== -1){
        booksStorage.splice(index, 1);
    }

    const bookElement = document.querySelector(`[data-id ="${id}"]`)

    if(bookElement){
        bookElement.remove();
    }
    
}
addBookToStorage();

for(let book of booksStorage){
    const bookEl = document.createElement('div');
    bookEl.classList.add('book-El');
    bookEl.setAttribute('data-id', book.id);

    const titleEl = document.createElement('h3');
    const authorEl = document.createElement('h4');

    titleEl.textContent = book.title;
    authorEl.textContent = book.author;
    
    // bookEl.textContent = `${book.title}, ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = "Remove";

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-button');
    readBtn.textContent = book.hadReadBook ? "Completed Reading" : "Want to Read";
    readBtn.classList.add(book.hadReadBook ? 'had-read-the-book': 'not-read-the-book');
    
    removeBtn.addEventListener('click', () => {
        const idOfTheBook = bookEl.getAttribute('data-id');
        removeBook(idOfTheBook);
    });

    readBtn.addEventListener("click", () => {
        book.changeReadStatus();
        readBtn.textContent = book.hadReadBook ? "Completed Reading" : "Want to Read";

        readBtn.classList.remove('had-read-the-book', 'not-read-the-book');

        readBtn.classList.add( book.hadReadBook ? 'had-read-the-book': 'not-read-the-book');

    });

    booksContainer.appendChild(bookEl);
    bookEl.appendChild(titleEl);
    bookEl.appendChild(authorEl);
    bookEl.appendChild(removeBtn);
    bookEl.appendChild(readBtn);
}



btn.addEventListener('click', () => {

    formContainer.innerHTML = "";

    const formEl = document.createElement('form');

    const authorInput = document.createElement('input');
    authorInput.type = "text";
    authorInput.placeholder = "Enter Author name:";
    authorInput.classList.add('author-input');
    authorInput.name = "author";

    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.placeholder = "Enter Title of the book:";
    titleInput.classList.add('title-input');
    titleInput.name = "title";

    const pagesInput = document.createElement('input');
    pagesInput.type = "text";
    pagesInput.placeholder = "Enter the no of pages:";
    pagesInput.classList.add('pages-input');
    pagesInput.name = "pages";

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    submitBtn.classList.add('submit-btn');


    formEl.appendChild(authorInput);
    formEl.appendChild(titleInput);
    formEl.appendChild(pagesInput);
    formEl.appendChild(submitBtn);

    formContainer.appendChild(formEl);
});

formEl.addEventListener('submit', (event) => {

    event.preventDefault();



    const author = formEl.elements['author'].value;
    const title = formEl.elements['title'].value;
    const pages = formEl.elements['pages'].value;
})