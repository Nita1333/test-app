import React from "react";
import "./Navbar.css";


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <a href="#home" title="Home">
          <img src="/favicon.ico" alt="Favicon" style={{ width: '28px', height: '28px', verticalAlign: 'middle' }} />
        </a>
      </div>
      <ul className="navbar-links" style={{marginLeft: 'auto'}}>
        <li><a href="#search">Dienstleistersuche</a></li>
        <li><a href="#profile">Profil</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
