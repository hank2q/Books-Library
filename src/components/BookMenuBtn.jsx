import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useContext } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import useStyles from "../styles";

function BookMenuBtn({ book }) {
    const classes = useStyles();
    const { openBookMenu } = useContext(BookMenuContext);
    return (
        <IconButton
            className={classes.menuBtn}
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={(e) => openBookMenu(e, book)}
        >
            <MoreVertIcon />
        </IconButton>
    );
}

export default BookMenuBtn;
