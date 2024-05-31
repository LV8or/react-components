import { useState, useEffect } from 'react';
import Card from '../components/github-finder/card';

export default function GitHubFinderPage() {
	const [username, setUsername] = useState('LV8or');
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchGithubUser = async () => {

		setLoading(true);
		setUserData(null);
		setError(null);

		try {
			const response = await fetch(`https://api.github.com/users/${username}`, {'User-Agent': 'request'});
			if(!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const data = await response.json();
			setUserData(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchGithubUser();
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	useEffect(() => {
		fetchGithubUser();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if(loading) {
		return <div>Loading user data...</div>;
	}

	return (
		<div className="app-cont">
			<div className="container">
				
				<header>
					<h1>GitHub Finder</h1>
				</header>

				{error && <div className="error-msg">{error}</div>}

				<div className="github-finder-container">
					<form className="input-wrapper" onSubmit={handleSubmit}>
						<input
							type="text"
							className="react-input"
							name="search-by-username"
							placeholder="Search GitHub Username"
							value={username}
							onChange={handleUsernameChange}
						/>
						<button type="submit" className="react-btn">Search</button>
					</form>
					{userData && <Card className="comp-cont github-user-card" userData={userData} />}
				</div>
				
			</div>
		</div>
	);
}
