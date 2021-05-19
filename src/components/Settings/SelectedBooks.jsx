import { useContext, useState } from "react";
import { Box, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../../styles";
import { BooksContext } from "../../contexts/BooksContext";
import { SelectBookContext } from "../../contexts/BookSelectionContext";
import ConfirmDelete from "../ConfirmDelete";
function SelectedBooks() {
    const classes = useStyles();
    const { books, deleteBook } = useContext(BooksContext);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);
    const [open, setOpen] = useState(false);

    const deleteSelected = () => {
        booksSelected.forEach((id) => deleteBook(id));
        setBooksSelected([]);
    };

    const handleSwitch = (e) => {
        e.target.checked
            ? setBooksSelected(books.map((book) => book.id))
            : setBooksSelected([]);
    };

    const closeConfirm = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        deleteSelected();
        setOpen(false);
    };
    const confirmDelete = () => {
        setOpen(true);
    };
    const text = () => {
        return (
            <div>
                <span>
                    Are you sure you want to delete the following{" "}
                    {booksSelected.length} books:
                </span>
                <br />
                {books.map((book) => {
                    if (booksSelected.includes(book.id)) {
                        return (
                            <span>
                                "<b>{book.title}</b>"<br />
                            </span>
                        );
                    }
                    return "";
                })}
                <span> from your library?</span>
            </div>
        );
    };
    return (
        <Box className={classes.selectedCount}>
            <Checkbox
                checked={booksSelected.length === books.length}
                onChange={(e) => handleSwitch(e)}
                className={classes.selectAll}
                color="default"
                indeterminate={booksSelected.length < books.length}
            />
            {booksSelected.length} selected
            <IconButton
                aria-label="delete"
                style={{ marginLeft: 10, padding: 6, color: "#fff" }}
                onClick={confirmDelete}
            >
                <DeleteIcon />
            </IconButton>
            <ConfirmDelete
                open={open}
                title="Confirm Delete"
                text={text()}
                handleConfirm={handleConfirm}
                handleClose={closeConfirm}
            />
        </Box>
    );
}

export default SelectedBooks;
