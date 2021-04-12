import { useState, useContext } from "react";
import useStyles from "../../styles";
import { Box } from "@material-ui/core";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";
import { BooksContext } from "../../contexts/BooksContext";
import React from "react";

function SearchBook() {
    const classes = useStyles();
    const [query, setQuery] = useState("");
    const [myBooks, setMyBooks] = useState([]);
    const [gBooks, setGBooks] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [books] = useContext(BooksContext);
    const goog = async (q) => {
        try {
            const data = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${q}&printType=books&langRestrict=en&maxResults=8&key=AIzaSyB4BrYz08qiq2OFr5ef1bJRJvbFkiqCCUI`
            );
            const response = await data.json();
            let newGB = [];
            response.items.forEach((item) => {
                let fromat = {
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors,
                    publisher: item.volumeInfo.publisher,
                    image:
                        item.volumeInfo.imageLinks &&
                        item.volumeInfo.imageLinks.thumbnail,
                    description: item.volumeInfo.description,
                    genre: item.volumeInfo.categories && item.volumeInfo.categories,
                };
                newGB.push(fromat);
            });
            setGBooks(newGB);
        } catch (error) {
            console.log(error);
        }
    };

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
            {isFocused && query && (
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
