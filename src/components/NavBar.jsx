import React from "react";
import Logo from "../assets/Logo.svg";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "../styles";
import SearchBook from "./SearchBook";

function NavBar() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const classes = useStyles();
    return (
        <AppBar color="primary" position="relative">
            <Toolbar>
                <a href="/">
                    <img
                        src={Logo}
                        className={classes.navIcon}
                        style={{ width: "25px" }}
                        alt="Books"
                    />
                </a>
                {matches && (
                    <Typography variant="h6" className={classes.navTitle}>
                        My Books Library
                    </Typography>
                )}
                <SearchBook />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
