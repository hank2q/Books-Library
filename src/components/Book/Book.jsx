import { useEffect, useContext, useState } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BookContLg from "./BookContLg";
import BookContSm from "./BookContSm";
import BookDesc from "./BookDesc";
import BookSettings from "./BookSettings";
function Book({ match }) {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
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
            <BookSettings />
            {matches ? <BookContLg book={book} /> : <BookContSm book={book} />}
            <BookDesc book={book} />
        </>
    );
}

export default Book;
