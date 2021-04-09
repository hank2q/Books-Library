import { Container } from "@material-ui/core";
import useStyles from "../styles";
import BooksViews from "./BooksViews";
import Book from "./Book/Book";
import { useContext } from "react";
import { PagesContext, BookPageContext } from "../contexts/PagesContext";
function Main() {
    const classes = useStyles();
    const [page] = useContext(PagesContext);
    const [bookPage] = useContext(BookPageContext);

    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            {page === "books" ? <BooksViews /> : <Book book={bookPage} />}
        </Container>
    );
}

export default Main;
