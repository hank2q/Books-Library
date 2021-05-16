import { useState, useContext } from "react";
import {
    Button,
    Menu,
    MenuItem,
    Radio,
    RadioGroup,
    FormControlLabel,
    useMediaQuery,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { BooksContext } from "../contexts/BooksContext";
import SortIcon from "@material-ui/icons/Sort";

const StyledMenu = withStyles({})((props) => (
    <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));
const radioStyle = { padding: 0, marginRight: 5, marginLeft: 9 };
const options = ["Title", "Author", "Status"];
function SortButton() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const [anchorEl, setAnchorEl] = useState(null);
    const [direction, setDirection] = useState("asc");
    const { changeOrder } = useContext(BooksContext);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };
    const selectOrder = (index) => {
        changeOrder(options[index].toLowerCase(), direction);
    };
    const btnIcon = () => {
        return (
            <SortIcon
                style={{
                    transition: "transform ease .25s",
                    transform: direction === "desc" && "scaleY(-1)",
                }}
            />
        );
    };
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                style={{ margin: "0px 10px" }}
                endIcon={matches ? btnIcon() : ""}
                onClick={handleClick}
            >
                {matches ? "Sort" : btnIcon()}
            </Button>
            <StyledMenu
                id="sorting-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, i) => (
                    <MenuItem onClick={() => selectOrder(i)}>{option}</MenuItem>
                ))}
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={direction}
                    onChange={handleDirectionChange}
                >
                    <MenuItem disableRipple>
                        <FormControlLabel
                            value="asc"
                            control={<Radio style={radioStyle} />}
                            label="ASC"
                        />
                    </MenuItem>
                    <MenuItem disableRipple>
                        <FormControlLabel
                            value="desc"
                            control={<Radio style={radioStyle} />}
                            label="DESC"
                        />
                    </MenuItem>
                </RadioGroup>
            </StyledMenu>
        </>
    );
}

export default SortButton;
