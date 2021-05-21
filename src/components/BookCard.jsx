import { useContext } from "react";
import defaultBook from "../assets/defaultBook.svg";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenuBtn from "./BookMenuBtn";
import { PagesContext } from "../contexts/PagesContext";
import { SelectBookContext } from "../contexts/BookSelectionContext";

function BookCard({ book }) {
    const classes = useStyles();
    const [, goToBook] = useContext(PagesContext);
    const [booksSelected] = useContext(SelectBookContext);

    const handleClick = () => {
        if (booksSelected.length === 0) {
            goToBook(book);
        }
    };

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    className={classes.cardMedia}
                    image={book.image || defaultBook}
                    title={book.title}
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
                            {book.author?.join(", ")}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardAction}>
                <div>
                    <SelectBook bookId={book.id} />
                    <BookStatusChip book={book} />
                </div>
                <BookMenuBtn book={book} />
            </CardActions>
        </Card>
    );
}

export default BookCard;
