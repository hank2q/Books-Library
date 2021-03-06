import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import useStyles from "./styles";
import Palette from "./components/Palette";
import { BooksProvider } from "./contexts/BooksContext";
import { PagesProvider } from "./contexts/PagesContext";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: Palette.primary,
        },
        secondary: {
            main: Palette.secondary,
        },
        success: {
            main: Palette.success,
        },
        error: {
            main: Palette.error,
        },
        warning: {
            main: Palette.warning,
        },
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider injectFirst theme={theme}>
                <PagesProvider>
                    <CssBaseline />
                    <BooksProvider>
                        <NavBar />
                        <Main />
                    </BooksProvider>
                </PagesProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
