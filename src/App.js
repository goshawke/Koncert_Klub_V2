import React from 'react';

import { Routes, Route } from "react-router-dom"

import Home from './components/Home';
import PastShows from './components/PastShows';
import UpcomingShows from './components/UpcomingShows';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


// Pics from Petey
import img_petey_1 from "./res/images/petey_11.5.23/IMG_5330.jpeg"
import img_petey_2 from "./res/images/petey_11.5.23/IMG_5332.jpeg"
import img_petey_3 from "./res/images/petey_11.5.23/IMG_5333.jpeg"


// Pics from The Kills
import img_kills_1 from "./res/images/kills_3.1.24/IMG_5869.jpeg"
import img_kills_2 from "./res/images/kills_3.1.24/IMG_7701.jpeg"
import img_kills_3 from "./res/images/kills_3.1.24/IMG_7705.jpeg"
import img_kills_4 from "./res/images/kills_3.1.24/IMG_7708.jpeg"
import img_kills_5 from "./res/images/kills_3.1.24/IMG_7713.jpeg"
import img_kills_6 from "./res/images/kills_3.1.24/IMG_7696.jpeg"

// Pics from McLusky
import img_mclusky_1 from "./res/images/mclusky_3.23.24/IMG_7925.jpeg"
import img_mclusky_2 from "./res/images/mclusky_3.23.24/IMG_7931.jpeg"
import img_mclusky_3 from "./res/images/mclusky_3.23.24/IMG_7932.jpeg"
import img_mclusky_4 from "./res/images/mclusky_3.23.24/IMG_7936.jpeg"

// Pics from Belle & Sebastian
import img_belle_sebastian_1 from "./res/images/belle_sebastian_5.2.24/IMG_6433.jpeg"
import img_belle_sebastian_2 from "./res/images/belle_sebastian_5.2.24/IMG_6434.jpeg"
import img_belle_sebastian_3 from "./res/images/belle_sebastian_5.2.24/IMG_8041.jpeg"
import img_belle_sebastian_4 from "./res/images/belle_sebastian_5.2.24/IMG_8044.jpeg"
import img_belle_sebastian_5 from "./res/images/belle_sebastian_5.2.24/IMG_8045.jpeg"

// Pics from The Decemberists
import img_decemberists_1 from "./res/images/decemberists_5.10.24/IMG_6466.jpeg"

// Pics from Echo & The Bunnymen
import img_echo_1 from "./res/images/echo_5.16.24/IMG_8066.jpeg"
import img_echo_2 from "./res/images/echo_5.16.24/IMG_8070.jpeg"
import img_echo_3 from "./res/images/echo_5.16.24/IMG_8080.jpeg"

// Pics from The Pixies with Modest Mouse
import img_pixies_and_modest_1 from "./res/images/pixies_modest_6.14.24/IMG_6919.JPG"
import img_pixies_and_modest_2 from "./res/images/pixies_modest_6.14.24/IMG_6920.JPG"

// Pics from White Reaper
import img_white_reaper_1 from "./res/images/white_reaper_6.21.24/IMG_8197.jpeg"
import img_white_reaper_2 from "./res/images/white_reaper_6.21.24/IMG_8201.jpeg"
import img_white_reaper_3 from "./res/images/white_reaper_6.21.24/IMG_8209.jpeg"

// Pics from Third Eye Blind
import img_third_eye_1 from "./res/images/third_eye_7.19.24/20240719_223412.jpg"
import img_third_eye_2 from "./res/images/third_eye_7.19.24/20240719_223628.jpg"
import img_third_eye_3 from "./res/images/third_eye_7.19.24/IMG_8380.jpeg"
import img_third_eye_4 from "./res/images/third_eye_7.19.24/IMG_8391.jpeg"
import img_third_eye_5 from "./res/images/third_eye_7.19.24/IMG_8393.jpeg"
import img_third_eye_6 from "./res/images/third_eye_7.19.24/IMG_8396.jpeg"

// Pics from O.A.R. with Fitz and the Tantrums
import img_oar_and_fitz_1 from "./res/images/oar_fitz_7.17.24/IMG_5480.JPG"
import img_oar_and_fitz_2 from "./res/images/oar_fitz_7.17.24/IMG_7137.JPG"

// Pics from Glass Animals
import img_glass_animals_1 from "./res/images/glass_animals_8.17.24/IMG_7245.JPG"
import img_glass_animals_2 from "./res/images/glass_animals_8.17.24/IMG_7246.JPG"
import img_glass_animals_3 from "./res/images/glass_animals_8.17.24/IMG_7248.JPG"
import img_glass_animals_4 from "./res/images/glass_animals_8.17.24/IMG_8533.jpeg"
import img_glass_animals_5 from "./res/images/glass_animals_8.17.24/IMG_8534.jpeg"
import img_glass_animals_6 from "./res/images/glass_animals_8.17.24/IMG_8541.jpeg"

// Pics from Why?
import img_why_1 from "./res/images/why_8.19.24/IMG_8554.jpeg"
import img_why_2 from "./res/images/why_8.19.24/IMG_8558.jpeg"
import img_why_3 from "./res/images/why_8.19.24/IMG_8559.jpeg"

// Pics from Jack White 
import img_jack_white_1 from "./res/images/jack_white_8.27.24/IMG_8641.jpeg"
import img_jack_white_2 from "./res/images/jack_white_8.27.24/IMG_8643.jpeg"
import img_jack_white_3 from "./res/images/jack_white_8.27.24/IMG_8657.jpeg"
import img_jack_white_4 from "./res/images/jack_white_8.27.24/IMG_8659.jpeg"
import img_jack_white_5 from "./res/images/jack_white_8.27.24/IMG_8670.jpeg"

// Pics from Mitski and Alvvays
import img_mitski_alvvays_1 from "./res/images/mitski_and_alvvays_8.31.24/IMG_8705.jpeg"
import img_mitski_alvvays_2 from "./res/images/mitski_and_alvvays_8.31.24/IMG_8708.jpeg"
import img_mitski_alvvays_3 from "./res/images/mitski_and_alvvays_8.31.24/IMG_8709.jpeg"
import img_mitski_alvvays_4 from "./res/images/mitski_and_alvvays_8.31.24/IMG_8719.jpeg"

// Pics from Charlie Bliss
import img_charlie_bliss_1 from "./res/images/charlie_bliss_9.5.24/IMG_8737.jpeg"
import img_charlie_bliss_2 from "./res/images/charlie_bliss_9.5.24/IMG_8740.jpeg"
import img_charlie_bliss_3 from "./res/images/charlie_bliss_9.5.24/IMG_8743.jpeg"
import img_charlie_bliss_4 from "./res/images/charlie_bliss_9.5.24/IMG_8756.jpeg"
import img_charlie_bliss_5 from "./res/images/charlie_bliss_9.5.24/IMG_8759.jpeg"
import img_charlie_bliss_6 from "./res/images/charlie_bliss_9.5.24/IMG_8761.jpeg"
import img_charlie_bliss_7 from "./res/images/charlie_bliss_9.5.24/IMG_8762.jpeg"

// Pics from Built to Spill
import img_BTS_1 from "./res/images/built_to_spill_9.8.24/IMG_8779.jpeg"
import img_BTS_2 from "./res/images/built_to_spill_9.8.24/IMG_8780.jpeg"
import img_BTS_3 from "./res/images/built_to_spill_9.8.24/IMG_8781.jpeg"
import img_BTS_4 from "./res/images/built_to_spill_9.8.24/IMG_8785.jpeg"
import img_BTS_5 from "./res/images/built_to_spill_9.8.24/IMG_8787.jpeg"
import img_BTS_6 from "./res/images/built_to_spill_9.8.24/IMG_8799.jpeg"

// Pics from FIDLAR
import img_fidlar_1 from "./res/images/fidlar_10.14.24/IMG_8913.jpeg"
import img_fidlar_2 from "./res/images/fidlar_10.14.24/IMG_8915.jpeg"
import img_fidlar_3 from "./res/images/fidlar_10.14.24/IMG_8916.jpeg"
import img_fidlar_4 from "./res/images/fidlar_10.14.24/IMG_8920.jpeg"
import img_fidlar_5 from "./res/images/fidlar_10.14.24/IMG_8922.jpeg"
import img_fidlar_6 from "./res/images/fidlar_10.14.24/IMG_8925.jpeg"
import img_fidlar_7 from "./res/images/fidlar_10.14.24/IMG_8926.jpeg"

// Pics from Vampire Weekend
import img_vampire_weekend_1 from "./res/images/vampire_weekend_10.1.24/46B2FDD6-B3A2-4B4E-B102-988C1C2CC745.jpg"
import img_vampire_weekend_2 from "./res/images/vampire_weekend_10.1.24/IMG_7589.JPG"

const images_petey = [img_petey_1, img_petey_2, img_petey_3]
const images_kills = [img_kills_1, img_kills_2, img_kills_3, img_kills_4, img_kills_5,  img_kills_6]
const images_mclusky = [img_mclusky_1, img_mclusky_2, img_mclusky_3, img_mclusky_4]
const images_belle_sebastian = [img_belle_sebastian_1, img_belle_sebastian_2, img_belle_sebastian_3, img_belle_sebastian_4, img_belle_sebastian_5]
const images_decemberists = [img_decemberists_1]
const images_echo = [img_echo_1, img_echo_2, img_echo_3]
const images_pixies_and_modest = [img_pixies_and_modest_1, img_pixies_and_modest_2]

const images_white_reaper = [img_white_reaper_1, img_white_reaper_2, img_white_reaper_3 ]
const images_third_eye = [img_third_eye_1, img_third_eye_2, img_third_eye_3, img_third_eye_4, img_third_eye_5, img_third_eye_6]
const images_oar_and_fitz = [img_oar_and_fitz_1, img_oar_and_fitz_2]
const images_glass_animals = [img_glass_animals_1 ,img_glass_animals_2, img_glass_animals_3, img_glass_animals_4 ,img_glass_animals_5, img_glass_animals_6]
const images_why = [img_why_1, img_why_2, img_why_3]
const images_jack_white = [img_jack_white_1, img_jack_white_2, img_jack_white_3, img_jack_white_4, img_jack_white_5]
const images_mitski_alvvays = [img_mitski_alvvays_1, img_mitski_alvvays_2, img_mitski_alvvays_3, img_mitski_alvvays_4]
const images_charlie_bliss = [img_charlie_bliss_1, img_charlie_bliss_2, img_charlie_bliss_3, img_charlie_bliss_4, img_charlie_bliss_5, img_charlie_bliss_6, img_charlie_bliss_7]
const images_BTS = [img_BTS_1, img_BTS_2, img_BTS_3, img_BTS_4, img_BTS_5, img_BTS_6]
const images_fidlar = [img_fidlar_1, img_fidlar_2, img_fidlar_3, img_fidlar_4, img_fidlar_5, img_fidlar_6, img_fidlar_7]
const images_vampire_weekend = [img_vampire_weekend_1, img_vampire_weekend_2]


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="PastShows" element={ <PastShows/> } />
          <Route path="UpcomingShows" element={ <UpcomingShows/> } />
          <Route path="AboutUs" element={ <AboutUs/> } />

          <Route path="Gallery/petey" element={ <Gallery images={ images_petey } /> } />
          <Route path="Gallery/kills" element={ <Gallery images={ images_kills } /> } />
          <Route path="Gallery/mclusky" element={ <Gallery images={ images_mclusky } /> } />
          <Route path="Gallery/belle_and_sebastian" element={ <Gallery images={ images_belle_sebastian } /> } />
          <Route path="Gallery/decemberists" element={ <Gallery images={ images_decemberists } /> } />
          <Route path="Gallery/echo" element={ <Gallery images={ images_echo } /> } />
          <Route path="Gallery/pixies_and_modest" element={ <Gallery images={ images_pixies_and_modest } /> } />
          <Route path="Gallery/white_reaper" element={ <Gallery images={ images_white_reaper } /> } />
          <Route path="Gallery/third_eye" element={ <Gallery images={ images_third_eye } /> } />
          <Route path="Gallery/oar_and_fitz" element={ <Gallery images={ images_oar_and_fitz } /> } />
          <Route path="Gallery/glass_animals" element={ <Gallery images={ images_glass_animals } /> } />
          <Route path="Gallery/why" element={ <Gallery images={ images_why } /> } />
          <Route path="Gallery/jack_white" element={ <Gallery images={ images_jack_white } /> } />
          <Route path="Gallery/mitski_and_alvvays" element={ <Gallery images={ images_mitski_alvvays } /> } />
          <Route path="Gallery/charlie_bliss" element={ <Gallery images={ images_charlie_bliss } /> } />
          <Route path="Gallery/bts" element={ <Gallery images={ images_BTS } /> } />
          <Route path="Gallery/fidlar" element={ <Gallery images={ images_fidlar } /> } />
          <Route path="Gallery/vampire_weekend" element={ <Gallery images={ images_vampire_weekend } /> } />

        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
