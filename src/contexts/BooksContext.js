import { createContext, useState, useEffect } from "react";
import fireDB from "../firebaseDB";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const db = fireDB.collection("books");
    const [books, setBooks] = useState([]);
    const [items, setItems] = useState(db.orderBy("title", "asc"));
    useEffect(() => {
        items.get().then((fireBooks) => {
            let fetchedBooks = [];
            fireBooks.forEach((fireBook) => {
                fetchedBooks.push({ ...fireBook.data(), id: fireBook.id });
            });
            setBooks(fetchedBooks);
        });
    });

    const addBook = async (newBook) => {
        return db.add(newBook);
    };

    const updateBook = (bookId, key, value) => {
        const book = db.doc(bookId);
        book.update({ [key]: value });
    };

    const deleteBook = (bookId) => {
        const book = db.doc(bookId);
        book.delete();
    };

    return (
        <BooksContext.Provider value={[books, addBook, deleteBook, updateBook]}>
            {children}
        </BooksContext.Provider>
    );
}
// items.onSnapshot((bs) => {
//     bs.forEach((b) => {
//         fetchedBooks.push({ ...b.data(), id: b.id });
//     });
//     setBooks(fetchedBooks);
// });
