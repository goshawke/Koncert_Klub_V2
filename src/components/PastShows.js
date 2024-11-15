import React from 'react';
import { Link } from 'react-router-dom';

const PastShows = () => {
    return (
        <div id="past_shows">
            <h2>Past Shows</h2>
            <table class="table">
                <tr class="table-head">
                    <th>Band</th>
                    <th class="venue">Venue</th>
                    <th class="city">City</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td><Link to="/Gallery/petey">Petey</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/05/23</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/kills">The Kills</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>03/01/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/mclusky">Mclusky</Link></td>
                    <td class="venue">Black Cat</td>
                    <td class="city">Washington D.C.</td>
                    <td>03/23/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/belle_and_sebastian">Belle & Sebastian</Link></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>05/02/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/decemberists">The Decemberists</Link></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>05/10/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/echo">Echo & The Bunnymen</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>05/16/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/pixies_and_modest">The Pixies w/ Modest Mouse</Link></td>
                    <td class="venue">Merriweather Post</td>
                    <td class="city">Columbia, MD</td>
                    <td>06/14/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/white_reaper">White Reaper</Link></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>06/21/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/third_eye">Third Eye Blind w/ Yellowcard</Link></td>
                    <td class="venue">Merriweather Post</td>
                    <td class="city">Columbia, MD</td>
                    <td>07/19/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/oar_and_fitz">O.A.R. w/ Fitz & the Tantrums</Link></td>
                    <td class="venue">Merriweather Post</td>
                    <td class="city">Columbia, MD</td>
                    <td>07/27/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/glass_animals">Glass Animals</Link></td>
                    <td class="venue">Merriweather Post</td>
                    <td class="city">Columbia, MD</td>
                    <td>08/17/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/why">Why?</Link></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>08/19/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/jack_white">Jack White</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>08/27/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/mitski_and_alvvays">Mitski w/ Alvvays</Link></td>
                    <td class="venue">Merriweather Post</td>
                    <td class="city">Columbia, MD</td>
                    <td>08/31/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/charlie_bliss">Charlie Bliss</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>09/05/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/bts">Built to Spill</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>09/08/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/vampire_weekend">Vampire Weekend w/ Cults</Link></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>10/01/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/fidlar">FIDLAR</Link></td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>10/14/24</td>
                </tr>
                <tr>
                    <td><Link to="/Gallery/ratboys">The Ratboys</Link></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/12/24</td>
                </tr>
            </table>

        </div>
    );
};

export default PastShows;