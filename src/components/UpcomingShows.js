import React from 'react';

const UpcomingShows = () => {
    return (
        <div id="upcoming_shows">
            <h2>Upcoming Shows</h2>
            <table className="table">
                <tbody>
                    <tr className="table-head">
                        <th>Band</th>
                        <th className="venue">Venue</th>
                        <th className="city">City</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td><a href="https://theanthemdc.com/event/yung-gravy-presents-the-grits-gravy-tour/" target='_blank' rel="noreferrer">Yung Gravy</a></td>
                        <td className="venue">The Anthem</td>
                        <td className="city">Washington D.C.</td>
                        <td>11/22/24</td>
                    </tr>
                    <tr>
                        <td><a href="https://theanthemdc.com/event/father-john-misty/" target='_blank' rel="noreferrer">Father John Misty w/ Destroyer</a></td>
                        <td className="venue">The Anthem</td>
                        <td className="city">Washington D.C.</td>
                        <td>03/01/25</td>
                    </tr>
                    <tr>
                        <td><a href="https://theatlantis.com/e/clap-your-hands-say-yeah-performing-the-debut-album/" target='_blank' rel="noreferrer">Clap Your Hands Say Yeah</a></td>
                        <td className="venue">The Atlantis</td>
                        <td className="city">Washington D.C.</td>
                        <td>04/11/25</td>
                    </tr>
                    <tr>
                        <td><a href="https://theanthemdc.com/event/snow-patrol-8/" target='_blank' rel="noreferrer">Snow Patrol</a></td>
                        <td className="venue">The Anthem</td>
                        <td className="city">Washington D.C.</td>
                        <td>04/11/25</td>
                    </tr>
                </tbody>
            </table>   
        </div>
    );
};

export default UpcomingShows;