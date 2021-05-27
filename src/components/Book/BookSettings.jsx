import { useContext, useState } from "react";
import useStyles from "../../styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton, Button, ButtonGroup } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmDelete from "../ConfirmDelete";
import { PagesContext } from "../../contexts/PagesContext";
import { BooksContext } from "../../contexts/BooksContext";
import CloseIcon from "@material-ui/icons/Close";
function BookSettings({ book }) {
    const classes = useStyles();
    const [openDelete, setOpenDelete] = useState(false);

    const { addBook, deleteBook } = useContext(BooksContext);
    const [, goToBook, goToBooks] = useContext(PagesContext);

    const handleAdding = () => {
        const newBook = { ...book, status: "Pending" };
        addBook(newBook);
        goToBook(newBook);
    };
    const handleConfirm = () => {
        deleteBook(book.id);
        setOpenDelete(false);
        goToBooks();
    };

    const text = () => {
        return (
            <div>
                <span>Are you sure you want to delete</span>
                <br />
                <span>
                    <b>{book.title}</b>
                </span>
                <span> from your library?</span>
            </div>
        );
    };
    return (
        <Box
            className={classes.mainContSettings}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
            component="div"
        >
            <IconButton onClick={goToBooks} style={{ padding: 6 }}>
                <ArrowBackRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
            {!book.status && (
                <Button
                    variant="contained"
                    disableElevation
                    endIcon={<CloseIcon style={{ transform: "rotate(-45deg)" }} />}
                    className={classes.addBtn}
                    onClick={handleAdding}
                >
                    Add To Library
                </Button>
            )}
            {book.id && (
                <>
                    <ButtonGroup variant="contained" disableElevation>
                        <Button endIcon={<EditIcon />}>Edit</Button>
                        <Button
                            style={{ backgroundColor: "#ff1740" }}
                            endIcon={<DeleteIcon />}
                            onClick={() => setOpenDelete(true)}
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                    <ConfirmDelete
                        open={openDelete}
                        text={text()}
                        handleConfirm={handleConfirm}
                        handleClose={() => setOpenDelete(false)}
                    />
                </>
            )}
        </Box>
    );
}

export default BookSettings;
