import { useEffect, useContext } from "react";
import { Chip } from "@material-ui/core";
import useStyles from "../styles";
import {
    BookStatusContext,
    AnchorElContext,
    MenuIndexContext,
    StatusesContext,
} from "../contexts/BookStatusContext";

function BookStatusChip({ book }) {
    const classes = useStyles();
    const [, setAnchorBook] = useContext(BookStatusContext);
    const [, setAnchorEl] = useContext(AnchorElContext);
    const [, setMenuIndex] = useContext(MenuIndexContext);
    const statuses = useContext(StatusesContext);

    const openSelectStatus = (event) => {
        setAnchorEl(event.currentTarget);
        setAnchorBook(book);
        setMenuIndex(statuses.indexOf(book.status));
    };

    const pillColor = (status, base = true) => {
        if (status === "Finished") {
            if (base) {
                return classes.finished;
            } else {
                return classes.finishedClickable;
            }
        } else if (status === "Reading") {
            if (base) {
                return classes.reading;
            } else {
                return classes.readingClickable;
            }
        } else if (status === "Wish List") {
            if (base) {
                return classes.wish;
            } else {
                return classes.wishClickable;
            }
        } else if (status === "Pending") {
            if (base) {
                return classes.pending;
            } else {
                return classes.pendingClickable;
            }
        }
    };
    return (
        <>
            <Chip
                onClick={openSelectStatus}
                className={pillColor(book.status)}
                classes={{ clickable: pillColor(book.status, false) }}
                label={book.status}
                size="small"
            />
        </>
    );
}

export default BookStatusChip;
