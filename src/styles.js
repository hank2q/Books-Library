import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },

    mainContainer: {
        backgroundColor: theme.palette.background.paper,
        height: "auto",
        padding: 16,
        marginTop: 8,
    },
    tableCont: {
        marginTop: 0,
    },
    addBookContainer: {
        backgroundColor: theme.palette.primary.light,
        padding: 16,
        paddingBottom: 10,
        marginBottom: 16,
    },
    addBookForm: {
        borderTop: `1px solid ${theme.palette.grey[500]}`,
        paddingTop: 10,
    },

    formButtons: {
        display: "flex",
        flexDirection: "row-reverse",
        margin: theme.spacing(1),
        marginRight: 0,
    },
    mainContSettings: {
        backgroundColor: theme.palette.primary.light,
        padding: 16,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "row-reverse",
    },
    viewButtons: { flexGrow: 1 },
    navTitle: { flexGrow: 1 },
    navIcon: {
        marginRight: theme.spacing(2),
    },
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    headCell: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    finished: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.getContrastText(theme.palette.success.main),
    },
    finishedClickable: {
        "&:focus": {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.getContrastText(theme.palette.success.main),
        },
        "&:hover": {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.getContrastText(theme.palette.success.light),
        },
    },
    reading: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
    readingClickable: {
        "&:focus": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.getContrastText(theme.palette.secondary.main),
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.getContrastText(theme.palette.secondary.light),
        },
    },
    wish: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    wishClickable: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
        },
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.getContrastText(theme.palette.primary.light),
        },
    },
    pending: {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.getContrastText(theme.palette.grey[300]),
    },
    pendingClickable: {
        "&:focus": {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.getContrastText(theme.palette.grey[300]),
        },
        "&:hover": {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.getContrastText(theme.palette.grey[400]),
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
    statusSelect: {
        minWidth: 120,
    },
    addBtn: {
        color: "#fff",
        backgroundColor: theme.palette.secondary.light,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    closeBtn: {
        color: "#fff",
        backgroundColor: theme.palette.error.main,
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
    },
}));

export default useStyles;
