import { useRef } from "react";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import useStyles from "../../styles";

function SearchBar({ queryState, focusState, handleSearch }) {
    const classes = useStyles();
    const [query, setQuery] = queryState;
    const [isFocused, setIsFocused] = focusState;
    const inputField = useRef(null);
    const clearSearch = () => {
        inputField.current.focus();
        setQuery("");
    };
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                inputRef={inputField}
                placeholder="Search…"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 300)}
                classes={{
                    root: classes.inputRoot,
                    input:
                        classes.inputInput +
                        " " +
                        (isFocused && classes.inputFocused),
                }}
                inputProps={{ "aria-label": "search" }}
                value={query}
                onChange={handleSearch}
            />
            <div className={classes.clearSearch}>
                {query && (
                    <ClearIcon style={{ cursor: "pointer" }} onClick={clearSearch} />
                )}
            </div>
        </div>
    );
}

export default SearchBar;
