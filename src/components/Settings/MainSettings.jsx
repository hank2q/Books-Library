import { useContext } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import { SelectBookContext } from "../../contexts/BookSelectionContext";
import AddBookButton from "./AddBookButton";
import useStyles from "../../styles";
import SortButton from "./SortButton";
import ViewButtons from "./ViewButtons";
import SelectedBooks from "./SelectedBooks";
import CardSizeButton from "./CardSizeButton";
function MainSettings({ toggleAddForm, showAddForm, tableView, toggleTableView }) {
    const classes = useStyles();
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const [booksSelected] = useContext(SelectBookContext);

    return (
        <Box className={classes.mainContSettings} component="div">
            <AddBookButton handleShowAddForm={toggleAddForm} adding={showAddForm} />
            <SortButton />
            {!tableView && matches && <CardSizeButton />}
            {booksSelected.length > 0 && <SelectedBooks />}
            {matches ? (
                <ViewButtons
                    tableView={tableView}
                    toggleTableView={toggleTableView}
                />
            ) : (
                !booksSelected.length > 0 && (
                    <ViewButtons
                        tableView={tableView}
                        toggleTableView={toggleTableView}
                    />
                )
            )}
            {/* <ViewButtons tableView={tableView} toggleTableView={toggleTableView} /> */}
        </Box>
    );
}

export default MainSettings;
