import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">MTGTracker</a>
            <SearchBar />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    );
}