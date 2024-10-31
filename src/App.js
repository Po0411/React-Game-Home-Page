import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Gtec from './Components/Gtec/Gtec';
import Gstar from './Components/Gstar/Gstar';
import Work from './Components/Work/Work';
import bannerImage from './assets/VANNER.png';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="section-spacing">
        <Gtec />
      </div>
      <Work />
      <Gstar />
    </div>
  );
};

export default App;
