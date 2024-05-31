import { useState } from 'react';
import './styles.css';

export default function Accordion({ accItems, multiselect }) {

	const [items, setItems] = useState(accItems);

	const handleSingleSelect = (currentId) => {
		const updatedItems = items.map(item => ({
			...item,
			selected: item.id === currentId ? !item.selected : false
		}));
		setItems(updatedItems);
	};

	const handleMultiSelect = (currentId) => {
		const updatedItems = items.map(item => ({
			...item,
			selected: item.id === currentId ? !item.selected : item.selected
		}));
		setItems(updatedItems);
	};

	const handleClick = (e) => {
		const currentId = e.currentTarget.getAttribute("data-id");
		if (multiselect) handleMultiSelect(currentId);
		else handleSingleSelect(currentId);
	};

	return (
		<div className="accordion">
		{
		items.map(ai => (
			<div className="accordion-item" key={ai.id}>
				<button aria-expanded={ai.selected} data-id={ai.id} onClick={handleClick}>
					<div className="accordion-title">{ai.title}</div>
					<div className="icon" aria-hidden="true"></div>
				</button>
				<div className="accordion-content">
					<p className="content">{ai.content}</p>
				</div>
			</div>
		))
		}
		</div>
	);
}
