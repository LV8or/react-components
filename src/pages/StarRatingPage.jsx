import { useState } from 'react';
import Star from '../components/star-rating/star';

export default function StarRating() {

	const [rating, setRating] = useState(-1);
	const numOfStars = 5;

	const handleClick = (index) => {
		setRating(index);
	};

	return (
		<div className="app-cont">
			<div className="container">
				
				<header>
					<h1>Star Rating</h1>
				</header>

				<div className="star-rating">
					{Array.from({ length: numOfStars }, (v, i) => (
					<Star
						key={i}
						starclass={i <= rating ? 'active' : 'inactive'}
						onRating={handleClick}
						starindex={i}
					/>
					))}
				</div>
			</div>
		</div>
	);
}