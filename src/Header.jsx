import React from 'react';
import './Header.css'; 
import icon from './icon.png';

function Header() {
  return (
    <div className="header">
      <img src={icon} alt="Icon" className="icon" />
      <h2 className="my-food">My Food</h2>
      <h2 className="mail">Mail</h2>
    </div>
  )
}

export default Header;
