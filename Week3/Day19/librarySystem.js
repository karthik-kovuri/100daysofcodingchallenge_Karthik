class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false; 
    }

    markAsRead() {
        this.read = true;
    }

    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
    }

    listAllBooks() {
        console.log("Library Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()} (${book.read ? "Read" : "Unread"})`);
        });
    }
}
const myLibrary = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book3 = new Book("1984", "George Orwell", 328);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
book2.markAsRead();
myLibrary.listAllBooks();
