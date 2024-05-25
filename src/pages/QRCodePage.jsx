import { useState } from 'react';
import QRCode from "react-qr-code";

export default function QRCodePage() {

	const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

	function generateCode() {
        setQrCode(input);
        setInput('')
    }

	return (
		<div className="app-cont">
			<div className="container">

				<header>
					<h1>QR Code Generator</h1>
				</header>

				<div className="input-cont">
					<input 
						className="react-input"
						onChange={(e) => setInput(e.target.value)} 
						type="text" 
						value={input}
						name="qr-code" />
					<button 
						className="react-btn"
						disabled={input && input.trim() !== ""? false : true}
						onClick={generateCode}
					>Generate</button>
				</div>

				<div className="qr-code-cont">
					<QRCode
						id="qr-code-value"
						value={qrCode}
						size={200}
						bgColor="#fff"
					/>
				</div>

				<div className="qr-val">{qrCode}</div>

			</div>
	</div>
    )
}