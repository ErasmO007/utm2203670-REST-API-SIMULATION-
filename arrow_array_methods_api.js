const Books = [
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "ISBN": "9781408855652",
        "year": 1997,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 10,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "ISBN": "9781408855669",
        "year": 1998,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 2,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Cracking the Coding Interview",
        "ISBN": "9780984782857",
        "year": 2015,
        "genre": "Technical",
        "author": "Gayle Laakmann McDowell",
        "stock": 5
    },
    {
        "title": "The Alchemist",
        "ISBN": "9780062315007",
        "year": 1988,
        "genre": "Fantasy",
        "author": "Paulo Coelho",
        "stock": 3,
        "publisher": "HarperOne"
    },
    {
        "title": "Educated",
        "ISBN": "9780399590504",
        "year": 2018,
        "genre": "Memoir",
        "author": "Tara Westover",
        "stock": 7,
        "publisher": "Random House"
    },
    {
        "title": "Sapiens: A Brief History of Humankind",
        "ISBN": "9780062316097",
        "year": 2014,
        "genre": "History",
        "author": "Yuval Noah Harari",
        "stock": 4,
        "publisher": "Harper"
    },
    {
        "title": "Becoming",
        "ISBN": "9781524763138",
        "year": 2018,
        "genre": "Autobiography",
        "author": "Michelle Obama",
        "stock": 6,
        "publisher": "Crown"
    },
    {
        "title": "The Night Circus",
        "ISBN": "9780307744432",
        "year": 2011,
        "genre": "Fantasy",
        "author": "Erin Morgenstern",
        "stock": 5,
        "publisher": "Anchor Books"
    },
    {
        "title": "1984",
        "ISBN": "9780451524935",
        "year": 1949,
        "genre": "Dystopian",
        "author": "George Orwell",
        "stock": 8,
        "publisher": "Plume"
    },
    {
        "title": "The Martian",
        "ISBN": "9780804139021",
        "year": 2014,
        "genre": "Science Fiction",
        "author": "Andy Weir",
        "stock": 5,
        "publisher": "Crown Publishing Group"
    },
    {
        "title": "Where the Crawdads Sing",
        "ISBN": "9780735219090",
        "year": 2018,
        "genre": "Fiction",
        "author": "Delia Owens",
        "stock": 4,
        "publisher": "G.P. Putnam's Sons"
    },
    {
        "title": "Atomic Habits",
        "ISBN": "9780735211292",
        "year": 2018,
        "genre": "Self-help",
        "author": "James Clear",
        "stock": 7,
        "publisher": "Avery"
    },
    {
        "title": "The Power of Now",
        "ISBN": "9781577314806",
        "year": 1997,
        "genre": "Spirituality",
        "author": "Eckhart Tolle",
        "stock": 9,
        "publisher": "New World Library"
    },
    {
        "title": "The Catcher in the Rye",
        "ISBN": "9780316769488",
        "year": 1951,
        "genre": "Fiction",
        "author": "J.D. Salinger",
        "stock": 7,
        "publisher": "Little, Brown and Company"
    },
    {
        "title": "The Great Gatsby",
        "ISBN": "9780743273565",
        "year": 1925,
        "genre": "Fiction",
        "author": "F. Scott Fitzgerald",
        "stock": 8,
        "publisher": "Scribner"
    },
    {
        "title": "To Kill a Mockingbird",
        "ISBN": "9780061120084",
        "year": 1960,
        "genre": "Fiction",
        "author": "Harper Lee",
        "stock": 0,
        "publisher": "HarperPerennial Modern Classics"
    },
    {
        "title": "A Brief History of Time",
        "ISBN": "9780553380163",
        "year": 1988,
        "genre": "Science",
        "author": "Stephen Hawking",
        "stock": 6,
        "publisher": "Bantam"
    },
    {
        "title": "The Four Agreements",
        "ISBN": "9781878424310",
        "year": 1997,
        "genre": "Self-help",
        "author": "Don Miguel Ruiz",
        "stock": 7,
        "publisher": "Amber-Allen Publishing"
    },
    {
        "title": "The Lean Startup",
        "ISBN": "9780307887894",
        "year": 2011,
        "genre": "Business",
        "author": "Eric Ries",
        "stock": 9,
        "publisher": "Crown Business"
    },
    {
        "title": "Thinking, Fast and Slow",
        "ISBN": "9780374533557",
        "year": 2011,
        "genre": "Psychology",
        "author": "Daniel Kahneman",
        "stock": 5,
        "publisher": "Farrar, Straus and Giroux"
    }
];

// Function that make the search for title or ISBN
console.log("The book exist or not :");
const findBook = (search) => {
    const book = Books.find(book => book.title === search || book.ISBN === search);
    if (book) {
        console.log("The book exist");
    } else {
        console.log("the book not exist");
    }
};

const bookSearch = "Daniel Kahneman";
findBook(bookSearch);

// Function that show the title of all books
console.log("");
console.log("Title of all books in existence :");
const Allbooksexist = () => {
    const AllBooks = Books.map(book => book.title);
    return AllBooks;
};
const titles = Allbooksexist();
console.log(titles);

// add new book and show a new array
console.log("");
const addbook = () => {
    const newbook = { title: "el libro negro", ISBN: 22030670, year: 2015, genre: "terror cosmico", author: "dross", stock: 666, publisher: "DrossRokzan" };
    Books.push(newbook);
};
addbook();
console.log("the new book is:");
const ultimoElemento = Books[Books.length - 1];
console.log(ultimoElemento);
console.log("the new array is:");
console.log(Books);

// Delete book for title or ISBN and later show de new array
console.log("");
const deleteBook = (search) => {
    const index = Books.findIndex(book => book.title === search || book.ISBN === search);
    if (index !== -1) {
        const deletedBook = Books.splice(index, 1);
        console.log("book erased:");
        console.log(deletedBook);
    } else {
        console.log("no book was found with this title or.");
    }
};

const bookToDelete = "Harry Potter and the Philosopher's Stone";
deleteBook(bookToDelete);

console.log("new array with the book erased :");
console.log(Books);

// show books that are the same in the publisher, author or genre
console.log("");
const searchBooks = (matching) => {
    const matchingBooks = Books.filter(book => book.publisher === matching || book.author === matching || book.genre === matching);
    return matchingBooks;
};

const matching = "Fantasy";
const matchingBooks = searchBooks(matching);

console.log("the new books with the same publisher, author, or genre are:");
matchingBooks.forEach(book => console.log(book));

// list in where the format is title,author and year
console.log("");
const bookList = (books) => {
    return books.map(book => `${book.title} - ${book.author} - ${book.year}`).join('\n');
};

const listBook = bookList(Books);

console.log(listBook);

// filter the books for years and showed
console.log("");
const searchBooksByYear = (year) => {
    const matchBooks = Books.filter(book => book.year === year);
    return matchBooks;
};

const yearFilter = 2011;
const matchBooksByYear = searchBooksByYear(yearFilter);

console.log("the books that match the year are:");
matchBooksByYear.forEach(book => console.log(book));

// check if a genre has stock
console.log("");
const stockAvailable = (genre) => {
    const booksType = Books.filter(book => book.genre === genre);
    return booksType.every(book => book.stock > 0);
};

const checkGenre = "Fantasy";
const result = stockAvailable(checkGenre);
console.log("the genre:", checkGenre, ",has stock available:", result);

// check if at least one genre has one book
console.log("");
const oneAvailable = (genre) => {
    return Books.some(book => book.genre == genre && book.stock > 0);
};

const checkAvailable = "Fantasy";
const available = oneAvailable(checkAvailable);
console.log("the genre:", checkAvailable, ",has at least one book available:", available);

// counting the property and show
console.log("");
const countbooks = (property) => {
    const count = {};
    Books.forEach(book => {
        const value = book[property];
        if (!count[value]) {
            count[value] = 1;
        } else {
            count[value]++;
        }
    });
    return count;
};

const counter = "publisher";
const counterbook = countbooks(counter);
console.log("book count per:", counter);
console.log(counterbook);
