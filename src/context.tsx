import React, { createContext, useState } from 'react';

export type Store = {
    searchStore: string
    updateSearchStore: (newSearchStore: string) => void
}

export const StoreContext = createContext<Store>({
    searchStore: "lemoncode", // Valor inicial
    updateSearchStore: () => { }, // Función vacía inicial
});


export const StoreProvider = ({ children }) => {
    const [searchStore, setSearchStore] = useState("lemoncode");

    const updateSearchStore = (newSearch: string) => {
        setSearchStore(newSearch);
    };

    const value: Store = {
        searchStore,
        updateSearchStore
    };

    return (
        <>
            <StoreContext.Provider value={value}>
                {children}
            </StoreContext.Provider>
        </>
    )
}