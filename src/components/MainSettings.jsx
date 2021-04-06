import { useContext } from "react";
import { Box, Button, ButtonGroup, Tooltip, Checkbox } from "@material-ui/core";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { BooksContext } from "../contexts/BooksContext";
import { SelectBookContext } from "../contexts/BookSelectionContext";
import { withStyles } from "@material-ui/core/styles";
import AddBookButton from "./AddBookButton";
import useStyles from "../styles";

const DarkTooltip = withStyles((theme) => ({
    arrow: {
        color: "#000",
    },
    tooltip: {
        backgroundColor: "#000",
    },
}))(Tooltip);

function MainSettings({ toggleAddForm, showAddForm, tableView, toggleTableView }) {
    const classes = useStyles();
    const [books] = useContext(BooksContext);
    const [booksSelected, setBooksSelected] = useContext(SelectBookContext);

    const handleSwitch = (e) => {
        e.target.checked
            ? setBooksSelected(books.map((book) => book.id))
            : setBooksSelected([]);
    };
    return (
        <Box className={classes.mainContSettings} component="div">
            <AddBookButton handleShowAddForm={toggleAddForm} adding={showAddForm} />
            {booksSelected.length > 0 ? (
                <>
                    <div className={classes.selectedCount}>
                        <Checkbox
                            checked={booksSelected.length === books.length}
                            onChange={(e) => handleSwitch(e)}
                            className={classes.selectAll}
                            color="default"
                            indeterminate={booksSelected.length < books.length}
                        />
                        {booksSelected.length} selected
                    </div>
                </>
            ) : (
                ""
            )}
            <ButtonGroup
                className={classes.viewButtons}
                disableElevation
                variant="contained"
                size="small"
                color="secondary"
            >
                <DarkTooltip arrow title="Table View" placement="top">
                    <Button
                        onClick={() => toggleTableView(true)}
                        className={
                            classes.addBtn +
                            " " +
                            (tableView && classes.viewBtnActive)
                        }
                        size="small"
                    >
                        <ViewHeadlineIcon />
                    </Button>
                </DarkTooltip>
                <DarkTooltip arrow title="Card View" placement="top">
                    <Button
                        onClick={() => toggleTableView(false)}
                        className={
                            classes.addBtn +
                            " " +
                            (!tableView && classes.viewBtnActive)
                        }
                        size="small"
                    >
                        <ViewModuleIcon />
                    </Button>
                </DarkTooltip>
            </ButtonGroup>
        </Box>
    );
}

export default MainSettings;
