import { useState, useContext } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SelectBookContext } from "../contexts/BookSelectionContext";
const options = ["Select", "Edit", "Delete"];

function BookMenu({ bookId }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);
    const openBookMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const closeBookMenu = () => {
        setAnchorEl(null);
    };
    const handleDelete = () => {
        console.log("Delete");
    };
    const handleSelecting = () => {
        if (!booksSelected.includes(bookId)) {
            setBooksSelected((prev) => [...prev, bookId]);
        }
    };
    const menuItemClick = (e, index) => {
        switch (index) {
            case 0:
                handleSelecting();
                break;
            case 1:
                console.log("editing");
                break;
            case 2:
                handleDelete();
                break;
        }
        closeBookMenu();
    };
    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={openBookMenu}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted={false}
                open={Boolean(anchorEl)}
                onClose={closeBookMenu}
            >
                {options.map((option, index) => (
                    <MenuItem onClick={(e) => menuItemClick(e, index)} key={index}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default BookMenu;
