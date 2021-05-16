import React from "react";
import { useState, useContext, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import AddBook from "./AddBook";
import BooksTable from "./BooksTable";
import BooksCards from "./BooksCards";
import BookMenu from "./BookMenu";
import BookStatusMenu from "./BookStatusMenu";
import MainSettings from "./Settings/MainSettings";
import { BooksContext } from "../contexts/BooksContext";
import { BookSelectionProvider } from "../contexts/BookSelectionContext";
import { BookMenuProvider } from "../contexts/BookMenuContext";
import { BookStatusProvider } from "../contexts/BookStatusContext";
import { CardSizeProvider } from "../contexts/CardSizeContext";

function BooksViews() {
    const [showAddForm, setShowAddForm] = useState(false);
    const { books } = useContext(BooksContext);
    const [tableView, setTableView] = useState(false);

    useEffect(() => {
        const view = localStorage.getItem("tableView");
        if (view) {
            setTableView(JSON.parse(view));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tableView", JSON.stringify(tableView));
    });

    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };
    return (
        <>
            <BookSelectionProvider>
                <CardSizeProvider>
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
                        <BookStatusProvider>
                            {tableView ? (
                                <BooksTable books={books} />
                            ) : (
                                <BooksCards books={books} />
                            )}
                            <BookMenu />
                            <BookStatusMenu />
                        </BookStatusProvider>
                    </BookMenuProvider>
                </CardSizeProvider>
            </BookSelectionProvider>
        </>
    );
}

export default BooksViews;
