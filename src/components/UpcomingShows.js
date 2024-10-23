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
                    <td>The Rayboys</td>
                    <td class="venue">9:30 Club</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/12/24</td>
                </tr>
                <tr>
                    <td>Yung Gravy</td>
                    <td class="venue">The Anthem</td>
                    <td class="city">Washington D.C.</td>
                    <td>11/22/24</td>
                </tr>
            </table>   
        </div>
    );
};

export default UpcomingShows;