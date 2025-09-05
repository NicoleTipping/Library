# Library
This project is a small Library app built as part of a JavaScript course. It extends the classic "Book" example into a functional application where users can add, display, remove, and update books dynamically. The app focuses on separating data (book objects) from presentation (DOM display), providing a strong foundation for scalable and maintainable code.

## Features
- Add new books using a form (title, author, number of pages, read status).
- Display books as individual cards in the UI.
- Each book is assigned a unique ID using crypto.randomUUID() to prevent conflicts when books are added or removed.
- Toggle read status directly from each book card.
- Remove books from the library with a single click.
- Clear separation between data management (array of book objects) and DOM manipulation (rendering books on the page).

## Key Concepts Practiced
- Object constructors & prototypes for creating and managing books.
- Array methods for storing and manipulating book objects.
- DOM manipulation to dynamically display and update content.
- Event handling including event.preventDefault() for form submission.
- Unique identifiers with crypto.randomUUID().
- Separation of data logic from UI logic to encourage cleaner, reusable code.

## What I Learned
This project strengthened my understanding of working with constructors, prototypes, and arrays in JavaScript. I learned the importance of separating data from presentation, ensuring my app logic remains reusable and easy to extend. I also gained hands-on experience with DOM manipulation, event handling, and dynamic rendering, which are essential skills for front-end development.