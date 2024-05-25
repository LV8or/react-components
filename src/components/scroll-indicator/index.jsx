
import { useState, useEffect } from 'react';
import './scroll.css';


export default function ScrollIndicator({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if(data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        }catch(error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, url); // eslint-disable-line react-hooks/exhaustive-deps

    function handleScrollPercentage() {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((scrolled / height) *100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () => {});
        }
    })

    if(errorMessage) {
        return <div>Error: {errorMessage}</div>
    }

    if(loading) {
        return <div>Loading data...</div>
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress">
                    <div className="progress-bar" style={{width: `${scrollPercentage}%`}}></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length > 0
                ? data.map((dataItem) => <p>{dataItem.title}</p>)
                : null}
            </div>
        </div>
    )
}