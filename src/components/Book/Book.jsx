import useMediaQuery from "@material-ui/core/useMediaQuery";
import BookContLg from "./BookContLg";
import BookContSm from "./BookContSm";
import BookDesc from "./BookDesc";
import BookSettings from "./BookSettings";
function Book({ book }) {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    return (
        <>
            <BookSettings />
            {matches ? <BookContLg book={book} /> : <BookContSm book={book} />}
            <BookDesc description={book.description} />
        </>
    );
}

export default Book;
