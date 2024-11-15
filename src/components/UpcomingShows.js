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
                    <td><a href="https://theatlantis.com/e/ratboys-palehound/" target='_blank' rel="noreferrer">The Ratboys</a></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/12/24</td>
                </tr>
                <tr>
                    <td><a href="https://impconcerts.com/event/vundabar/" target='_blank' rel="noreferrer">Vundabar</a></td>
                    <td class="venue">The Atlantis</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/18/24</td>
                </tr>
                <tr>
                    <td><a href="https://theanthemdc.com/event/yung-gravy-presents-the-grits-gravy-tour/" target='_blank' rel="noreferrer">Yung Gravy</a></td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/22/24</td>
                </tr>
            </table>   
        </div>
    );
};

export default UpcomingShows;