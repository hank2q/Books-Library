import { useContext } from "react";
import useStyles from "../../styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton } from "@material-ui/core";
import { BookPageContext, PagesContext } from "../../contexts/PagesContext";

function BookSettings() {
    const classes = useStyles();
    const [, setBookPage] = useContext(BookPageContext);
    const [, setPage] = useContext(PagesContext);

    return (
        <Box
            className={classes.mainContSettings}
            style={{ flexDirection: "row" }}
            component="div"
        >
            <IconButton
                onClick={() => {
                    setPage("books");
                    setBookPage(null);
                }}
                style={{ padding: 6 }}
            >
                <ArrowBackRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
        </Box>
    );
}

export default BookSettings;
