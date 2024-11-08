import React from 'react';

import image from "../res/images/about_us_2.jpeg";

const AboutUs = () => {
    return (
        <div id="section_about_us">
            <img src={image} alt='Connor and Wes' width="250px" height="300px"></img>
            <p>Hey, we’re Connor and Wes, two wild and crazy dudes who live for live music, loud crowds, and making questionable life choices. We’ve been to more shows than we can count. Whether it’s catching the next big band or dancing like nobody’s watching (though we hope everyone is), we’re here to document our adventures.
                 Oh, and if you see Wes at a show, he’s probably either vibing to the music or making friends in the crowd.
                  Stay tuned for tales of great music, good times, and everything in between!
            </p>

        </div>
    );
};

export default AboutUs;