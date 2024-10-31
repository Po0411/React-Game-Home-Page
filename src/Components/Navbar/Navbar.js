import React from 'react';
import './Navbar.css';
import logo_game from '../../assets/logo.png';

const Navbar = () => {
  const navItems = [
    { label: '학과안내', link: 'https://example.com' },
    { label: '캐릭터', link: 'https://example.com' },
    { label: '3D모델링', link: 'https://example.com' },
    { label: '게임작품', link: 'https://example.com' },
  ];

  return (
    <div className="navbar">
      <img src={logo_game} alt="Logo" className="logo" />
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="fontTest">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
