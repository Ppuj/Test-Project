import React from 'react'
import { useState } from 'react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  return (
    
    <header className="header">
    <div className="logo">LOGO</div>
    <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </div>
    <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      <a href="#">Qualification</a>
      <a href="#">Organization</a>
      <a href="#">Research and Analysis</a>
      <a href="#">Lorem Ipsum</a>
      <a href="#">Lorem Ipsum</a>
      <span className="search-icon">🔍</span>
      <a href="#" className="enroll-btn">Enrollment</a>
    </nav>
  </header>
  )
}

export default Header
