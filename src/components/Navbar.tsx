import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar: React.FC = () => {
  const nav = require('react-router-dom').useNavigate?.();
  const handleLogout = () => {
    localStorage.removeItem("weddingUser");
    if (nav) nav("/");
    window.location.reload();
  };
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
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
