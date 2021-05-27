import { useState, forwardRef, useEffect, useContext } from "react";
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { BooksContext } from "../../contexts/BooksContext";
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} mountOnEnter unmountOnExit />;
});

function EditBook({ open, setOpen, book }) {
    const [newValues, setNewValues] = useState({});
    const [noTitle, setNoTitle] = useState(false);
    const { updateBook } = useContext(BooksContext);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setNewValues(book);
    }, [book]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewValues({
            ...newValues,
            [name]: value,
        });
    };

    const handleSave = () => {
        if (!newValues.title) {
            setNoTitle(true);
            return;
        }
        Object.entries(newValues).forEach(([key, value]) => {
            if (book[key] !== newValues[key]) {
                updateBook(book.id, key, value);
            }
        });
        handleClose();
    };
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar
                color="primary"
                style={{ position: "relative", paddingRight: 0 }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ marginLeft: 18, flex: 1 }}>
                        Edit Book
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleSave}>
                        Save
                    </Button>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Cancel
                    </Button>
                </Toolbar>
            </AppBar>
            <div style={{ padding: 16, marginTop: 20 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="title"
                            color="primary"
                            id="book-title"
                            label="Title"
                            value={newValues?.title}
                            onChange={handleChange}
                            helperText={noTitle ? "Book must have a title" : ""}
                            error={noTitle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="author"
                            color="primary"
                            id="book-author"
                            label="Author"
                            value={newValues?.author?.join(", ")}
                            onChange={(e) => {
                                const { name, value } = e.target;
                                setNewValues({
                                    ...newValues,
                                    [name]: value?.split(", "),
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="genre"
                            color="primary"
                            id="book-genre"
                            label="Genre"
                            value={newValues?.genre?.join(", ")}
                            onChange={(e) => {
                                const { name, value } = e.target;
                                setNewValues({
                                    ...newValues,
                                    [name]: value?.split(", "),
                                });
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="publisher"
                            color="primary"
                            id="book-publisher"
                            label="Publisher"
                            value={newValues?.publisher}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="description"
                            multiline
                            color="primary"
                            id="book-description"
                            label="Description"
                            value={newValues?.description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="outlined" style={{ minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-outlined-label">
                                Age
                            </InputLabel>
                            <Select
                                labelId="status-select-label"
                                id="select-status"
                                name="status"
                                value={newValues?.status}
                                onChange={handleChange}
                                label="Age"
                            >
                                <MenuItem value={"Wish List"}>Wish List</MenuItem>
                                <MenuItem value={"Pending"}>Pending</MenuItem>
                                <MenuItem value={"Reading"}>Reading</MenuItem>
                                <MenuItem value={"Finished"}>Finished</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </Dialog>
    );
}

export default EditBook;
