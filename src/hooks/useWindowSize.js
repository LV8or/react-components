import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
    const [deviceWidth, setDeviceWidth] = useState(window.screen.width);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const browserResized = () => {
        setBrowserWidth(window.innerWidth);
        setDeviceWidth(window.screen.width);
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', browserResized);

        return () => {
            window.removeEventListener('resize', browserResized);
        };
    }, []);

    return {
        browserWidth,
        deviceWidth,
        isMobile
    };
}