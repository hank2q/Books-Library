import { TableRow, TableCell } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenuBtn from "./BookMenuBtn";

function BookRow({ book, handleStatusUpdate }) {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <SelectBook bookId={book.id} className={classes.tableCheckBox} />
                {book.title}
            </TableCell>
            <TableCell component="th" align="right">
                {book.author}
            </TableCell>
            <TableCell component="th" align="right">
                {book.genre}
            </TableCell>
            <TableCell component="th" align="right">
                <BookStatusChip
                    book={book}
                    handleStatusUpdate={handleStatusUpdate}
                />
            </TableCell>
            <TableCell className={classes.optionCell} component="th" align="right">
                <BookMenuBtn bookId={book.id} />
            </TableCell>
        </TableRow>
    );
}

export default BookRow;
