import React from 'react';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." />
            <button type="submit"><FaSearch /></button>
        </div>
    );
}