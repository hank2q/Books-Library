import React from "react";
import { useState, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid,
} from "@material-ui/core";
import useStyles from "../styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
    },
});

function AddBook({ handleShowAddForm }) {
    const classes = useStyles();
    const [, addBook] = useContext(BooksContext);
    const [noTitle, setNoTitle] = useState(false);
    const [newBookTitle, setNewBookTitle] = useState("");
    const [newBookAuthor, setNewBookAuthor] = useState("");
    const [newBookGenre, setNewBookGenre] = useState("");
    const [newBookPublisher, setNewBookPublisher] = useState("");
    const [newBookStatus, setNewBookStatus] = useState("");

    const submitBook = (e) => {
        e.preventDefault();
        const newBook = {
            title: newBookTitle,
            author: [newBookAuthor],
            genre: [newBookGenre],
            publisher: newBookPublisher,
            status: newBookStatus,
        };
        if (!newBookTitle) {
            setNoTitle(true);
            return;
        } else {
            setNoTitle(false);
        }
        if (!newBook.status) {
            newBook.status = "Pending";
        }
        addBook(newBook);
        closeForm();
    };

    const closeForm = () => {
        handleShowAddForm();
    };
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.addBookContainer}>
                <form className={classes.addBookForm} onSubmit={submitBook}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={newBookTitle}
                                onChange={(e) => setNewBookTitle(e.target.value)}
                                color="primary"
                                id="book-title"
                                label="Book Title"
                                helperText={noTitle ? "Enter book title" : ""}
                                error={noTitle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={newBookAuthor}
                                onChange={(e) => setNewBookAuthor(e.target.value)}
                                color="primary"
                                id="book-author"
                                label="Author"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={newBookGenre}
                                onChange={(e) => setNewBookGenre(e.target.value)}
                                color="primary"
                                id="book-genre"
                                label="Genre"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                value={newBookPublisher}
                                onChange={(e) => setNewBookPublisher(e.target.value)}
                                color="primary"
                                id="book-publisher"
                                label="Publisher"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.statusSelect}>
                                <InputLabel id="demo-simple-select-label">
                                    Status
                                </InputLabel>
                                <Select
                                    labelId="status-select-label"
                                    id="status-select"
                                    value={newBookStatus}
                                    onChange={(e) =>
                                        setNewBookStatus(e.target.value)
                                    }
                                >
                                    <MenuItem value={"Wish List"}>
                                        Wish List
                                    </MenuItem>
                                    <MenuItem value={"Pending"}>Pending</MenuItem>
                                    <MenuItem value={"Reading"}>Reading</MenuItem>
                                    <MenuItem value={"Finished"}>Finished</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl className={classes.formButtons}>
                        <Button onClick={closeForm}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </FormControl>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default AddBook;
