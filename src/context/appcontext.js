import { createContext, useState } from 'react';
import useStorage from '../hooks/useStorage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [token, setTheme] = useStorage('darkMode', 'local');
    const dk = (token === null) ? true : token;

    const [darkTheme, setDarkTheme] = useState(dk);
    const [scrollPerc, setScrollPerc] = useState(0);

    const handleDarkTheme = () => {
        const thisTheme = !darkTheme;

        setTheme(thisTheme);
        setDarkTheme(thisTheme);
    }

    const handleScrollPerc = (p) => {
        setScrollPerc(p);
    }

    const valueToShare = {
        darkTheme,
        scrollPerc,
        handleDarkTheme,
        handleScrollPerc
    }

    return (
        <AppContext.Provider value={valueToShare}>
            {children}
        </AppContext.Provider>
    )
}