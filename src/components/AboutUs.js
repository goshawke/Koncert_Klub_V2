import React from 'react';

import image from "../res/images/about_us.JPG";

const AboutUs = () => {
    return (
        <div id="section_about_us">
            <h2>About Us</h2>
            <img src={image} alt='Connor and Wes' width="300" height="200"></img>
            <p>Hey, we’re Connor and Wes, two wild and crazy dudes who live for live music, loud crowds, and making questionable life choices. We’ve been to more shows than we can count. Whether it’s catching the next big band or dancing like nobody’s watching (though we hope everyone is), we’re here to document our adventures.
                 Oh, and if you see Wes at a show, he’s probably either vibing to the music or trying to chat up someone in the crowd—ladies, you’ve been warned.
                  Stay tuned for tales of great music, good times, and everything in between!
            </p>

        </div>
    );
};

export default AboutUs;