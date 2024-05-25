import './styles.css';

export default function Switch({ switchVal, onSwitch }) {
	const handleCheck = (event) => {
		onSwitch(event.target.checked);
	};

	return (
		<ul className="tg-list">
			<li className="tg-list-item">
				<div className="toggle-label">Mode</div>
				<input 
					className="tgl tgl-ios" 
					id="cb-toggle" 
					type="checkbox" 
					checked={switchVal} 
					onChange={handleCheck} 
				/>
				<label className="tgl-btn" htmlFor="cb-toggle"></label>
			</li>
		</ul>
	);
}