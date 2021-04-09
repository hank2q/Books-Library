import { createContext, useState } from "react";

export const PagesContext = createContext();
export const BookPageContext = createContext();
export function PagesProvider({ children }) {
    const [bookPage, setBookPage] = useState(null);
    const goToBook = (book) => {
        setBookPage(book);
    };
    const goToBooks = () => {
        setBookPage(null);
    };
    return (
        <PagesContext.Provider value={[bookPage, goToBook, goToBooks]}>
            {children}
        </PagesContext.Provider>
    );
}
