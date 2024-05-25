import { useContext } from 'react';
import {AppContext } from '../../context/appcontext';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/images/react-logo.png';
import Switch from '../switch';

export default function Navbar({customScroll, darkMode}) {

	const { scrollPerc, darkTheme, handleDarkTheme } = useContext(AppContext);

    return (
        <div className="navbar"> 
			
			<div className="container">				
				<Link to="/">
					<div className="logo-title">
						<img src={logo} alt="logo"/>
						<div className="nav-title">React Components</div>
					</div>
				</Link>

				<Switch switchVal={darkTheme} onSwitch={handleDarkTheme} />
			</div>

			{customScroll &&
			<div className="custom-scroll">
				<div className="scroll-progress">
					<div className="progress-bar" style={{ width: `${scrollPerc}%` }}></div>
				</div>
			</div>
			}
				
		</div>
    );
}