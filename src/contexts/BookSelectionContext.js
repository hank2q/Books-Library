import { createContext, useState } from "react";

export const SelectBookContext = createContext();

export function BookSelectionProvider({ children }) {
    const [booksSelected, setBooksSelected] = useState([]);
    return (
        <SelectBookContext.Provider value={[booksSelected, setBooksSelected]}>
            {children}
        </SelectBookContext.Provider>
    );
}
