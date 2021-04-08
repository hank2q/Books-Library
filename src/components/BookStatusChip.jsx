import { useContext } from "react";
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
        const index = statuses.indexOf(status);
        switch (index) {
            case 0:
                return base ? classes.wish : classes.wishClickable;
            case 1:
                return base ? classes.pending : classes.pendingClickable;
            case 2:
                return base ? classes.reading : classes.readingClickable;
            case 3:
                return base ? classes.finished : classes.finishedClickable;
            default:
                return base ? classes.pending : classes.pendingClickable;
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
