import { useState, useEffect } from "react";
import { Chip, Menu, MenuItem } from "@material-ui/core";
import useStyles from "../styles";

const statuses = ["Wish List", "Pending", "Reading", "Finished"];
const WillMount = (bookStatus, setMenuIndex) => {
    useEffect(() => {
        statuses.forEach((status, index) => {
            if (status === bookStatus) {
                setMenuIndex(index);
            }
        });
    }, []);
};
function BookStatusChip({ book, handleStatusUpdate, size, className }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorBookId, setAnchorBookId] = useState(null);
    const [menuIndex, setMenuIndex] = useState(0);
    WillMount(book.status, setMenuIndex);
    const openSelectStatus = (event, bookId) => {
        setAnchorEl(event.currentTarget);
        setAnchorBookId(bookId);
    };
    const closeStatusSelect = () => {
        setAnchorEl(null);
        setAnchorBookId(null);
    };

    const updateStatus = (event, index) => {
        setMenuIndex(index);
        let newStatus = event.currentTarget.innerText;
        handleStatusUpdate(anchorBookId, newStatus);
        closeStatusSelect();
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
                onClick={(e) => openSelectStatus(e, book.id)}
                className={pillColor(book.status) + " " + className}
                classes={{ clickable: pillColor(book.status, false) }}
                label={book.status}
                size={size}
            />
            <Menu
                anchorEl={anchorEl}
                keepMounted={false}
                open={Boolean(anchorEl)}
                onClose={closeStatusSelect}
            >
                {statuses.map((status, index) => (
                    <MenuItem
                        key={index}
                        selected={index === menuIndex}
                        onClick={(event) => updateStatus(event, index)}
                    >
                        {status}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export default BookStatusChip;
