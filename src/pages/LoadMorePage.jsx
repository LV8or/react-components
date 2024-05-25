import { useState, useEffect } from 'react';
import Card from '../components/load-more/card';

export default function LoadMorePage() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(0);
	const [limit, setLimit] = useState(false);

	const fetchItems = async () => {
		setLoading(true);
		try{
			
			const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
			const newItems = await response.json();

			setItems(prevItems => [...prevItems, ...newItems.products]);

			if(count === 4) setLimit(true);

		}catch (error) {
			console.error('Error fetching items:', error);
		}
		setLoading(false);
	};

	const handleClick = () => {
		setCount(prevCount => prevCount + 1);
		console.log(count);
	};
	
	useEffect(() => {
		fetchItems();
	}, [count]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>Load More</h1>
				</header>

				<div className="products-container">
					<div className="products">
					{items.map((item, index) => (
						<Card key={index} product={item} />
					))}
					</div>
				</div>

				<div className="button-container">
					{!limit ?
					<button className="react-btn" onClick={handleClick}>{loading ? 'Loading...' : 'Load More Items'}</button> :
					<div>You have reached the item limit.</div>
					}
				</div>

			</div>
		</div>
	);
}
