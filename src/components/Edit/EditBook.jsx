import { useState, forwardRef } from "react";
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
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#2962ff",
        },
    },
});
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function EditBook({ open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    color="secondary"
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
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Save
                        </Button>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="title"
                            color="primary"
                            id="book-title"
                            label="Title"
                            // helperText={noTitle ? "Enter book title" : ""}
                            // error={noTitle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="author"
                            color="primary"
                            id="book-author"
                            label="Author"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="genre"
                            color="primary"
                            id="book-genre"
                            label="Genre"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            name="publisher"
                            color="primary"
                            id="book-publisher"
                            label="Publisher"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            name="description"
                            multiline
                            color="primary"
                            id="book-description"
                            label="Description"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl>
                            <InputLabel id="book-status">Status</InputLabel>
                            <Select
                                labelId="status-select-label"
                                id="status-select"
                                name="status"
                            >
                                <MenuItem value={"Wish List"}>Wish List</MenuItem>
                                <MenuItem value={"Pending"}>Pending</MenuItem>
                                <MenuItem value={"Reading"}>Reading</MenuItem>
                                <MenuItem value={"Finished"}>Finished</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Dialog>
        </ThemeProvider>
    );
}

export default EditBook;
