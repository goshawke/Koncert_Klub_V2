import React from 'react';

import { Routes, Route } from "react-router-dom"

import Home from './components/Home';
import PastShows from './components/PastShows';
import UpcomingShows from './components/UpcomingShows';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


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
        
          <Route path="Gallery/petey" element={ <Gallery prefix={ 'petey_11.5.23'} /> } />
          <Route path="Gallery/kills" element={ <Gallery prefix={ 'kills_3.1.24' } /> } />
          <Route path="Gallery/mclusky" element={ <Gallery prefix={ 'mclusky_3.23.24' } /> } />
          <Route path="Gallery/belle_and_sebastian" element={ <Gallery prefix={ 'belle_sebastian_5.2.24' } /> } />
          <Route path="Gallery/decemberists" element={ <Gallery prefix={ 'decemberists_5.10.24' } /> } />
          <Route path="Gallery/echo" element={ <Gallery prefix={ 'echo_5.16.24' } /> } />
          <Route path="Gallery/pixies_and_modest" element={ <Gallery prefix={ 'pixies_modest_6.14.24' } /> } />
          <Route path="Gallery/white_reaper" element={ <Gallery prefix={ 'white_reaper_6.21.24' } /> } /> 
          <Route path="Gallery/third_eye" element={ <Gallery prefix={ 'third_eye_7.19.24' } /> } />
          <Route path="Gallery/oar_and_fitz" element={ <Gallery prefix={ 'oar_fitz_7.17.24' } /> } />
          <Route path="Gallery/glass_animals" element={ <Gallery prefix={ 'glass_animals_8.17.24' } /> } />
          <Route path="Gallery/why" element={ <Gallery prefix={ 'why_8.19.24' } /> } />
          <Route path="Gallery/jack_white" element={ <Gallery prefix={ 'jack_white_8.27.24' } /> } />
          <Route path="Gallery/mitski_and_alvvays" element={ <Gallery prefix={ 'mitski_and_alvvays_8.31.24' } /> } />
          <Route path="Gallery/charlie_bliss" element={ <Gallery prefix={ 'charlie_bliss_9.5.24' } /> } /> 
          <Route path="Gallery/bts" element={ <Gallery prefix={ 'built_to_spill_9.8.24' } /> } />
          <Route path="Gallery/fidlar" element={ <Gallery prefix={ 'fidlar_10.14.24' } /> } />
          <Route path="Gallery/vampire_weekend" element={ <Gallery prefix={ 'vampire_weekend_10.1.24' } /> } />
          <Route path="Gallery/ratboys" element={ <Gallery prefix={ 'ratboys-11.12.24' } /> } />

        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;

