import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <NavLink to="/" className="HomeLink"><h1>KoncertKlub</h1></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/PastShows">
                            Past Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/UpcomingShows">
                            Upcoming Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/AboutUs">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
};




export default Header;