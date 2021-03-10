import React from "react";
import { Box, Button, ButtonGroup, Tooltip } from "@material-ui/core";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import AddBookButton from "./AddBookButton";
import useStyles from "../styles";
import { withStyles } from "@material-ui/core/styles";

const DarkTooltip = withStyles((theme) => ({
    arrow: {
        color: "#000",
    },
    tooltip: {
        backgroundColor: "#000",
    },
}))(Tooltip);

function MainSettings({ toggleAddForm, showAddForm }) {
    const classes = useStyles();
    return (
        <Box className={classes.mainContSettings} component="div">
            <AddBookButton handleShowAddForm={toggleAddForm} adding={showAddForm} />
            <ButtonGroup
                className={classes.viewButtons}
                disableElevation
                variant="contained"
                size="small"
                color="secondary"
            >
                <DarkTooltip arrow title="Table View" placement="top">
                    <Button className={classes.addBtn} size="small">
                        <ViewHeadlineIcon />
                    </Button>
                </DarkTooltip>
                <DarkTooltip arrow title="Card View" placement="top">
                    <Button className={classes.addBtn} size="small">
                        <ViewModuleIcon />
                    </Button>
                </DarkTooltip>
            </ButtonGroup>
        </Box>
    );
}

export default MainSettings;
