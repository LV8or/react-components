import { useState, useEffect } from 'react';

const getItem = (key, storage) => {
    let value = storage.getItem(key);
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

const useStorage = (key, type = 'session') => {
	let storage;
	switch (type) {
		case 'session':
			storage = sessionStorage;
		break;
		case 'local':
			storage = localStorage;
		break;
		default:
			storage = null;
	}

  	const [value, setValue] = useState(() => getItem(key, storage));

	useEffect(() => {
		storage.setItem(key, JSON.stringify(value));
	}, [key, value, storage]);

	const setItem = (newValue) => {
		setValue(newValue);
	};

  	return [value, setItem];
};

export default useStorage;