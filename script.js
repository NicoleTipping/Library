let libraryConatiner = document.querySelector('.library-container');
let newBookButton = document.querySelector('.newBookButton');
let newBookForm = document.querySelector('.newBookForm');


const myLibrary = [
    {
        "id": crypto.randomUUID(),
        "name": "Throne of Glass",
        "author": "Sarah J. Maas",
        "pages": 295,
        "read": true,
    },
    {
        "id": crypto.randomUUID(),
        "name": "Shadow of the Gods",
        "author": "John Gwynne",
        "pages": 508,
        "read": false,
    },
    {
        "id": crypto.randomUUID(),
        "name": "Fourth Wing",
        "author": "Rebecca Yarros",
        "pages": 465,
        "read": true,
    },
];

myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    bookCard.innerHTML = `
        <div class="title">${book.name}</div>
        <div>By</div>
        <div class="author">${book.author}</div>
        <div class="pages">${book.pages} pages</div>
        <div class="buttons">
            <button type="button" class="readButton">Read</button>
            <button type="delete" class="deleteButton">Delete</button>
        </div>
    `;
    libraryConatiner.appendChild(bookCard);
});

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

newBookButton.addEventListener("click", () => {
    document.querySelector('.form-container').style.display = "block";
    document.querySelector('.newBookButton').style.display = "none";
});

newBookForm.addEventListener("submit", () => {
    document.querySelector('.newBookButton').style.display = "block";
})

function addBookToLibrary(name, author, pages, read) {
    // take params, create a book then store it in the array
    
};