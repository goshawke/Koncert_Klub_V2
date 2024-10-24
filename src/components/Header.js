import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <NavLink exact activeClassName="active" to="Koncert_Klub_V2/" className="HomeLink"><h1>KoncertKlub</h1></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="Koncert_Klub_V2/PastShows">
                            Past Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="Koncert_Klub_V2/UpcomingShows">
                            Upcoming Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="Koncert_Klub_V2/Gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="Koncert_Klub_V2/AboutUs">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
};




export default Header;