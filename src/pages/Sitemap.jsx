import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../style/sitemap.css";

function Sitemap() {
  return (
    <div className="sitemap">
      <h1>Site Map</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
          <ul>
            <li>
              <HashLink smooth to="/gallery#traditional-calligraphy">
                Traditional Calligraphy
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/gallery#contemporary-calligraphy">
                Contemporary Calligraphy
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/gallery#hand-lettering-design">
                Hand Lettering Design
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/gallery#modern-calligraphy">
                Modern Calligraphy
              </HashLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/feedbacks">Feedbacks</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sitemap;
