import React from "react";
import { useContext } from "react";
import useStyles from "../styles";
import { Checkbox } from "@material-ui/core";
import { SelectBookContext } from "../contexts/BookSelectionContext";

function SelectBook({ className, bookId }) {
    const classes = useStyles();
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);

    const handleCheck = (e, id) => {
        if (e.target.checked && !booksSelected.includes(id)) {
            setBooksSelected((prev) => [...prev, id]);
        } else {
            setBooksSelected((prev) => prev.filter((ID) => ID !== id));
        }
    };

    return (
        booksSelected.length > 0 && (
            <Checkbox
                checked={booksSelected.includes(bookId)}
                onChange={(e) => {
                    handleCheck(e, bookId);
                }}
                className={classes.checkBox + " " + className}
            />
        )
    );
}

export default SelectBook;
