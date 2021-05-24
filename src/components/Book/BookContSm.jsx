import { Box, Paper, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import BookInfo from "./BookInfo";
import defaultBook from "../../assets/defaultBook.svg";

function BookContSm({ book }) {
    const classes = useStyles();
    return (
        <Paper className={classes.bookBoxSm}>
            <Box display="flex">
                <div style={{ width: "30%" }}>
                    <img
                        style={{ display: "block", width: "100%", height: "auto" }}
                        src={book.image || defaultBook}
                        alt="Book Cover"
                    />
                </div>
                <Box style={{ marginLeft: 12, width: "70%" }}>
                    <Typography variant="h5">{book.title}</Typography>
                    <BookInfo
                        lineHeight="2.5"
                        variant="body1"
                        lable={"Author"}
                        value={book.author?.join(", ")}
                    />
                    <BookInfo
                        lineHeight="2"
                        variant="body2"
                        lable={"Genre"}
                        value={book.genre?.join(", ")}
                    />
                    <BookInfo
                        lineHeight="2"
                        variant="body2"
                        lable={"Publisher"}
                        value={book.publisher}
                    />
                    <BookInfo
                        lineHeight="2"
                        variant="body2"
                        lable={"Status"}
                        value={book.status}
                    />
                </Box>
            </Box>
        </Paper>
    );
}

export default BookContSm;
