import { useContext } from "react";
import { TableRow, TableCell, ButtonBase } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenuBtn from "./BookMenuBtn";
import { BookPageContext, PagesContext } from "../contexts/PagesContext";
function BookRow({ book }) {
    const classes = useStyles();
    const [, setPage] = useContext(PagesContext);
    const [, setBookPage] = useContext(BookPageContext);

    return (
        <TableRow>
            <TableCell component="td" scope="row">
                <SelectBook bookId={book.id} className={classes.tableCheckBox} />
                <ButtonBase
                    onClick={() => {
                        setPage("book");
                        setBookPage(book);
                    }}
                    className={classes.tableBtn}
                >
                    {book.title}
                </ButtonBase>
            </TableCell>
            <TableCell component="td" align="right">
                {book.author}
            </TableCell>
            <TableCell component="td" align="right">
                {book.genre}
            </TableCell>
            <TableCell component="td" align="right">
                <BookStatusChip book={book} />
            </TableCell>
            <TableCell className={classes.optionCell} component="td" align="right">
                <BookMenuBtn bookId={book.id} />
            </TableCell>
        </TableRow>
    );
}

export default BookRow;