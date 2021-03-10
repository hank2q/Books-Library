import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import BookStatusChip from "./BookStatusChip";
function BookRow({ book, handleStatusUpdate }) {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {book.title}
            </TableCell>
            <TableCell align="right">{book.author}</TableCell>
            <TableCell align="right">{book.genre}</TableCell>
            <TableCell align="right">
                <BookStatusChip
                    book={book}
                    handleStatusUpdate={handleStatusUpdate}
                />
            </TableCell>
        </TableRow>
    );
}

export default BookRow;
