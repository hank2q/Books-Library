import React from "react";
import { Container } from "@material-ui/core";
import useStyles from "../styles";
import BooksViews from "./BooksViews";
import Book from "./Book";
import { Route, Switch } from "react-router-dom";
function Main() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <Switch>
                <Route path="/" exact>
                    <BooksViews />
                </Route>
                <Route path="/book/:id" component={Book} />
            </Switch>
        </Container>
    );
}

export default Main;
