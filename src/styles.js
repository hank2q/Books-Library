import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
    (theme) => ({
        root: { flexGrow: 1 },

        mainContainer: {
            backgroundColor: theme.palette.background.paper,
            height: "auto",
            maxWidth: 1050,
            padding: 16,
            marginTop: 8,
        },
        tableCont: {
            marginTop: 0,
        },
        optionCell: {
            width: 24,
            paddingLeft: 0,
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
        addSuggestion: {
            padding: 0,
            margin: 0,
            borderBottom: "1px solid grey",
            paddingBottom: 10,
        },
        formButtons: {
            display: "flex",
            flexDirection: "row-reverse",
            margin: theme.spacing(1),
            marginRight: 0,
        },
        mainContSettings: {
            backgroundColor: theme.palette.primary.light,
            padding: theme.spacing(1.5, 1.75),
            display: "flex",
            flexDirection: "row-reverse",
        },
        selectAll: {
            padding: 0,
            marginRight: 8,
            color: "#fff",
        },
        selectedCount: {
            ...theme.typography.button,
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 0.1,
        },
        viewButtons: { flexGrow: 1 },
        navTitle: { flexGrow: 1 },
        navIcon: {
            marginRight: theme.spacing(2),
        },
        tableHead: {
            backgroundColor: theme.palette.primary.light,
            borderTop: `1px solid ${theme.palette.grey[700]}`,
        },
        headCell: {
            color: theme.palette.getContrastText(theme.palette.primary.light),
        },
        tableCheckBox: {
            padding: 0,
            marginRight: 5,
        },
        tableBtn: {
            padding: 6,
            fontWeight: "bold",
            "&:hover": {
                backgroundColor: theme.palette.grey[200],
            },
            borderRadius: 3,
            textAlign: "left",
            transition: "background-color .2s ease",
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
        unfinished: {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.getContrastText(theme.palette.error.main),
        },
        unfinishedClickable: {
            "&:focus": {
                backgroundColor: theme.palette.error.main,
                color: theme.palette.getContrastText(theme.palette.error.main),
            },
            "&:hover": {
                backgroundColor: theme.palette.error.light,
                color: theme.palette.getContrastText(theme.palette.error.light),
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
        searchCont: {
            [theme.breakpoints.down("sm")]: {
                flexGrow: 1,
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
                width: "auto",
            },
            display: "flex",
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
        clearSearch: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
            width: 24,
        },
        inputRoot: {
            color: "inherit",
            width: "100%",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width", { delay: "0.1s" }),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
            },
        },
        inputFocused: {
            [theme.breakpoints.up("sm")]: {
                width: "40ch",
            },
        },
        searchSuggest: {
            position: "absolute",
            width: "29.5%",
            top: "85%",
            right: "1.5%",
            [theme.breakpoints.down("sm")]: {
                width: "97%",
                top: "100%",
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
        viewBtnActive: {
            backgroundColor: theme.palette.secondary.main,
            "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
            },
        },
        bookCardsCont: {
            padding: 0,
            marginTop: 0,
        },
        card: { minWidth: 150 },
        cardCont: {
            padding: 8,
            paddingBottom: 4,
        },
        cardText: {
            flexGrow: 1,
            minHeight: 38,
        },
        cardTitle: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
        },
        cardMedia: {
            paddingTop: "140%",
        },
        cardAction: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 4,
            flexWrap: "wrap",
        },
        checkBox: {
            padding: 0,
        },
        menuBtn: {
            padding: 2,
        },
        bookCont: {
            display: "flex",
            paddingTop: 12,
            marginBottom: 15,
            flexDirection: "row",
        },
        bookBox: {
            marginLeft: 25,
            flexGrow: 1,
            padding: 12,
        },
        bookBoxSm: {
            padding: 12,
            margin: "12px 0px",
        },
        bookInfoLable: { fontWeight: "300", color: theme.palette.grey[600] },
        bookDesc: {
            padding: 12,
        },
        exportBtn: {
            backgroundColor: theme.palette.success.main,
            position: "absolute",
            right: 5,
            "&:focus": {
                backgroundColor: theme.palette.success.main,
                color: theme.palette.getContrastText(theme.palette.success.main),
            },
            "&:hover": {
                backgroundColor: theme.palette.success.light,
                color: theme.palette.getContrastText(theme.palette.success.light),
            },
        },
    }),
    { index: 1 }
);

export default useStyles;
