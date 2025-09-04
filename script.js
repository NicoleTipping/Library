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
        "name": "Fouth Wing",
        "author": "Rebecca Yarros",
        "pages": 465,
        "read": true,
    },
];

function Book(name, author, pages, read) {
    if (!new.target) {
        throw Error("You must use 'new' operator to call constructor")
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (read === true) {
            return `${name} by ${author}, ${pages} pages, read`
        } else {
            return `${name} by ${author}, ${pages} pages, not read yet`
        }
    }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(hobbit.info());

function addBookToLibrary() {
    // take params, create a book then store it in the array
}
