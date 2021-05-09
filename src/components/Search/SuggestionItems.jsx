import { useContext } from "react";
import defaultBook from "../../assets/defaultBook.svg";
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListSubheader,
    Divider,
    Typography,
} from "@material-ui/core";
import { PagesContext } from "../../contexts/PagesContext";

function SuggestionItems({ books, heading, queryState }) {
    const [, goToBook] = useContext(PagesContext);
    const [, setQuery] = queryState;

    return (
        <List key={heading}>
            <ListSubheader key={heading + "1"} style={{ backgroundColor: "#fff" }}>
                {heading}
            </ListSubheader>
            <Divider />
            {books.length > 0 ? (
                books.map((book) => (
                    <ListItem
                        key={book.id}
                        button
                        onClick={() => {
                            goToBook(book);
                            setQuery("");
                        }}
                        style={{ padding: "8px 10px" }}
                    >
                        <ListItemAvatar style={{ width: "15%", marginRight: "8px" }}>
                            <img
                                style={{ width: "100%" }}
                                src={book.image || defaultBook}
                                alt="Book Cover"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={book.title}
                            secondary={book.author?.join(", ")}
                        />
                    </ListItem>
                ))
            ) : (
                <ListItem key={heading + "2"}>
                    <Typography variant="subtitle2">No Books Found</Typography>
                </ListItem>
            )}
        </List>
    );
}

export default SuggestionItems;
