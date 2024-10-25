import React from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <NavLink exact activeClassName="active" to="/" className="HomeLink"><h1>KoncertKlub</h1></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/PastShows">
                            Past Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/UpcomingShows">
                            Upcoming Shows
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/AboutUs">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                
            </nav>
        </header>
    )
};




export default Header;