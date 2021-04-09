import { useContext } from "react";
import useStyles from "../../styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton } from "@material-ui/core";
import { PagesContext } from "../../contexts/PagesContext";

function BookSettings() {
    const classes = useStyles();
    const [, , goToBooks] = useContext(PagesContext);

    return (
        <Box
            className={classes.mainContSettings}
            style={{ flexDirection: "row" }}
            component="div"
        >
            <IconButton onClick={goToBooks} style={{ padding: 6 }}>
                <ArrowBackRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
        </Box>
    );
}

export default BookSettings;
