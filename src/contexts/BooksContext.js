import { createContext, useState, useEffect } from "react";
import fireBase from "../firebaseDB";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
    const db = fireBase.firestore().collection("books");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(db.orderBy("title", "asc"));

    const fetchData = () => {
        setLoading(true);
        console.log("request firebase");
        items.onSnapshot((bs) => {
            let fetchedBooks = [];
            bs.forEach((b) => {
                fetchedBooks.push({ ...b.data(), id: b.id });
            });
            setBooks(fetchedBooks);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        fetchData();
    }, [items]);

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

    const changeOrder = (order, direction) => {
        setItems(db.orderBy(order, direction));
    };

    return (
        <BooksContext.Provider
            value={{ books, addBook, deleteBook, updateBook, changeOrder, loading }}
        >
            {children}
        </BooksContext.Provider>
    );
}
