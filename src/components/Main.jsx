import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "../styles";
import BooksViews from "./BooksViews";
function Main() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <BooksViews />
        </Container>
    );
}

export default Main;
