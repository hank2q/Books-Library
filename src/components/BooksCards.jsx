import React from "react";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import useStyles from "../styles";

function BooksCards({ books, handleStatusUpdate, updateBook }) {
    const classes = useStyles();
    return (
        <Grid className={classes.bookCardsCont} container spacing={3}>
            {books.map((book) => (
                <Grid key={book.id} item lg={2} xs={6} sm={3}>
                    <BookCard
                        handleStatusUpdate={handleStatusUpdate}
                        book={book}
                        updateBook={updateBook}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default BooksCards;
