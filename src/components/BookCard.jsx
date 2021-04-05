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
import BookMenu from "./BookMenu";
function BookCard({ book, handleStatusUpdate }) {
    const classes = useStyles();
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
                <SelectBook bookId={book.id} />
                <BookMenu bookId={book.id} />
            </CardActions>
        </Card>
    );
}

export default BookCard;
