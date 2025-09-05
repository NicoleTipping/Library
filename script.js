let libraryConatiner = document.querySelector('.library-container');
let newBookButton = document.querySelector('.newBookButton');
let newBookForm = document.querySelector('.newBookForm');
let deleteButton = document.querySelector('.deleteButton')

let title = ''
let author = ''
let pages = 0
let read = false

const myLibrary = [
    {
        "id": crypto.randomUUID(),
        "title": "Throne of Glass",
        "author": "Sarah J. Maas",
        "pages": 295,
        "read": true,
    },
    {
        "id": crypto.randomUUID(),
        "title": "Shadow of the Gods",
        "author": "John Gwynne",
        "pages": 508,
        "read": false,
    },
    {
        "id": crypto.randomUUID(),
        "title": "Fourth Wing",
        "author": "Rebecca Yarros",
        "pages": 465,
        "read": true,
    },
];

function displayArray() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')
        bookCard.innerHTML = `
        <div class='id' hidden>${book.id}</div>
        <div class="title">${book.title}</div>
        <div>By</div>
        <div class="author">${book.author}</div>
        <div class="pages">${book.pages} pages</div>
        <div class="buttons">
            <button type="button" class="readButton">Read</button>
            <button type="button" class="deleteButton" data-id="${book.id}" >Delete</button>
        </div>
    `;
        libraryConatiner.appendChild(bookCard);
    });
};
displayArray();

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelector('.newBookButton').style.display = "block"

    document.querySelector('.form-container').style.display = "none"

    title = e.target.elements[0].value
    author = e.target.elements[1].value
    pages = Number(e.target.elements[2].value)
    if (document.querySelector('input[type="radio"]:checked')) {
        read = true
    } else {
        read = false
    }

    addBookToLibrary(title, author, pages, read);
});

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook)

    document.querySelector('.library-container').innerHTML = ""

    displayArray()
};

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

newBookButton.addEventListener("click", () => {
    document.querySelector('.form-container').style.display = "block";
    document.querySelector('.newBookButton').style.display = "none";
});

libraryConatiner.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteButton')) {
        let id = e.target.dataset.id
        let findBook = myLibrary.findIndex(book => book.id == id)

        if (findBook !== -1) {
            myLibrary.splice(findBook, 1)

            e.target.closest('.book-card').remove()
        }
    }
});