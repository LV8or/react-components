import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/appcontext';

export default function ScrollIndPage() {

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const { handleScrollPerc } = useContext(AppContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch("https://dummyjson.com/products?limit=100");
				const data = await response.json();
					if (data && data.products && data.products.length > 0) {
					setItems(data.products);
				}
				setLoading(false);
			}catch(error) {
				setErrorMessage(error.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const handleScrollPercentage = () => {
			const scrolled = document.documentElement.scrollTop;
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			setScrollPercentage((scrolled / height) * 100);
		};

		window.addEventListener('scroll', handleScrollPercentage);

		return () => {
			window.removeEventListener('scroll', handleScrollPercentage);
		};
	}, []);

	useEffect(() => {
		const handleScroll = (percentage) => {
			// console.log(`Scrolled: ${percentage}%`);
			handleScrollPerc(percentage)
			// Replace this with the actual function to emit the scroll event
		};

		handleScroll(scrollPercentage);
	}, [scrollPercentage]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="app-cont scroll-ind-cont">
			<div className="container">

				<header>
					<h1>Scroll Indicator</h1>
				</header>

				<div className="data-container">
				{loading ? (
					<p>Loading...</p>
				) : errorMessage ? (
					<p>Error: {errorMessage}</p>
				) : (
					items.map((item, i) => (
					<div className="comp-cont data-item" key={i}>
						{item.title}
					</div>
					))
				)}
				</div>
			</div>
		</div>
	);
};