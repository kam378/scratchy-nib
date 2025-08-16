import React from "react";
import '../style/about.css';
import { NavLink } from "react-router-dom";
import aboutHeroImage from '../assets/images/about-hero.jpg';
import rightArrow from '../assets/icons/right-arrow.svg';

const testimonials = [
  { name: "Emily Clark", text: "Scratchy Nib reignited my love for lettering!" },
  { name: "Oliver White", text: "A perfect blend of tradition and creativity." },
];

function About() {
  return (
    <section className="about-container">

      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: `url(${aboutHeroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Scratchy Nib</h1>
          <p>Where art, culture, and creativity meet.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          Scratchy Nib began in a tiny attic studio in 2018, where Jane Doe, a passionate calligrapher, 
          would spend hours practicing elegant letterforms with nothing but ink, paper, and a dream. 
          Frustrated by the lack of a community to share her art, she started documenting her journey online. 
          Soon, fellow artists from around the world reached out, sharing their own creations and techniques. 
          What started as a personal hobby blossomed into a vibrant digital hub where art, culture, and creativity meet.
          Today, Scratchy Nib is more than a platform — it’s a global community for artists and enthusiasts who believe in the beauty of every stroke.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire, connect, and celebrate the art of calligraphy, one stroke at a time.
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="team-section">
        <h2>Voices from Our Community</h2>
        <div className="team-cards">
          {testimonials.map((t, index) => (
            <div className="team-card" key={index}>
              <p>"{t.text}"</p>
              <h3>- {t.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="about-us">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <ul>
            <li><strong>Email:</strong> info@scratchynib.com</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
            <li><strong>Address:</strong> 123 Art Street, Creativity City, CA 90001, USA</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <NavLink to='/gallery' className='story-link'>
          Explore Our Gallery <img src={rightArrow} alt="Right Arrow" width={20} height={20} />
        </NavLink>
      </div>

    </section>
  );
}

export default About;
