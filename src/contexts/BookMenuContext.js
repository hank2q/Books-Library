import { createContext, useState, useContext } from "react";
import { SelectBookContext } from "./BookSelectionContext";
import { BooksContext } from "./BooksContext";

export const BookMenuContext = createContext();

export function BookMenuProvider({ children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorId, setAnchorId] = useState(null);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);
    const { deleteBook } = useContext(BooksContext);

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
        closeBookMenu();
    };

    const handleDelete = () => {
        deleteBook(anchorId);
        setBooksSelected((prev) => prev.filter((ID) => ID !== anchorId));
        closeBookMenu();
    };

    const handleEdit = () => {
        console.log("edit");
        closeBookMenu();
    };

    return (
        <BookMenuContext.Provider
            value={{
                anchorEl,
                openBookMenu,
                closeBookMenu,
                handleSelecting,
                handleDelete,
                handleEdit,
            }}
        >
            {children}
        </BookMenuContext.Provider>
    );
}
