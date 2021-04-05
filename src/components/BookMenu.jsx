import { Menu, MenuItem } from "@material-ui/core";
import { useContext } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
const options = ["Select", "Edit", "Delete"];
function BookMenu() {
    const [anchorEl, , closeBookMenu, menuItemClick] = useContext(BookMenuContext);
    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted={true}
            open={Boolean(anchorEl)}
            onClose={closeBookMenu}
        >
            {options.map((option, index) => (
                <MenuItem onClick={() => menuItemClick(index)} key={index}>
                    {option}
                </MenuItem>
            ))}
        </Menu>
    );
}

export default BookMenu;
