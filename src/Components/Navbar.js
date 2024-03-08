import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" class="font-bold text-slate-400 hover: dark-blue">MTGTracker</a>
            <SearchBar />
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    );
}