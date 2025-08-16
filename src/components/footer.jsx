import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Logo / Title */}
        <div className="footer-left">
          <h2 className="footer-logo">Scratchy Nib</h2>
          <p className="footer-description">
            Bringing the art of calligraphy to life with elegance and passion.
          </p>
        </div>

        {/* Middle Section - Nav Links */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
            <li><NavLink to="/gallery" className="footer-link">Gallery</NavLink></li>
            <li><NavLink to="/feedbacks" className="footer-link">Feedbacks</NavLink></li>
            <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
            <li><NavLink to="/sitemap" className="footer-link">Site Map</NavLink></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Scratchy Nib. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
