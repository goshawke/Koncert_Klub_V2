import React from 'react';

import { Routes, Route } from "react-router-dom"

import './App.css';
// import 'styles.css';
import Home from './components/Home';
import PastShows from './components/PastShows';
import UpcomingShows from './components/UpcomingShows';
import AboutUs from './components/AboutUs';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="PastShows" element={ <PastShows/> } />
        <Route path="UpcomingShows" element={ <UpcomingShows/> } />
        <Route path="AboutUs" element={ <AboutUs/> } />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
