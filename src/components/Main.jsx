import React from "react";
import { useState } from "react";
import { Container, Box, ButtonGroup, Button } from "@material-ui/core";
import BooksTable from "./BooksTable";
import useStyles from "../styles";
import Books from "../data";
import AddBook from "./AddBook";
import Collapse from "@material-ui/core/Collapse";
import MainSettings from "./MainSettings";
function Main() {
    const classes = useStyles();
    const [showAddForm, setShowAddForm] = useState(false);
    const [books, setBooks] = useState([...Books]);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };
    const addBook = (newBook) => {
        let newId = 0;
        books.forEach((book) => {
            if (book.id > newId) {
                newId = book.id;
            }
        });
        newBook.id = newId + 1;
        setBooks([...books, newBook]);
    };
    const updateBookStatus = (bookId, newStatus) => {
        let updated = books.map((book) => {
            if (book.id === bookId) {
                book.status = newStatus;
            }
            return book;
        });
        setBooks(updated);
    };

    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <MainSettings toggleAddForm={toggleAddForm} showAddForm={showAddForm} />
            <Collapse in={showAddForm}>
                <AddBook
                    handleAdd={addBook}
                    adding={showAddForm}
                    handleShowAddForm={toggleAddForm}
                />
            </Collapse>
            <BooksTable
                books={books}
                classes={classes}
                handleStatusUpdate={updateBookStatus}
            />
        </Container>
    );
}

export default Main;
