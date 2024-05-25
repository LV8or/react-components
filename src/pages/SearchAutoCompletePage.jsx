import { useState, useEffect } from 'react';

export default function AutoComplete() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [searchParams, setSearchParams] = useState('');
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://dummyjson.com/users');
				const data = await response.json();

				if (data && data.users && data.users.length) {
					setUsers(data.users.map((userItem) => userItem.firstName));
					setLoading(false);
					setError(null);
				}
			} catch (error) {
				setError(error);
				setLoading(false);
				console.error(error);
			}
		};
		fetchUsers();
	}, []);

	const handleSearch = (e) => {
		const query = e.target.value.toLowerCase();
		setSearchParams(query);

		if (query.length > 0) {
			const filteredData = users.filter((item) => item.toLowerCase().includes(query));
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		}else{
			setShowDropdown(false);
		}

	};

	const handleClick = (e) => {
		setSearchParams(e.target.innerText);
		setShowDropdown(false);
		setFilteredUsers([]);
	};

	if(loading) {
		return <div>Loading users...</div>;
	}

	return (
		<div className="app-cont auto-complete-cont">
			<div className="container">

				<header>
					<h1>Search Auto-Complete</h1>
				</header>

				{error && <div className="error-msg">{error}</div>}

				<div className="search-container">
					<input
						className="react-input"
						name="search-name"
						onChange={handleSearch}
						value={searchParams}
						autoComplete="off"
						placeholder="Search users here..."
					/>
					{showDropdown && (
						<ul className="users">
						{filteredUsers.map((u, i) => (
							<li key={i} onClick={handleClick}>
							{u}
							</li>
						))}
						</ul>
					)}
				</div>
				
			</div>
		</div>
	);
}