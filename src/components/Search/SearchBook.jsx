import { useState, useContext } from "react";
import useStyles from "../../styles";
import { Box, useMediaQuery } from "@material-ui/core";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";
import { BooksContext } from "../../contexts/BooksContext";
import React from "react";
import useSearch from "../../hooks/useSearch";

function SearchBook() {
    const classes = useStyles();
    const [query, setQuery] = useState("");
    const [myBooks, setMyBooks] = useState([]);
    const [gBooks, goog] = useSearch();
    const [isFocused, setIsFocused] = useState(false);
    const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const { books } = useContext(BooksContext);
    const desktop = isFocused && query;
    const mobile = Boolean(query);
    const search = (e) => {
        setQuery(e.target.value);
        setMyBooks(
            books.filter(
                (book) =>
                    book.title
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase()) ||
                    book.author.some((auth) =>
                        auth.toLowerCase().includes(e.target.value.toLowerCase())
                    )
            )
        );
        goog(e.target.value);
    };

    return (
        <Box className={classes.searchCont}>
            <SearchBar
                queryState={[query, setQuery]}
                focusState={[isFocused, setIsFocused]}
                handleSearch={search}
                setIsFocused={setIsFocused}
            />
            {matches
                ? mobile && (
                      <SearchSuggestion
                          myBooks={myBooks}
                          googleBooks={gBooks}
                          queryState={[query, setQuery]}
                      />
                  )
                : desktop && (
                      <SearchSuggestion
                          myBooks={myBooks}
                          googleBooks={gBooks}
                          queryState={[query, setQuery]}
                      />
                  )}
        </Box>
    );
}

export default SearchBook;

// const highlightMatch = (phrase) => {
//     let toHighlight = query
//         ? phrase.replace(query, "<strong>" + query + "</strong>")
//         : phrase;
//     return toHighlight;
// };
