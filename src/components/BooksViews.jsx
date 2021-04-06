import React from "react";
import { useState, useContext } from "react";
import Collapse from "@material-ui/core/Collapse";
import AddBook from "./AddBook";
import BooksTable from "./BooksTable";
import BooksCards from "./BooksCards";
import BookMenu from "./BookMenu";
import MainSettings from "./MainSettings";
import { BooksContext } from "../contexts/BooksContext";
import { BookSelectionProvider } from "../contexts/BookSelectionContext";
import { BookMenuProvider } from "../contexts/BookMenuContext";

function BooksViews() {
    const [showAddForm, setShowAddForm] = useState(false);
    const [books] = useContext(BooksContext);
    const [tableView, setTableView] = useState(false);

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };
    return (
        <>
            <BookSelectionProvider>
                <MainSettings
                    tableView={tableView}
                    toggleTableView={setTableView}
                    toggleAddForm={toggleAddForm}
                    showAddForm={showAddForm}
                    books={books}
                />
                <Collapse in={showAddForm} mountOnEnter unmountOnExit>
                    <AddBook handleShowAddForm={toggleAddForm} />
                </Collapse>
                <BookMenuProvider>
                    {tableView ? (
                        <BooksTable books={books} />
                    ) : (
                        <BooksCards books={books} />
                    )}
                    <BookMenu />
                </BookMenuProvider>
            </BookSelectionProvider>
        </>
    );
}

export default BooksViews;
