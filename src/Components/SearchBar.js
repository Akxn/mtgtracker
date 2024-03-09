import React, {useState} from 'react';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const [input, setInput] = useState('');

    const fetchDatas = async () => {
        const response = await fetch(`https://api.scryfall.com/cards/search?q=${input}`);
        const data = await response.json();
        console.log(data);
    }

    const handleSubmit = (value) => {
        setInput(value);
        fetchDatas(value);
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search..." value={input} 
            onChange={(e) => handleSubmit(e.target.value)}
            />
            <button type="submit"><FaSearch /></button>
        </div>
    );
}