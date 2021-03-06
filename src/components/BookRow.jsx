import { useContext } from "react";
import { TableRow, TableCell, ButtonBase } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
import useStyles from "../styles";
import SelectBook from "./SelectBook";
import BookMenuBtn from "./BookMenuBtn";
import { PagesContext } from "../contexts/PagesContext";
function BookRow({ book }) {
    const classes = useStyles();
    const [, goToBook] = useContext(PagesContext);

    return (
        <TableRow>
            <TableCell component="td" scope="row">
                <SelectBook bookId={book.id} className={classes.tableCheckBox} />
                <ButtonBase
                    onClick={() => {
                        goToBook(book);
                    }}
                    className={classes.tableBtn}
                >
                    {book.title}
                </ButtonBase>
            </TableCell>
            <TableCell component="td" align="right">
                {book.author?.join(", ")}
            </TableCell>
            <TableCell component="td" align="right">
                {book.genre?.join("/ ")}
            </TableCell>
            <TableCell component="td" align="right">
                <BookStatusChip book={book} />
            </TableCell>
            <TableCell className={classes.optionCell} component="td" align="right">
                <BookMenuBtn book={book} />
            </TableCell>
        </TableRow>
    );
}

export default BookRow;
