import { Typography, Paper } from "@material-ui/core";
import useStyles from "../../styles";

function BookDesc() {
    const classes = useStyles();
    return (
        <Paper className={classes.bookDesc}>
            <Typography variant="body1">Description</Typography>
            <Typography paragraph variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                voluptates id nulla voluptas laboriosam porro vero in ipsa
                blanditiis, perferendis animi architecto, suscipit neque iste dolore
                fugit cum ab quia mollitia consectetur, tenetur quis molestiae? Quas
                quibusdam autem voluptas quod obcaecati? Modi inventore ipsum
                officiis quas nesciunt laboriosam officia dicta?
            </Typography>
        </Paper>
    );
}

export default BookDesc;
