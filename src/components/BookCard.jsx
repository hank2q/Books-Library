import React from "react";
import { useState, useContext } from "react";
import { SelectBookContext } from "../contexts/BookSelectionContext";
import defaultBook from "../assets/defaultBook.svg";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Checkbox,
} from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";

function BookCard({ book, handleStatusUpdate }) {
    const classes = useStyles();
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);

    const handleCheck = (e, id) => {
        if (e.target.checked && !booksSelected.includes(id)) {
            setBooksSelected((prev) => [...prev, id]);
        } else {
            setBooksSelected((prev) => prev.filter((ID) => ID !== id));
        }
    };
    return (
        <Card>
            <CardActionArea
                onClick={() => {
                    console.log("ccard");
                }}
            >
                <CardMedia
                    className={classes.cardMedia}
                    image={book.image || defaultBook}
                    title="Book Cover"
                />
                <CardContent classes={{ root: classes.cardCont }}>
                    <Box className={classes.cardText}>
                        <Typography
                            className={classes.cardTitle}
                            variant="subtitle2"
                        >
                            {book.title}
                        </Typography>
                        <Typography className={classes.cardTitle} variant="inherit">
                            {book.author}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <BookStatusChip
                    size="small"
                    handleStatusUpdate={handleStatusUpdate}
                    book={book}
                />
                <Checkbox
                    checked={booksSelected.includes(book.id)}
                    onChange={(e) => {
                        handleCheck(e, book.id);
                    }}
                    className={classes.checkBox}
                />
            </CardActions>
        </Card>
    );
}

export default BookCard;
