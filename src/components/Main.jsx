import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import BooksTable from "./BooksTable";
import BooksCards from "./BooksCards";
import useStyles from "../styles";
import Books from "../data";
import AddBook from "./AddBook";
import Collapse from "@material-ui/core/Collapse";
import MainSettings from "./MainSettings";
import { BookSelectionProvider } from "../contexts/BookSelectionContext";

function Main() {
    const classes = useStyles();
    const [showAddForm, setShowAddForm] = useState(false);
    const [books, setBooks] = useState([...Books]);
    const [tableView, setTableView] = useState(false);

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
            <BookSelectionProvider>
                <MainSettings
                    tableView={tableView}
                    toggleTableView={setTableView}
                    toggleAddForm={toggleAddForm}
                    showAddForm={showAddForm}
                    books={books}
                />
                <Collapse in={showAddForm} mountOnEnter unmountOnExit>
                    <AddBook
                        handleAdd={addBook}
                        adding={showAddForm}
                        handleShowAddForm={toggleAddForm}
                    />
                </Collapse>
                {tableView ? (
                    <BooksTable
                        books={books}
                        handleStatusUpdate={updateBookStatus}
                    />
                ) : (
                    <BooksCards
                        handleStatusUpdate={updateBookStatus}
                        books={books}
                    />
                )}
            </BookSelectionProvider>
        </Container>
    );
}

export default Main;
