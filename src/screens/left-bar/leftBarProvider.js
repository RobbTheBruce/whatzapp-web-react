import React, { createContext, useState } from 'react';

export const LeftBarContext = createContext();

export default function LeftBarProvider({ children }) {
    const [leftBarContent, setLeftBarContent] = useState({
        open: true,
        controller: 'settings'
    });

    return (
        <LeftBarContext.Provider
            value={{
                leftBarContent, setLeftBarContent,
            }}
        >
            {children}
        </LeftBarContext.Provider>
    );
}