import React from "react";
import { List, Paper } from "@material-ui/core";
import SuggestionItems from "./SuggestionItems";
import useStyles from "../../styles";

function SearchSuggestion({ myBooks, googleBooks, queryState }) {
    const classes = useStyles();
    return (
        <Paper className={classes.searchSuggest}>
            <List
                subheader={<li />}
                component="ul"
                style={{
                    maxHeight: "90vh",
                    overflowY: "auto",
                    position: "relative",
                }}
            >
                <li key="library">
                    <SuggestionItems
                        heading={"My Library"}
                        books={myBooks}
                        queryState={queryState}
                    />
                </li>
                <li key="googleApi">
                    <SuggestionItems
                        heading={"Google Books"}
                        books={googleBooks}
                        queryState={queryState}
                    />
                </li>
            </List>
        </Paper>
    );
}

export default SearchSuggestion;
