import { useContext } from "react";
import { Container } from "@material-ui/core";
import useStyles from "../styles";
import BooksViews from "./BooksViews";
import Book from "./Book/Book";
import { PagesContext } from "../contexts/PagesContext";
import ExportData from "./ExportData";
import { BooksContext } from "../contexts/BooksContext";

function Main() {
    const classes = useStyles();
    const [bookPage] = useContext(PagesContext);
    const { books } = useContext(BooksContext);

    return (
        <>
            <Container maxWidth="md" className={classes.mainContainer}>
                {bookPage ? <Book book={bookPage} /> : <BooksViews />}
            </Container>
            {/* export book as excell
            !bookPage && books.length > 0 && (
                <ExportData
                    fileName="books"
                    Data={books}
                    className={classes.exportBtn}
                />
            )} */}
        </>
    );
}

export default Main;
