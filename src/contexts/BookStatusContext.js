import { createContext, useState } from "react";

export const BookStatusContext = createContext();
export const AnchorElContext = createContext();
export const MenuIndexContext = createContext();
export const StatusesContext = createContext();

export function BookStatusProvider({ children }) {
    const statuses = ["Wish List", "Pending", "Reading", "Finished"];
    const [anchorBook, setAnchorBook] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuIndex, setMenuIndex] = useState(0);

    return (
        <BookStatusContext.Provider value={[anchorBook, setAnchorBook]}>
            <AnchorElContext.Provider value={[anchorEl, setAnchorEl]}>
                <MenuIndexContext.Provider value={[menuIndex, setMenuIndex]}>
                    <StatusesContext.Provider value={statuses}>
                        {children}
                    </StatusesContext.Provider>
                </MenuIndexContext.Provider>
            </AnchorElContext.Provider>
        </BookStatusContext.Provider>
    );
}
