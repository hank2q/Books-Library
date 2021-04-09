import useStyles from "../../styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Box, IconButton } from "@material-ui/core";
function BookSettings() {
    const classes = useStyles();

    return (
        <Box
            className={classes.mainContSettings}
            style={{ flexDirection: "row" }}
            component="div"
        >
            <IconButton
                onClick={() => {
                    window.history.back();
                }}
                style={{ padding: 6 }}
            >
                <ArrowBackRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
        </Box>
    );
}

export default BookSettings;
