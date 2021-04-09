import { Container } from "@material-ui/core";
import useStyles from "../styles";
import BooksViews from "./BooksViews";
import Book from "./Book/Book";
import { useContext } from "react";
import { PagesContext } from "../contexts/PagesContext";
function Main() {
    const classes = useStyles();
    const [bookPage] = useContext(PagesContext);

    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            {bookPage ? <Book book={bookPage} /> : <BooksViews />}
        </Container>
    );
}

export default Main;
