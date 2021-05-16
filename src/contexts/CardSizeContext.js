import { createContext, useState } from "react";

export const CardSizeContext = createContext();

export function CardSizeProvider({ children }) {
    const [cardSize, setCardSize] = useState(2);

    return (
        <CardSizeContext.Provider value={[cardSize, setCardSize]}>
            {children}
        </CardSizeContext.Provider>
    );
}
