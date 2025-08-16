import React from "react";
import '../style/home.css';
import contactHeroImage from '../assets/images/contact-hero.jpg'; // placeholder image

function Contact() {
  return (
    <section className="main-container">

      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${contactHeroImage})`, height: '60vh' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Scratchy Nib</h1>
          <p>We’d love to hear from you!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" style={{ padding: '8% 10%' }}>
        <div className="contact-grid">

          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <ul>
              <li><strong>Email:</strong> contact@scratchynib.com</li>
              <li><strong>Phone:</strong> +1 (555) 987-6543</li>
              <li><strong>Address:</strong> 456 Creativity Lane, Art City, CA 90002, USA</li>
            </ul>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="hero-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;
