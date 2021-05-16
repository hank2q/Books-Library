import { useContext, useState } from "react";
import { IconButton, Popover, Slider, Box } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { CardSizeContext } from "../../contexts/CardSizeContext";
const marks = [
    {
        value: 2,
        label: "2",
    },
    {
        value: 3,
        label: "3",
    },
    {
        value: 4,
        label: "4",
    },
    {
        value: 6,
        label: "6",
    },
    {
        value: 12,
        label: "12",
    },
];
function CardSizeButton() {
    const [cardSize, setCardSize] = useContext(CardSizeContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleChange = (e, newValue) => {
        setCardSize(newValue);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                aria-label="Card Size"
                style={{ padding: 6, color: "#252525", backgroundColor: "#fff" }}
                disableElevation
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <ZoomInIcon />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <div style={{ width: 150, padding: "0px 15px" }}>
                    <Slider
                        valueLabelDisplay="off"
                        defaultValue={cardSize}
                        aria-labelledby="card-sizes-slider"
                        step={null}
                        max={12}
                        min={2}
                        marks={marks}
                        onChange={handleChange}
                    />
                </div>
            </Popover>
        </>
    );
}

export default CardSizeButton;
