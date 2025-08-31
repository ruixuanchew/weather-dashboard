import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">WeatherApp</h1>
      {/* <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button> */}
      {/* <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Settings</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div> */}
    </nav>
  );
}

export default Navbar;
