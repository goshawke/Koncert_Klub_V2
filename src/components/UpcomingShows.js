import React from 'react';

const UpcomingShows = () => {
    return (
        <div id="upcoming_shows">
            <h2>Upcoming Shows</h2>
            <table class="table">
                <tr class="table-head">
                    <th>Band</th>
                    <th class="venue">Venue</th>
                    <th class="city">City</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td><a href="https://theanthemdc.com/event/yung-gravy-presents-the-grits-gravy-tour/" target='_blank' rel="noreferrer">Yung Gravy</a></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/22/24</td>
                </tr>
                <tr>
                    <td><a href="https://theanthemdc.com/event/father-john-misty/" target='_blank' rel="noreferrer">Father John Misty w/ Destroyer</a></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>03/01/25</td>
                </tr>
                <tr>
                    <td><a href="https://theatlantis.com/e/clap-your-hands-say-yeah-performing-the-debut-album/" target='_blank' rel="noreferrer">Clap Your Hands Say Yeah</a></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>04/11/25</td>
                </tr>
                <tr>
                    <td><a href="https://theanthemdc.com/event/snow-patrol-8/" target='_blank' rel="noreferrer">Snow Patrol</a></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>04/11/25</td>
                </tr>
            </table>   
        </div>
    );
};

export default UpcomingShows;