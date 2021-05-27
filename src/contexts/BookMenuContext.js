import { createContext, useState, useContext } from "react";
import { SelectBookContext } from "./BookSelectionContext";
import { BooksContext } from "./BooksContext";

export const BookMenuContext = createContext();

export function BookMenuProvider({ children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorBook, setAnchorBook] = useState(null);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);
    const { deleteBook } = useContext(BooksContext);

    const openBookMenu = (e, book) => {
        setAnchorBook(book);
        setAnchorEl(e.currentTarget);
    };
    const closeBookMenu = () => {
        setAnchorEl(null);
    };
    const handleSelecting = () => {
        if (booksSelected.length === 0) {
            setBooksSelected([anchorBook.id]);
        } else if (!booksSelected.includes(anchorBook.Id)) {
            setBooksSelected((prev) => [...prev, anchorBook.Id]);
        }
        closeBookMenu();
    };

    const handleDelete = (id) => {
        deleteBook(id);
        setBooksSelected((prev) => prev.filter((ID) => ID !== id));
    };

    return (
        <BookMenuContext.Provider
            value={{
                anchorEl,
                anchorBook,
                openBookMenu,
                closeBookMenu,
                handleSelecting,
                handleDelete,
            }}
        >
            {children}
        </BookMenuContext.Provider>
    );
}
