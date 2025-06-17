const booksContainer = document.querySelector('.books-container');
const formEl = document.createElement('form');
const btn = document.querySelector('button');

const booksStorage = [];


function Book(title, author, pages, genre, subGenre, publishedDate, isAvailable, copyType){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.subGenre = subGenre;
    this.publishedDate = publishedDate;
    this.isAvailable = isAvailable;
    this.copyType = copyType;
}

Book.prototype.changeReadStatus = function(){
    this.isAvailable = !this.isAvailable;
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

    bookEl.textContent = `${book.title}, ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = "Remove";

    const readBtn = document.createElement('button');
    readBtn.classList.add('read-button');
    readBtn.textContent = book.isAvailable ? "Unread" : "Read";
    readBtn.style.background = book.isAvailable ? "Green" : "Grey";
    readBtn.style.border = "1px solid white";
    readBtn.style.color = "white";
    
    removeBtn.addEventListener('click', () => {
        const idOfTheBook = bookEl.getAttribute('data-id');
        removeBook(idOfTheBook);
    });

    readBtn.addEventListener("click", () => {
        book.changeReadStatus();
        readBtn.textContent = book.isAvailable ? "Unread" : "Read";
        readBtn.style.background = book.isAvailable ? "Green" : "Grey";
        readBtn.style.border = "1px solid white";
        readBtn.style.color = "white";
    });

    booksContainer.appendChild(bookEl);
    bookEl.appendChild(removeBtn);
    bookEl.appendChild(readBtn);
}



btn.addEventListener('click', () => {
    
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

    document.body.appendChild(formEl);
});

formEl.addEventListener('submit', (event) => {

    event.preventDefault();

    const author = formEl.elements['author'].value;
    const title = formEl.elements['title'].value;
    const pages = formEl.elements['pages'].value;
})