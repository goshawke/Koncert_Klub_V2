import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>KoncertKlub</h1>
            <nav>
                <ul>
                    <li><a href="#past_shows">Past Shows</a></li>
                    <li><a href="#upcoming_shows">Upcoming Shows</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about_us">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;