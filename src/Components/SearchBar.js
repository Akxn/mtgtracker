import React, {useState} from 'react';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const [input, setInput] = useState('');
    // var cardImage;

    const fetchDatas = async () => {
        const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${input}`);
        const data = await response.json();
        return data;
        
        // console.log(data);
        // console.log(data.name);

        // try {
        //     console.log(data.image_uris['normal']);
        // }catch(err) {
        //     console.log(err);
        // }
        // try{
        //     console.log(data.prices['usd']);
        // }catch(err) {
        //     console.log(err);
        // }


        // console.log(typeof(data.name))
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