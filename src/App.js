import React, { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import SectionEight from './components/section-eight/section-eight';
import SectionFive from './components/section-five/section-five';
import SectionFour from './components/section-four/section-four';
import SectionOne from './components/section-one/section-one';
import SectionSeven from './components/section-seven/section-seven';
import SectionSix from './components/section-six/section-six';
import SectionThree from './components/section-three/section-three';
import SectionTwo from './components/section-two/section-two';

function App() {
  return (
    <div className="App flex flex-col text-white">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
}

export default App;
