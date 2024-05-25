import './styles.css';

function SquareButton({ value, handleClick }) {
	return (
		<button className="btn-square" onClick={handleClick}>{value}</button>
	);
}
  
export default SquareButton;