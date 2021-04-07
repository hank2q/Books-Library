import { useContext } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { BooksContext } from "../contexts/BooksContext";

import {
    BookStatusContext,
    AnchorElContext,
    MenuIndexContext,
    StatusesContext,
} from "../contexts/BookStatusContext";

function BookStatusMenu() {
    const statuses = useContext(StatusesContext);
    const [anchorBook, setAnchorBook] = useContext(BookStatusContext);
    const [anchorEl, setAnchorEl] = useContext(AnchorElContext);
    const [menuIndex, setMenuIndex] = useContext(MenuIndexContext);
    const [, , , updateBook] = useContext(BooksContext);

    const closeStatusSelect = () => {
        setAnchorEl(null);
        setAnchorBook(null);
    };

    const updateStatus = (event, index) => {
        setMenuIndex(index);
        let newStatus = event.currentTarget.innerText;
        updateBook(anchorBook.id, "status", newStatus);
        closeStatusSelect();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted={false}
            open={Boolean(anchorEl)}
            onClose={closeStatusSelect}
        >
            {statuses.map((status, index) => (
                <MenuItem
                    key={index}
                    selected={index === menuIndex}
                    onClick={(event) => updateStatus(event, index)}
                >
                    {status}
                </MenuItem>
            ))}
        </Menu>
    );
}

export default BookStatusMenu;
