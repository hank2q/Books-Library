import { useContext } from "react";
import { Box } from "@material-ui/core";
import { SelectBookContext } from "../contexts/BookSelectionContext";
import AddBookButton from "./AddBookButton";
import useStyles from "../styles";
import SortButton from "./SortButton";
import ViewButtons from "./ViewButtons";
import SelectedBooks from "./SelectedBooks";
import CardSizeButton from "./CardSizeButton";
function MainSettings({ toggleAddForm, showAddForm, tableView, toggleTableView }) {
    const classes = useStyles();
    const [booksSelected] = useContext(SelectBookContext);

    return (
        <Box className={classes.mainContSettings} component="div">
            <AddBookButton handleShowAddForm={toggleAddForm} adding={showAddForm} />
            <SortButton />
            <CardSizeButton />
            {booksSelected.length > 0 && <SelectedBooks />}
            <ViewButtons tableView={tableView} toggleTableView={toggleTableView} />
        </Box>
    );
}

export default MainSettings;
