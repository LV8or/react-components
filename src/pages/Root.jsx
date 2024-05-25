
import { useState, useContext, useEffect } from 'react';
import {AppContext } from '../context/appcontext';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

export default function Root() {

    const [customScroll, setCustomScroll] = useState(false);
    const { darkTheme } = useContext(AppContext);
    const location = useLocation();

    useEffect(() => {
        setCustomScroll((location.pathname === "/scrollind") ? true : false);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <main id="main" className="theme-background" data-dark-theme={darkTheme}>
			<Navbar customScroll={customScroll} />
			<Outlet/>
        </main>
    )
}