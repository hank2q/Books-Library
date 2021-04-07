import { TableRow, TableCell, ButtonBase } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenuBtn from "./BookMenuBtn";

function BookRow({ book }) {
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell component="td" scope="row">
                <SelectBook bookId={book.id} className={classes.tableCheckBox} />
                <ButtonBase href={"/book/" + book.id} className={classes.tableBtn}>
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
