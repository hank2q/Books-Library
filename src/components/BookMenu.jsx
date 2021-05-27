import { Menu, MenuItem } from "@material-ui/core";
import { useContext, useState } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import ConfirmDelete from "./ConfirmDelete";
import EditBook from "./EditBook";
function BookMenu() {
    const { anchorEl, anchorBook, closeBookMenu, handleSelecting, handleDelete } =
        useContext(BookMenuContext);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const closeConfirm = () => {
        setOpenDelete(false);
    };
    const handleConfirm = () => {
        handleDelete(anchorBook?.id);
        setOpenDelete(false);
    };
    const confirmDelete = () => {
        setOpenDelete(true);
        closeBookMenu();
    };

    const editBook = () => {
        setOpenEdit(true);
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
                <MenuItem onClick={editBook}>Edit</MenuItem>
                <MenuItem onClick={confirmDelete}>Delete</MenuItem>
            </Menu>
            <ConfirmDelete
                open={openDelete}
                bookTitle={anchorBook?.title}
                handleConfirm={handleConfirm}
                handleClose={closeConfirm}
            />
            <EditBook open={openEdit} setOpen={setOpenEdit} book={anchorBook} />
        </>
    );
}

export default BookMenu;
