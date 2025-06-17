## 📚 Bookspace - A Personal Library App (Built Using HTML, CSS, and JavaScript)

**Description of What I Did:**

I created a basic library application where users can add, view, and manage books using a simple web interface. I used **vanilla JavaScript** to build the core functionality, without any frameworks or external libraries.

### 🔨 Key Features I Implemented:

* **Book Constructor with Unique IDs**:
  I used a JavaScript constructor function `Book()` to create book objects, and each book gets a unique ID using `crypto.randomUUID()` to ensure easy tracking and manipulation.

* **Central Book Storage**:
  All book objects are stored in a global array called `booksStorage`. This array acts as the temporary storage for the session, but it **doesn't persist after a page reload**, as I haven’t yet added any storage method like `localStorage` or database support.

* **Dynamic Form Generation**:
  When the "Add a Book" button is clicked, I dynamically generate and insert a form into the page using JavaScript. The form includes input fields for title, author, and number of pages. On submission, I use `event.preventDefault()` to prevent the default reload behavior and add the new book to the `booksStorage` array and the DOM.

* **DOM Manipulation for Display**:
  I created a function to loop through the `booksStorage` array and render each book as a card inside the `.books-container`. Each card includes the book’s title and author, and two buttons: one to toggle read status and another to delete the book.

* **Delete Book Feature**:
  Each book card includes a "Remove" button. When clicked, it removes the corresponding book both from the `booksStorage` array and from the DOM. I achieved this using the `book.id` with a `data-id` attribute for accurate identification.

* **Toggle Read Status**:
  I added a prototype method `changeReadStatus()` on the Book constructor that toggles the `hadReadBook` boolean value. A button on each book card allows toggling between "Want to Read" and "Completed Reading", and I also change the button's styling based on its state.

---

### ⚠️ Limitations (as of now):

* The data is stored only in memory, so all added books are lost on page reload.
* The UI and logic are separated, but I haven’t implemented persistent storage like `localStorage` or any backend yet.
* The app is functional but not optimized for responsiveness or larger-scale interaction yet.


