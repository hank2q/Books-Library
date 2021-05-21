import { Menu, MenuItem } from "@material-ui/core";
import { useContext, useState } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import ConfirmDelete from "./ConfirmDelete";
import EditBook from "./Edit/EditBook";
function BookMenu() {
    const {
        anchorEl,
        anchorBook,
        closeBookMenu,
        handleSelecting,
        handleDelete,
        handleEdit,
    } = useContext(BookMenuContext);
    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const closeConfirm = () => {
        setOpenDelete(false);
    };
    const handleConfirm = () => {
        handleDelete();
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
                <MenuItem onClick={editBook}>Edit</MenuItem>
                <MenuItem onClick={confirmDelete}>Delete</MenuItem>
            </Menu>
            <ConfirmDelete
                open={openDelete}
                title="Confirm Delete"
                text={text()}
                handleConfirm={handleConfirm}
                handleClose={closeConfirm}
            />
            <EditBook open={openEdit} setOpen={setOpenEdit} />
        </>
    );
}

export default BookMenu;
