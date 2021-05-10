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
    ListItemText,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "../styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import useSearch from "../hooks/useSearch";
import FormField from "./FormField";
const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
    },
});

function AddBook({ handleShowAddForm }) {
    const initialValues = {
        id: "",
        title: "",
        author: [],
        genre: [],
        publisher: "",
        description: "",
        status: "",
        image: "",
    };
    const classes = useStyles();
    const [, addBook] = useContext(BooksContext);
    const [titleValue, setTitleValue] = useState("");
    const [noTitle, setNoTitle] = useState(false);
    const [newBook, setNewBook] = useState(initialValues);
    const [gBooks, goog] = useSearch();

    const submitBook = (e) => {
        e.preventDefault();

        if (!newBook.title) {
            setNoTitle(true);
            return;
        } else {
            setNoTitle(false);
        }
        if (!newBook.status) {
            newBook.status = "Pending";
        }
        console.log(newBook.id);
        addBook(newBook);
        closeForm();
    };

    const autoFill = (result) => {
        if (result) {
            setNewBook({ ...result });
        } else {
            setTitleValue("");
            setNewBook(initialValues);
        }
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
                            <Autocomplete
                                id="book-title-fill"
                                name="title"
                                options={gBooks}
                                getOptionLabel={(option) =>
                                    option ? option.title : ""
                                }
                                freeSolo
                                renderOption={(option) => (
                                    <>
                                        <ListItemText
                                            className={classes.addSuggestion}
                                            primary={option.title}
                                            secondary={option.author}
                                        />
                                    </>
                                )}
                                value={titleValue}
                                onChange={(event, newValue) => {
                                    setTitleValue(newValue);
                                    autoFill(newValue);
                                }}
                                inputValue={newBook.title}
                                onInputChange={(e, newValue) => {
                                    setNewBook({ ...newBook, title: newValue });
                                    goog(newValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        color="primary"
                                        id="book-title"
                                        label="Title"
                                        helperText={
                                            noTitle ? "Enter book title" : ""
                                        }
                                        error={noTitle}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                name="author"
                                value={newBook.author}
                                onChange={(e) =>
                                    setNewBook({
                                        ...newBook,
                                        [e.target.name]: e.target.value?.split(", "),
                                    })
                                }
                                color="primary"
                                id="book-author"
                                label="Author"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                name="genre"
                                value={newBook.genre}
                                onChange={(e) =>
                                    setNewBook({
                                        ...newBook,
                                        [e.target.name]: e.target.value?.split(", "),
                                    })
                                }
                                color="primary"
                                id="book-genre"
                                label="Genre"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                name="publisher"
                                value={newBook.publisher}
                                onChange={(e) => {
                                    const { name, value } = e.target;
                                    setNewBook({
                                        ...newBook,
                                        [name]: value,
                                    });
                                }}
                                color="primary"
                                id="book-publisher"
                                label="Publisher"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                fullWidth
                                name="description"
                                value={newBook.description}
                                multiline
                                onChange={(e) => {
                                    const { name, value } = e.target;
                                    setNewBook({
                                        ...newBook,
                                        [name]: value,
                                    });
                                }}
                                color="primary"
                                id="book-description"
                                label="Description"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.statusSelect}>
                                <InputLabel id="book-status">Status</InputLabel>
                                <Select
                                    labelId="status-select-label"
                                    id="status-select"
                                    value={newBook.status}
                                    name="status"
                                    onChange={(e) => {
                                        const { name, value } = e.target;
                                        setNewBook({
                                            ...newBook,
                                            [name]: value,
                                        });
                                    }}
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
                        <Button onClick={() => autoFill()}>Clear</Button>
                        <Button type="submit">Save</Button>
                    </FormControl>
                </form>
            </div>
        </ThemeProvider>
    );
}

export default AddBook;
