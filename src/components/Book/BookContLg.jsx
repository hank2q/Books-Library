import defaultBook from "../../assets/defaultBook.svg";
import BookInfo from "./BookInfo";
import useStyles from "../../styles";
import { Box, Paper, Typography } from "@material-ui/core";

function BookContLg({ book }) {
    const classes = useStyles();
    return (
        <Box className={classes.bookCont}>
            <img
                className={classes.bookImg + " MuiPaper-rounded MuiPaper-elevation1"}
                src={book.image || defaultBook}
                alt="Book Cover"
            />
            <Paper className={classes.bookBox}>
                <Typography variant="h4">{book.title}</Typography>
                <br />
                <Box>
                    <BookInfo
                        lineHeight="2.7"
                        lable={"Author"}
                        value={book.author}
                    />
                    <BookInfo lineHeight="2.7" lable={"Genre"} value={book.genre} />
                    <BookInfo
                        lineHeight="2.7"
                        lable={"Publisher"}
                        value={book.publisher}
                    />
                    <BookInfo
                        lineHeight="2.7"
                        lable={"Status"}
                        value={book.status}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export default BookContLg;
