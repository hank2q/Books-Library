import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "../styles";

function AddBookButton({ handleShowAddForm, adding }) {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const classes = useStyles();
    const btnIcon = () => {
        return (
            <CloseIcon
                style={
                    adding
                        ? { transition: "transform .2s" }
                        : {
                              transition: "transform .2s",
                              transform: "rotate(-45deg)",
                          }
                }
            />
        );
    };
    const btnProps = () => {
        return {
            variant: "contained",
            disableElevation: true,
            onClick: handleShowAddForm,
            className: adding ? classes.closeBtn : classes.addBtn,
        };
    };
    return (
        <Button {...btnProps()} endIcon={matches ? btnIcon() : ""}>
            {matches ? (adding ? "Close" : "Add Book") : btnIcon()}
        </Button>
    );
}

export default AddBookButton;
