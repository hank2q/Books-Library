import { Menu, MenuItem } from "@material-ui/core";
import { useContext, useState } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import ConfirmDelete from "./ConfirmDelete";
function BookMenu() {
    const {
        anchorEl,
        anchorBook,
        closeBookMenu,
        handleSelecting,
        handleDelete,
        handleEdit,
    } = useContext(BookMenuContext);
    const [open, setOpen] = useState(false);
    const closeConfirm = () => {
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

    const text = () => {
        return (
            <div>
                <span>Are you sure you want to delete</span>
                <br />
                <span>
                    "<b>{anchorBook?.title}</b>"
                </span>

                <span> from your library?</span>
            </div>
        );
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
                text={text()}
                handleConfirm={handleConfirm}
                handleClose={closeConfirm}
            />
        </>
    );
}

export default BookMenu;
