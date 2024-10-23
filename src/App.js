import React from 'react';

import { Routes, Route } from "react-router-dom"

import Home from './components/Home';
import PastShows from './components/PastShows';
import UpcomingShows from './components/UpcomingShows';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';


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
        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
