import React from 'react'
import './Navbar.css'
import logo_game from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo_game} alt='' className='logo'/>
      <ul>
        <li>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">학과안내</a>
        </li>
        <li>캐릭터</li>
        <li>3D모델링</li>
        <li>게임작품</li>
      </ul>

    </div>
  )
}

export default Navbar