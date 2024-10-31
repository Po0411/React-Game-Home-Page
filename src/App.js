import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Gtec from './Components/Gtec/Gtec';
import Gstar from './Components/Gstar/Gstar';
import class_3 from './Components/class/class3/class_3';
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
      <Gstar />
      <class_3 />
    </div>
  );
};

export default App;
