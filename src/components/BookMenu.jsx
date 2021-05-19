import { Menu, MenuItem } from "@material-ui/core";
import { useContext } from "react";
import { BookMenuContext } from "../contexts/BookMenuContext";
import ConfirmDelete from "./ConfirmDelete";
const options = ["Select", "Edit", "Delete"];
function BookMenu() {
    const [anchorEl, , closeBookMenu, menuItemClick] = useContext(BookMenuContext);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        console.log("use agreed to delete");
        setOpen(false);
    };
    return (
        <>
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
            <ConfirmDelete
                open={open}
                title="Test Dialoug"
                text="This is a test to see the functionality of dialog"
                handleConfirm={handleConfirm}
                handleClose={handleClose}
            />
        </>
    );
}

export default BookMenu;
