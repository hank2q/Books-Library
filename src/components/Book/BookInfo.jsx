import React from "react";
import useStyles from "../../styles";
import { Typography } from "@material-ui/core";

function BookInfo({ lable, value, variant, lineHeight }) {
    const classes = useStyles();
    return (
        <Typography style={{ lineHeight: lineHeight }} variant={variant || "h6"}>
            <Typography
                className={classes.bookInfoLable}
                variant={variant || "h6"}
                component="span"
            >
                {lable}:
            </Typography>{" "}
            {value}
        </Typography>
    );
}

export default BookInfo;
