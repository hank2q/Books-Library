import { Typography, Paper } from "@material-ui/core";
import useStyles from "../../styles";

function BookDesc({ description }) {
    const classes = useStyles();
    return (
        <Paper className={classes.bookDesc}>
            <Typography paragraph variant="body1">
                Description
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </Paper>
    );
}

export default BookDesc;
