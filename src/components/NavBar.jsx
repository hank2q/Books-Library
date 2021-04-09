import { useContext } from "react";
import Logo from "../assets/Logo.svg";
import { Typography, AppBar, Toolbar, ButtonBase } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "../styles";
import SearchBook from "./SearchBook";
import { PagesContext } from "../contexts/PagesContext";

function NavBar() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const classes = useStyles();
    const [, , goToBooks] = useContext(PagesContext);

    return (
        <AppBar color="primary" position="relative">
            <Toolbar>
                <ButtonBase onClick={goToBooks} disableRipple>
                    <img
                        src={Logo}
                        className={classes.navIcon}
                        style={{ width: "25px" }}
                        alt="Books"
                    />
                </ButtonBase>
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
