import { useEffect, useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import defaultBook from "../assets/defaultBook.svg";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton } from "@material-ui/core";
import useStyles from "../styles";

function Book({ match }) {
    const classes = useStyles();
    const [books] = useContext(BooksContext);
    const [book, setBook] = useState({});
    useEffect(() => {
        books.forEach((b) => {
            if (b.id === parseInt(match.params.id)) {
                setBook(b);
            }
        });
    });
    return (
        <>
            <Box
                className={classes.mainContSettings}
                style={{ flexDirection: "row" }}
                component="div"
            >
                <IconButton
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    <ArrowBackRoundedIcon style={{ color: "#fff" }} />
                </IconButton>
            </Box>
            <div>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <img src={book.image || defaultBook} alt="Book Cover" />
                <h3>{book.genre}</h3>
                <h3>{book.publisher}</h3>
                <h3>{book.status}</h3>
            </div>
        </>
    );
}

export default Book;
