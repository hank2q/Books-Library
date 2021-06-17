import React from "react";
import { Button, ButtonGroup, Tooltip } from "@material-ui/core";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { withStyles } from "@material-ui/core/styles";
import useStyles from "../../styles";

const DarkTooltip = withStyles(
    (theme) => ({
        arrow: {
            color: "#000",
        },
        tooltip: {
            backgroundColor: "#000",
        },
    }),
    { index: 1 }
)(Tooltip);
function ViewButtons({ tableView, toggleTableView }) {
    const classes = useStyles();

    return (
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
                        classes.addBtn + " " + (tableView && classes.viewBtnActive)
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
                        classes.addBtn + " " + (!tableView && classes.viewBtnActive)
                    }
                    size="small"
                >
                    <ViewModuleIcon />
                </Button>
            </DarkTooltip>
        </ButtonGroup>
    );
}

export default ViewButtons;
