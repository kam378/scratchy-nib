import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './header.css';
import clockIcon from '../assets/icons/clock-icon.svg';
import locationIcon from '../assets/icons/location-icon.svg';
import searchIcon from '../assets/icons/search-icon.svg';
import languageIcon from '../assets/icons/language-icon.svg';
import barsIcon from '../assets/icons/bars-icon.svg'; // new hamburger icon

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Auto-focus search input
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Close mobile menu when clicking outside
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    setSearchTerm('');
    setShowSearch(false);
  };

  const handleCancel = () => {
    setSearchTerm('');
    setShowSearch(false);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className='header-top'>
        <div className='header-top-left'>
          <img src={clockIcon} alt="Clock Icon" width={20} height={20} />
          <span>THE SHOP IS OPEN TODAY 10AM - 5PM</span>
        </div>

        <div className='header-top-right'>
          <div className="header-location-div">
            <img src={locationIcon} alt="Location Icon" width={20} height={20} />
            <span>123 Main St, Anytown, USA</span>
          </div>

          <div className='header-search-div'>
            <img
              src={searchIcon}
              alt="Search Icon"
              width={20}
              height={20}
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: 'pointer' }}
              aria-label="Open search"
            />
            <span onClick={() => setShowSearch(!showSearch)} style={{ cursor: 'pointer' }}>SEARCH</span>
          </div>

          <div className="header-language-div">
            <img src={languageIcon} alt="Language Icon" width={20} height={20} />
            <span>ENGLISH</span>
          </div>
        </div>
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className='search-popup'>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>Go</button>
          <button className="cancel-btn" onClick={handleCancel}>×</button>
        </div>
      )}

      {/* Bottom Bar */}
      <div className='header-bottom'>
        <div className="header-title">
          <span>Scratchy Nib</span>
          {/* Hamburger for small screens */}
          <img
            src={barsIcon}
            alt="Menu"
            className="hamburger-icon"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          />
        </div>

        <nav
          className={`nav-bar ${mobileNavOpen ? 'mobile-open' : ''}`}
          ref={navRef}
        >
          <NavLink to="/" className="nav-link">HOME</NavLink>
          <NavLink to="/about" className="nav-link">ABOUT</NavLink>

          <div className="nav-item-with-dropdown">
            <NavLink to="/gallery" className="nav-link">GALLERY ▾</NavLink>
            <div className="dropdown">
              <HashLink smooth to="/gallery#traditional-calligraphy" className="nav-link">Traditional Calligraphy</HashLink>
              <HashLink smooth to="/gallery#contemporary-calligraphy" className="nav-link">Contemporary Calligraphy</HashLink>
              <HashLink smooth to="/gallery#hand-lettering-design" className="nav-link">Hand Lettering Design</HashLink>
              <HashLink smooth to="/gallery#modern-calligraphy" className="nav-link">Modern Calligraphy</HashLink>
            </div>
          </div>

          <NavLink to="/feedbacks" className="nav-link">FEEDBACKS</NavLink>
          <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
