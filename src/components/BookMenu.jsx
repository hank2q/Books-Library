import { Menu, MenuItem } from "@material-ui/core";
import { useContext, useState } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import ConfirmDelete from "./ConfirmDelete";
function BookMenu() {
    const { anchorEl, closeBookMenu, handleSelecting, handleDelete, handleEdit } =
        useContext(BookMenuContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        handleDelete();
        setOpen(false);
    };
    const confirmDelete = () => {
        setOpen(true);
        closeBookMenu();
    };
    return (
        <>
            <Menu
                anchorEl={anchorEl}
                keepMounted={true}
                open={Boolean(anchorEl)}
                onClose={closeBookMenu}
            >
                <MenuItem onClick={handleSelecting}>Select</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={confirmDelete}>Delete</MenuItem>
            </Menu>
            <ConfirmDelete
                open={open}
                title="Confirm Delete"
                text={`Are you sure you want to delete "Book title"}`}
                handleConfirm={handleConfirm}
                handleClose={handleClose}
            />
        </>
    );
}

export default BookMenu;
