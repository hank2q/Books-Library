import { createContext, useState, useContext } from "react";
import { SelectBookContext } from "../contexts/BookSelectionContext";
import { BooksContext } from "../contexts/BooksContext";

export const BookMenuContext = createContext();

export function BookMenuProvider({ children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorId, setAnchorId] = useState(null);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);
    const [, , deleteBook] = useContext(BooksContext);

    const openBookMenu = (e, bookId) => {
        setAnchorEl(e.currentTarget);
        setAnchorId(bookId);
    };
    const closeBookMenu = () => {
        setAnchorEl(null);
    };
    const handleSelecting = () => {
        if (!booksSelected.includes(anchorId)) {
            setBooksSelected((prev) => [...prev, anchorId]);
        }
    };
    const menuItemClick = (index) => {
        switch (index) {
            case 0:
                handleSelecting();
                break;
            case 1:
                console.log("editing");
                break;
            case 2:
                deleteBook(anchorId);
                break;
            default:
                console.log("No item");
                break;
        }
        closeBookMenu();
    };
    return (
        <BookMenuContext.Provider
            value={[anchorEl, openBookMenu, closeBookMenu, menuItemClick]}
        >
            {children}
        </BookMenuContext.Provider>
    );
}
