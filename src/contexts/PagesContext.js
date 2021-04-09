import { createContext, useState } from "react";

export const PagesContext = createContext();
export const BookPageContext = createContext();
export function PagesProvider({ children }) {
    const [pages, setPages] = useState("books");
    const [book, setBook] = useState(null);
    return (
        <PagesContext.Provider value={[pages, setPages]}>
            <BookPageContext.Provider value={[book, setBook]}>
                {children}
            </BookPageContext.Provider>
        </PagesContext.Provider>
    );
}
