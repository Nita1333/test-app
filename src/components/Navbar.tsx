import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <Link to="/" title="Home">
          <img src="/favicon.ico" alt="Favicon" style={{ width: '28px', height: '28px', verticalAlign: 'middle' }} />
        </Link>
      </div>
      <ul className="navbar-links" style={{marginLeft: 'auto'}}>
        <li><Link to="/service">Dienstleistersuche</Link></li>
        <li><Link to="/profile">Profil</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
