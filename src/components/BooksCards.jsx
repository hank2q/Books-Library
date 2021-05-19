import { useContext } from "react";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import useStyles from "../styles";
import { CardSizeContext } from "../contexts/CardSizeContext";

function BooksCards({ books }) {
    const classes = useStyles();
    const [cardSize] = useContext(CardSizeContext);
    return (
        <Grid className={classes.bookCardsCont} container spacing={3}>
            {books.map((book) => (
                <Grid key={book.id} item lg={cardSize} xs={6} sm={3}>
                    <BookCard book={book} />
                </Grid>
            ))}
        </Grid>
    );
}

export default BooksCards;
