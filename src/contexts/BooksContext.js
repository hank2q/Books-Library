import { createContext, useState } from "react";
import Books from "../data";
export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([...Books]);

    const addBook = (newBook) => {
        let newId = 0;
        books.forEach((book) => {
            if (book.id > newId) {
                newId = book.id;
            }
        });
        newBook.id = newId + 1;
        setBooks([...books, newBook]);
    };

    const updateBook = (bookId, key, value) => {
        let updated = books.map((book) => {
            if (book.id === bookId) {
                book[key] = value;
            }
            return book;
        });
        setBooks(updated);
    };

    const deleteBook = (bookId) => {
        setBooks((prev) => prev.filter((book) => book.id !== bookId));
    };

    return (
        <BooksContext.Provider value={[books, addBook, deleteBook, updateBook]}>
            {children}
        </BooksContext.Provider>
    );
}
