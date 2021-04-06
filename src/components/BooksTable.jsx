import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import useStyles from "../styles";
import BookRow from "./BookRow";

function BooksTable({ books }) {
    const classes = useStyles();
    return (
        <>
            <TableContainer className={classes.tableCont}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.headCell}>Title</TableCell>
                            <TableCell className={classes.headCell} align="right">
                                Author
                            </TableCell>
                            <TableCell className={classes.headCell} align="right">
                                Genre
                            </TableCell>
                            <TableCell className={classes.headCell} align="right">
                                Status
                            </TableCell>
                            <TableCell
                                className={
                                    classes.headCell + " " + classes.optionCell
                                }
                                align="right"
                            ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <BookRow key={book.id} book={book} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default BooksTable;
