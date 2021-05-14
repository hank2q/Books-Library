import { createContext, useState, useEffect } from "react";
import fireBase from "../firebaseDB";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const db = fireBase.firestore().collection("books");
    const [books, setBooks] = useState([]);
    const [items, setItems] = useState(db.orderBy("title", "asc"));

    const fetchData = () => {
        items.onSnapshot((bs) => {
            let fetchedBooks = [];
            bs.forEach((b) => {
                fetchedBooks.push({ ...b.data(), id: b.id });
            });
            setBooks(fetchedBooks);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addBook = async (newBook) => {
        const addedBook = await db.add(newBook);
        return addedBook.id;
    };

    const updateBook = async (bookId, key, value) => {
        const book = db.doc(bookId);
        await book.update({ [key]: value });
    };

    const deleteBook = (bookId) => {
        const book = db.doc(bookId);
        book.delete();
    };

    return (
        <BooksContext.Provider value={{ books, addBook, deleteBook, updateBook }}>
            {children}
        </BooksContext.Provider>
    );
}

// const fireBooks = await items.get();
// fireBooks.forEach((fireBook) => {
//     fetchedBooks.push({ ...fireBook.data(), id: fireBook.id });
// });
