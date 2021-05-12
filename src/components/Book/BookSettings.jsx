import { useContext } from "react";
import useStyles from "../../styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton, Button } from "@material-ui/core";
import { PagesContext } from "../../contexts/PagesContext";
import { BooksContext } from "../../contexts/BooksContext";
import CloseIcon from "@material-ui/icons/Close";
function BookSettings({ book }) {
    const classes = useStyles();
    const [, addBook] = useContext(BooksContext);

    const [, goToBook, goToBooks] = useContext(PagesContext);
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
                    onClick={async () => {
                        const newBook = { ...book, status: "Pending" };
                        const newId = await addBook(newBook);
                        goToBooks();
                    }}
                >
                    Add To Library
                </Button>
            )}
        </Box>
    );
}

export default BookSettings;
