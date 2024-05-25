import { useState, useEffect } from 'react';

export default function RandColorPage() {
	const [typeOfColor, setTypeOfColor] = useState('hex');
	const [color, setColor] = useState('#000000');

	const randomColorValue = (len) => {
		return Math.floor(Math.random() * len);
	};

	const createHexColor = () => {
		const hex = '0123456789ABCDEF';
		let hexColor = '#';

		for (let a=0;a<6;a++) {
			hexColor += hex[randomColorValue(hex.length)];
		}

		setColor(hexColor);
	};

	const createRGBColor = () => {
		const r = randomColorValue(256);
		const g = randomColorValue(256);
		const b = randomColorValue(256);
		const rgbColor = `rgb(${r},${g},${b})`;
		setColor(rgbColor);
	};

	const onHexClick = () => {
		setTypeOfColor('hex');
	};

	const onRgbClick = () => {
		setTypeOfColor('rgb');
	};

	const onRandoColor = () => {
		typeOfColor === 'hex' ? createHexColor() : createRGBColor();
	};

	useEffect(() => {
		if (typeOfColor === 'rgb') {
			createRGBColor();
		}else{
			createHexColor();
		}
	}, [typeOfColor]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="app-cont rand-color-cont">
			<div className="container">

				<header>
					<h1>Random Color Generator</h1>
				</header>

				<div className="color-container" style={{ background: color }}>
					<div className="color-text">
						<div className="color-type">{typeOfColor}</div>
						<div className="color-val">{color}</div>
					</div>
				</div>

				<div className="btn-cont">
					<button className="react-btn" onClick={onHexClick}>Create HEX Color</button>
					<button className="react-btn" onClick={onRgbClick}>Create RGB Color</button>
					<button className="react-btn" onClick={onRandoColor}>Generate Random Color</button>
				</div>
			</div>
		</div>
	);
}
