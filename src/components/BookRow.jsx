import { useContext } from "react";
import { TableRow, TableCell, Checkbox } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenu from "./BookMenu";
function BookRow({ book, handleStatusUpdate }) {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <SelectBook bookId={book.id} className={classes.tableCheckBox} />
                {book.title}
            </TableCell>
            <TableCell align="right">{book.author}</TableCell>
            <TableCell align="right">{book.genre}</TableCell>
            <TableCell align="right">
                <BookStatusChip
                    book={book}
                    handleStatusUpdate={handleStatusUpdate}
                />
                <BookMenu bookId={book.id} />
            </TableCell>
        </TableRow>
    );
}

export default BookRow;
