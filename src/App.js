import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Gtec from './Components/Gtec/Gtec'
import Gstar from './Components/Gstar/Gstar';
import bannerImage from './assets/VANNER.png';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <img
        src={bannerImage}
        alt="Banner"
        style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }}
      />
      <div style={{ margin: '60px 0' }}> {/* img와 Gtec 사이의 공백 */}
        <Gtec />
      </div>
      <Gstar />
    </div>
  )
}

export default App
