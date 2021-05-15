import { useContext } from "react";
import { Box, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../styles";
import { BooksContext } from "../contexts/BooksContext";
import { SelectBookContext } from "../contexts/BookSelectionContext";

function SelectedBooks() {
    const classes = useStyles();
    const { books, deleteBook } = useContext(BooksContext);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);

    const deleteSelected = () => {
        booksSelected.forEach((id) => deleteBook(id));
        setBooksSelected([]);
    };

    const handleSwitch = (e) => {
        e.target.checked
            ? setBooksSelected(books.map((book) => book.id))
            : setBooksSelected([]);
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
                onClick={deleteSelected}
            >
                <DeleteIcon />
            </IconButton>
        </Box>
    );
}

export default SelectedBooks;
