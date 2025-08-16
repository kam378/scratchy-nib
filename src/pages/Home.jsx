import React from "react";
import '../style/home.css';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import aboutImage from '../assets/images/home-about-section.jpg';
import rightArrow from '../assets/icons/right-arrow.svg';
import attachment from '../assets/icons/attachment.svg';
import palette from '../assets/icons/pallete.svg';
import swords from '../assets/icons/swords.svg';
import hand from '../assets/icons/hand.svg';

// Gallery preview images
import traditional1 from '../assets/images/gallery_img11.jpg';
import contemporary1 from '../assets/images/gallery_img7.jpg';
import hand1 from '../assets/images/gallery_img9.jpg';
import modern1 from '../assets/images/gallery_img1.jpg';

const testimonials = [
  { name: "Jane Doe", text: "Scratchy Nib helped me rediscover calligraphy!" },
  { name: "John Smith", text: "Beautiful artworks and great inspiration." },
  { name: "Amelia Rose", text: "A perfect blend of tradition and creativity." },
];

function Home() {
  return (
    <section className="main-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span>June 6, 2019</span>
          <h1>Exploring the Art of Calligraphy</h1>
          <p>Discover the beauty and elegance of calligraphy, a timeless art form that transforms words into stunning visual masterpieces.</p>
          <NavLink to='/gallery' className='hero-btn'>Explore Gallery</NavLink>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-text">
          <h1>The Flourish of Ink</h1>
          <p>This style of calligraphy traces its roots to Western Copperplate script, which originated in 17th-century England and was popularized through ornate handwriting used for formal documents and artistic expression.</p>
          <NavLink to='/about' className='about-link'>
            More About <img src={rightArrow} alt="Right Arrow" width={20} height={20} />
          </NavLink>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Calligraphy" width={500} height={400} />
        </div>
      </div>

      {/* Interesting Section */}
      <div className="interesting-section">
        <div className="interesting-header">
          <h1>What is Interesting in Scratchy Nib?</h1>
        </div>
        <p>Our collection currently contains more than 100,000 works of art and design dating from ancient times to today.</p>

        <div className="calligraphy-div">
          <HashLink smooth to='/gallery#modern-calligraphy' className="calligraphy-div-div">
            <div className="calligraphy-icon-container">
              <div className="calligraphy-icon"><img src={palette} alt="" width={32} height={32} /></div>
            </div>
            <p>2820</p>
            <span>Modern</span>
          </HashLink>

          <HashLink smooth to='/gallery#contemporary-calligraphy' className="calligraphy-div-div">
            <div className="calligraphy-icon-container">
              <div className="calligraphy-icon"><img src={swords} alt="" width={32} height={32} /></div>
            </div>
            <p>1467</p>
            <span>Contemporary</span>
          </HashLink>

          <HashLink smooth to='/gallery#hand-lettering-design' className="calligraphy-div-div">
            <div className="calligraphy-icon-container">
              <div className="calligraphy-icon"><img src={hand} alt="" width={32} height={32} /></div>
            </div>
            <p>1630</p>
            <span>Hand lettering</span>
          </HashLink>

          <HashLink smooth to='/gallery#traditional-calligraphy' className="calligraphy-div-div">
            <div className="calligraphy-icon-container">
              <div className="calligraphy-icon"><img src={attachment} alt="" width={32} height={32} /></div>
            </div>
            <p>2820</p>
            <span>Traditional</span>
          </HashLink>
        </div>
      </div>

      {/* Gallery Preview Section */}
      <div className="gallery-preview-section">
        <h2 className="gallery-preview-header">Gallery Highlights</h2>
        <div className="gallery-preview-container">
          <HashLink smooth to='/gallery#traditional-calligraphy' className="gallery-preview-card">
            <img src={traditional1} alt="Traditional Calligraphy" />
            <span>Traditional</span>
          </HashLink>

          <HashLink smooth to='/gallery#contemporary-calligraphy' className="gallery-preview-card">
            <img src={contemporary1} alt="Contemporary Calligraphy" />
            <span>Contemporary</span>
          </HashLink>

          <HashLink smooth to='/gallery#hand-lettering-design' className="gallery-preview-card">
            <img src={hand1} alt="Hand Lettering Design" />
            <span>Hand Lettering</span>
          </HashLink>

          <HashLink smooth to='/gallery#modern-calligraphy' className="gallery-preview-card">
            <img src={modern1} alt="Modern Calligraphy" />
            <span>Modern</span>
          </HashLink>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonials-section">
        <h2 className="testimonials-header">What People Say</h2>
        <div className="testimonials-container">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{t.text}”</p>
              <span className="testimonial-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
