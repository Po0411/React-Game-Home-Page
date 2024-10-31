import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Gtec from './Components/Gtec/Gtec';
import Gstar from './Components/Gstar/Gstar';
import bannerImage from './assets/VANNER.png';
import './App.css'; // 새로운 스타일을 위한 CSS 파일

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="section-spacing">
        <Gtec />
      </div>
      <Gstar />
    </div>
  );
};

export default App;
