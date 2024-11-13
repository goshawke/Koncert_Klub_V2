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
import img_petey_1 from "./res/media/petey_11.5.23/IMG_5330.jpeg"
import img_petey_2 from "./res/media/petey_11.5.23/IMG_5332.jpeg"
import img_petey_3 from "./res/media/petey_11.5.23/IMG_5333.jpeg"

import mp4_petey_1 from "./res/media/petey_11.5.23/IMG_5335.mp4"
import mp4_petey_2 from "./res/media/petey_11.5.23/IMG_5336.mp4"

// Pics from The Kills
import img_kills_1 from "./res/media/kills_3.1.24/IMG_5869.jpeg"
import img_kills_2 from "./res/media/kills_3.1.24/IMG_7701.jpeg"
import img_kills_3 from "./res/media/kills_3.1.24/IMG_7705.jpeg"
import img_kills_4 from "./res/media/kills_3.1.24/IMG_7708.jpeg"
import img_kills_5 from "./res/media/kills_3.1.24/IMG_7713.jpeg"
import img_kills_6 from "./res/media/kills_3.1.24/IMG_7696.jpeg"

import mp4_kills_1 from "./res/media/kills_3.1.24/IMG_5862.mp4"
import mp4_kills_2 from "./res/media/kills_3.1.24/IMG_5867.mp4"
import mp4_kills_3 from "./res/media/kills_3.1.24/IMG_5875.mp4"

// Pics from McLusky
import img_mclusky_1 from "./res/media/mclusky_3.23.24/IMG_7925.jpeg"
import img_mclusky_2 from "./res/media/mclusky_3.23.24/IMG_7931.jpeg"
import img_mclusky_3 from "./res/media/mclusky_3.23.24/IMG_7932.jpeg"
import img_mclusky_4 from "./res/media/mclusky_3.23.24/IMG_7936.jpeg"

// import mp4_mclusky_1 from "./res/media/mclusky_3.23.24/IMG_6063.mp4"
// import mp4_mclusky_2 from "./res/media/mclusky_3.23.24/IMG_6068.mp4"

// Pics from Belle & Sebastian
import img_belle_sebastian_1 from "./res/media/belle_sebastian_5.2.24/IMG_6433.jpeg"
import img_belle_sebastian_2 from "./res/media/belle_sebastian_5.2.24/IMG_6434.jpeg"
import img_belle_sebastian_3 from "./res/media/belle_sebastian_5.2.24/IMG_8041.jpeg"
import img_belle_sebastian_4 from "./res/media/belle_sebastian_5.2.24/IMG_8044.jpeg"
import img_belle_sebastian_5 from "./res/media/belle_sebastian_5.2.24/IMG_8045.jpeg"

// import mp4_belle_sebastian_1 from "./res/media/belle_sebastian_5.2.24/IMG_6436.mp4"
// import mp4_belle_sebastian_2 from "./res/media/belle_sebastian_5.2.24/IMG_6438.mp4"
// import mp4_belle_sebastian_3 from "./res/media/belle_sebastian_5.2.24/IMG_6439.mp4"
// import mp4_belle_sebastian_4 from "./res/media/belle_sebastian_5.2.24/IMG_6441.mp4"
// import mp4_belle_sebastian_5 from "./res/media/belle_sebastian_5.2.24/IMG_6442.mp4"

// Pics from The Decemberists
import img_decemberists_1 from "./res/media/decemberists_5.10.24/IMG_6466.jpeg"
import img_decemberists_2 from "./res/media/decemberists_5.10.24/IMG_8058.jpeg"

// import mp4_decemberists_1 from "./res/media/decemberists_5.10.24/IMG_6464.mp4"
// import mp4_decemberists_2 from "./res/media/decemberists_5.10.24/IMG_6468.mp4"
// import mp4_decemberists_3 from "./res/media/decemberists_5.10.24/IMG_6469.mp4"
// import mp4_decemberists_4 from "./res/media/decemberists_5.10.24/IMG_8059.mp4"

// Pics from Echo & The Bunnymen
import img_echo_1 from "./res/media/echo_5.16.24/IMG_8066.jpeg"
import img_echo_2 from "./res/media/echo_5.16.24/IMG_8070.jpeg"
import img_echo_3 from "./res/media/echo_5.16.24/IMG_8080.jpeg"

// import mp4_echo_1 from "./res/media/echo_5.16.24/IMG_8075.mp4"
// import mp4_echo_2 from "./res/media/echo_5.16.24/IMG_8076.mp4"

// Pics from The Pixies with Modest Mouse
import img_pixies_and_modest_1 from "./res/media/pixies_modest_6.14.24/IMG_6919.JPG"
import img_pixies_and_modest_2 from "./res/media/pixies_modest_6.14.24/IMG_6920.JPG"

// import mp4_pixies_and_modest_1 from "./res/media/pixies_modest_6.14.24/IMG_6915.mp4"
// import mp4_pixies_and_modest_2 from "./res/media/pixies_modest_6.14.24/IMG_6916.mp4"
// import mp4_pixies_and_modest_3 from "./res/media/pixies_modest_6.14.24/IMG_6917.mp4"
// import mp4_pixies_and_modest_4 from "./res/media/pixies_modest_6.14.24/IMG_6921.mp4"

// Pics from White Reaper
import img_white_reaper_1 from "./res/media/white_reaper_6.21.24/IMG_8197.jpeg"
import img_white_reaper_2 from "./res/media/white_reaper_6.21.24/IMG_8201.jpeg"
import img_white_reaper_3 from "./res/media/white_reaper_6.21.24/IMG_8209.jpeg"

// import mp4_white_reaper_1 from "./res/media/white_reaper_6.21.24/IMG_6931.mp4"
// import mp4_white_reaper_2 from "./res/media/white_reaper_6.21.24/IMG_8202.mp4"
// import mp4_white_reaper_3 from "./res/media/white_reaper_6.21.24/IMG_8204.mp4"
// import mp4_white_reaper_4 from "./res/media/white_reaper_6.21.24/IMG_8206.mp4"

// Pics from Third Eye Blind
import img_third_eye_1 from "./res/media/third_eye_7.19.24/20240719_223412.jpg"
import img_third_eye_2 from "./res/media/third_eye_7.19.24/20240719_223628.jpg"
import img_third_eye_3 from "./res/media/third_eye_7.19.24/IMG_8380.jpeg"
import img_third_eye_4 from "./res/media/third_eye_7.19.24/IMG_8391.jpeg"
import img_third_eye_5 from "./res/media/third_eye_7.19.24/IMG_8393.jpeg"
import img_third_eye_6 from "./res/media/third_eye_7.19.24/IMG_8396.jpeg"

// import mp4_third_eye_1 from "./res/media/third_eye_7.19.24/IMG_7095.mp4"
// import mp4_third_eye_2 from "./res/media/third_eye_7.19.24/IMG_7097.mp4"
// import mp4_third_eye_3 from "./res/media/third_eye_7.19.24/IMG_7099.mp4"

// Pics from O.A.R. with Fitz and the Tantrums
import img_oar_and_fitz_1 from "./res/media/oar_fitz_7.17.24/IMG_5480.JPG"
import img_oar_and_fitz_2 from "./res/media/oar_fitz_7.17.24/IMG_7137.JPG"

// import mp4_oar_and_fitz_1 from "./res/media/oar_fitz_7.17.24/IMG_7139.mp4"
// import mp4_oar_and_fitz_2 from "./res/media/oar_fitz_7.17.24/IMG_8436.mp4"

// Pics from Glass Animals
import img_glass_animals_1 from "./res/media/glass_animals_8.17.24/IMG_7245.JPG"
import img_glass_animals_2 from "./res/media/glass_animals_8.17.24/IMG_7246.JPG"
import img_glass_animals_3 from "./res/media/glass_animals_8.17.24/IMG_7248.JPG"
import img_glass_animals_4 from "./res/media/glass_animals_8.17.24/IMG_8533.jpeg"
import img_glass_animals_5 from "./res/media/glass_animals_8.17.24/IMG_8534.jpeg"
import img_glass_animals_6 from "./res/media/glass_animals_8.17.24/IMG_8541.jpeg"

// import mp4_glass_animals_1 from "./res/media/glass_animals_8.17.24/IMG_7249.mp4"
// import mp4_glass_animals_2 from "./res/media/glass_animals_8.17.24/IMG_7250.mp4"
// import mp4_glass_animals_3 from "./res/media/glass_animals_8.17.24/IMG_8536.mp4"
// import mp4_glass_animals_4 from "./res/media/glass_animals_8.17.24/IMG_8544.mp4"

// Pics from Why?
import img_why_1 from "./res/media/why_8.19.24/IMG_8554.jpeg"
import img_why_2 from "./res/media/why_8.19.24/IMG_8558.jpeg"
import img_why_3 from "./res/media/why_8.19.24/IMG_8559.jpeg"

// import mp4_why_1 from "./res/media/why_8.19.24/IMG_8555.mp4"
// import mp4_why_2 from "./res/media/why_8.19.24/IMG_8556.mp4"
// import mp4_why_3 from "./res/media/why_8.19.24/IMG_8560.mp4"

// Pics from Jack White 
import img_jack_white_1 from "./res/media/jack_white_8.27.24/IMG_8641.jpeg"
import img_jack_white_2 from "./res/media/jack_white_8.27.24/IMG_8643.jpeg"
import img_jack_white_3 from "./res/media/jack_white_8.27.24/IMG_8657.jpeg"
import img_jack_white_4 from "./res/media/jack_white_8.27.24/IMG_8659.jpeg"
import img_jack_white_5 from "./res/media/jack_white_8.27.24/IMG_8670.jpeg"

// import mp4_jack_white_1 from "./res/media/jack_white_8.27.24/IMG_7295.mp4"
// import mp4_jack_white_2 from "./res/media/jack_white_8.27.24/IMG_7296.mp4"
// import mp4_jack_white_3 from "./res/media/jack_white_8.27.24/IMG_7297.mp4"
// import mp4_jack_white_4 from "./res/media/jack_white_8.27.24/IMG_7298.mp4"

// Pics from Mitski and Alvvays
import img_mitski_alvvays_1 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8705.jpeg"
import img_mitski_alvvays_2 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8708.jpeg"
import img_mitski_alvvays_3 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8709.jpeg"
import img_mitski_alvvays_4 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8719.jpeg"

// import mp4_mitski_alvvays_1 from "./res/media/mitski_and_alvvays_8.31.24/IMG_7325.mp4"
// import mp4_mitski_alvvays_2 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8712.mp4"
// import mp4_mitski_alvvays_3 from "./res/media/mitski_and_alvvays_8.31.24/IMG_8714.mp4"

// Pics from Charlie Bliss
import img_charlie_bliss_1 from "./res/media/charlie_bliss_9.5.24/IMG_8737.jpeg"
import img_charlie_bliss_2 from "./res/media/charlie_bliss_9.5.24/IMG_8740.jpeg"
import img_charlie_bliss_3 from "./res/media/charlie_bliss_9.5.24/IMG_8743.jpeg"
import img_charlie_bliss_4 from "./res/media/charlie_bliss_9.5.24/IMG_8756.jpeg"
import img_charlie_bliss_5 from "./res/media/charlie_bliss_9.5.24/IMG_8759.jpeg"
import img_charlie_bliss_6 from "./res/media/charlie_bliss_9.5.24/IMG_8761.jpeg"
import img_charlie_bliss_7 from "./res/media/charlie_bliss_9.5.24/IMG_8762.jpeg"

// import mp4_charlie_bliss_1 from "./res/media/charlie_bliss_9.5.24/IMG_8749.mp4"
// import mp4_charlie_bliss_2 from "./res/media/charlie_bliss_9.5.24/IMG_8765.mp4"

// Pics from Built to Spill
import img_BTS_1 from "./res/media/built_to_spill_9.8.24/IMG_8779.jpeg"
import img_BTS_2 from "./res/media/built_to_spill_9.8.24/IMG_8780.jpeg"
import img_BTS_3 from "./res/media/built_to_spill_9.8.24/IMG_8781.jpeg"
import img_BTS_4 from "./res/media/built_to_spill_9.8.24/IMG_8785.jpeg"
import img_BTS_5 from "./res/media/built_to_spill_9.8.24/IMG_8787.jpeg"
import img_BTS_6 from "./res/media/built_to_spill_9.8.24/IMG_8799.jpeg"

// import mp4_BTS_1 from "./res/media/built_to_spill_9.8.24/IMG_8797.mp4"
// import mp4_BTS_2 from "./res/media/built_to_spill_9.8.24/IMG_8789.mp4"
// import mp4_BTS_3 from "./res/media/built_to_spill_9.8.24/IMG_8791.mp4"

// Pics from FIDLAR
import img_fidlar_1 from "./res/media/fidlar_10.14.24/IMG_8913.jpeg"
import img_fidlar_2 from "./res/media/fidlar_10.14.24/IMG_8915.jpeg"
import img_fidlar_3 from "./res/media/fidlar_10.14.24/IMG_8916.jpeg"
import img_fidlar_4 from "./res/media/fidlar_10.14.24/IMG_8920.jpeg"
import img_fidlar_5 from "./res/media/fidlar_10.14.24/IMG_8922.jpeg"
import img_fidlar_6 from "./res/media/fidlar_10.14.24/IMG_8925.jpeg"
import img_fidlar_7 from "./res/media/fidlar_10.14.24/IMG_8926.jpeg"

// import mp4_fidlar_1 from "./res/media/fidlar_10.14.24/IMG_8924.mp4"
// import mp4_fidlar_2 from "./res/media/fidlar_10.14.24/IMG_8917.mp4"

// Pics from Vampire Weekend
import img_vampire_weekend_1 from "./res/media/vampire_weekend_10.1.24/46B2FDD6-B3A2-4B4E-B102-988C1C2CC745.jpg"
import img_vampire_weekend_2 from "./res/media/vampire_weekend_10.1.24/IMG_7589.JPG"

// import mp4_vampire_weekend_1 from "./res/media/vampire_weekend_10.1.24/IMG_7590.mp4"
// import mp4_vampire_weekend_2 from "./res/media/vampire_weekend_10.1.24/IMG_7591.mp4"
// import mp4_vampire_weekend_3 from "./res/media/vampire_weekend_10.1.24/IMG_7593.mp4"
// import mp4_vampire_weekend_4 from "./res/media/vampire_weekend_10.1.24/IMG_7594.mp4"
// import mp4_vampire_weekend_5 from "./res/media/vampire_weekend_10.1.24/IMG_7595.mp4"
// import mp4_vampire_weekend_6 from "./res/media/vampire_weekend_10.1.24/IMG_7596.mp4"
// import mp4_vampire_weekend_7 from "./res/media/vampire_weekend_10.1.24/IMG_7599.mp4"



const media_petey = [img_petey_1, mp4_petey_1, img_petey_2, mp4_petey_2, img_petey_3]
const media_kills = [img_kills_1, mp4_kills_1, img_kills_2, mp4_kills_2, img_kills_3, mp4_kills_3, img_kills_4, img_kills_5,  img_kills_6]
const media_mclusky = [img_mclusky_1, mp4_mclusky_1, img_mclusky_2, mp4_mclusky_2, img_mclusky_3, img_mclusky_4]
const media_belle_sebastian = [img_belle_sebastian_1, mp4_belle_sebastian_1, img_belle_sebastian_2, mp4_belle_sebastian_2, img_belle_sebastian_3, mp4_belle_sebastian_3, img_belle_sebastian_4, mp4_belle_sebastian_4, img_belle_sebastian_5, mp4_belle_sebastian_5]
const media_decemberists = [img_decemberists_1, mp4_decemberists_1, img_decemberists_2, mp4_decemberists_2,  mp4_decemberists_3, mp4_decemberists_4]
const media_echo = [img_echo_1,mp4_echo_1, img_echo_2, mp4_echo_2, img_echo_3]
const media_pixies_and_modest = [img_pixies_and_modest_1, mp4_pixies_and_modest_1, img_pixies_and_modest_2, mp4_pixies_and_modest_2, mp4_pixies_and_modest_3, mp4_pixies_and_modest_4]
const media_white_reaper = [img_white_reaper_1, mp4_white_reaper_1, img_white_reaper_2, mp4_white_reaper_2, img_white_reaper_3, mp4_white_reaper_3, mp4_white_reaper_4]
const media_third_eye = [img_third_eye_1, mp4_third_eye_1, img_third_eye_2, mp4_third_eye_2, img_third_eye_3, mp4_third_eye_3, img_third_eye_4, img_third_eye_5, img_third_eye_6]
const media_oar_and_fitz = [img_oar_and_fitz_1, mp4_oar_and_fitz_1, img_oar_and_fitz_2, mp4_oar_and_fitz_2]
const media_glass_animals = [img_glass_animals_1 , mp4_glass_animals_1, img_glass_animals_2, mp4_glass_animals_2, img_glass_animals_3, mp4_glass_animals_3, img_glass_animals_4 , mp4_glass_animals_4, img_glass_animals_5, img_glass_animals_6]
const media_why = [img_why_1, mp4_why_1, img_why_2, mp4_why_2, img_why_3, mp4_why_3]
const media_jack_white = [img_jack_white_1, mp4_jack_white_1, img_jack_white_2, mp4_jack_white_2, img_jack_white_3, mp4_jack_white_3, img_jack_white_4, mp4_jack_white_4, img_jack_white_5]
const media_mitski_alvvays = [img_mitski_alvvays_1, mp4_mitski_alvvays_1, img_mitski_alvvays_2, mp4_mitski_alvvays_2, img_mitski_alvvays_3, mp4_mitski_alvvays_3, img_mitski_alvvays_4]
const media_charlie_bliss = [img_charlie_bliss_1, mp4_charlie_bliss_1, img_charlie_bliss_2, mp4_charlie_bliss_2, img_charlie_bliss_3, img_charlie_bliss_4, img_charlie_bliss_5, img_charlie_bliss_6, img_charlie_bliss_7]
const media_BTS = [img_BTS_1, mp4_BTS_1, img_BTS_2, mp4_BTS_2, img_BTS_3, mp4_BTS_3, img_BTS_4, img_BTS_5, img_BTS_6]
const media_fidlar = [img_fidlar_1, mp4_fidlar_1, img_fidlar_2, mp4_fidlar_2, img_fidlar_3, img_fidlar_4, img_fidlar_5, img_fidlar_6, img_fidlar_7]
const media_vampire_weekend = [img_vampire_weekend_1, mp4_vampire_weekend_1, img_vampire_weekend_2, mp4_vampire_weekend_2, mp4_vampire_weekend_3, mp4_vampire_weekend_4, mp4_vampire_weekend_5, mp4_vampire_weekend_6, mp4_vampire_weekend_7]



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
        
          <Route path="Gallery/petey" element={ <Gallery media={ media_petey } /> } />
          <Route path="Gallery/kills" element={ <Gallery media={ media_kills } /> } />
          <Route path="Gallery/mclusky" element={ <Gallery media={ media_mclusky } /> } />
          <Route path="Gallery/belle_and_sebastian" element={ <Gallery media={ media_belle_sebastian } /> } />
          <Route path="Gallery/decemberists" element={ <Gallery media={ media_decemberists } /> } />
          <Route path="Gallery/echo" element={ <Gallery media={ media_echo } /> } />
          <Route path="Gallery/pixies_and_modest" element={ <Gallery media={ media_pixies_and_modest } /> } />
          <Route path="Gallery/white_reaper" element={ <Gallery media={ media_white_reaper } /> } /> 
          <Route path="Gallery/third_eye" element={ <Gallery media={ media_third_eye } /> } />
          <Route path="Gallery/oar_and_fitz" element={ <Gallery media={ media_oar_and_fitz } /> } />
          <Route path="Gallery/glass_animals" element={ <Gallery media={ media_glass_animals } /> } />
          <Route path="Gallery/why" element={ <Gallery media={ media_why } /> } />
          <Route path="Gallery/jack_white" element={ <Gallery media={ media_jack_white } /> } />
          <Route path="Gallery/mitski_and_alvvays" element={ <Gallery media={ media_mitski_alvvays } /> } />
          <Route path="Gallery/charlie_bliss" element={ <Gallery media={ media_charlie_bliss } /> } /> 
          <Route path="Gallery/bts" element={ <Gallery media={ media_BTS } /> } />
          <Route path="Gallery/fidlar" element={ <Gallery media={ media_fidlar } /> } />
          <Route path="Gallery/vampire_weekend" element={ <Gallery media={ media_vampire_weekend } /> } />

        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;

