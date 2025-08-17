import React, { useState } from "react";
import "../style/feedbacks.css";


function Feedbacks() {
  const [testimonials, setTestimonials] = useState([
    { name: "Jane Doe", text: "Scratchy Nib helped me rediscover calligraphy!" },
    { name: "John Smith", text: "Beautiful artworks and great inspiration." },
  ]);

  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name: formData.name,
      text: formData.message,
    };

    setTestimonials([newFeedback, ...testimonials]); // add new feedback on top
    setFormData({ name: "", message: "" }); // reset form
    alert("Thank you for your feedback! 💌");
  };

  return (
    <div className="feedbacks-container">
      <h1>Feedbacks</h1>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Visitors Say</h2>
        <div className="testimonial-list">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Form */}
      <section className="feedback-form-section">
        <h2>Leave Your Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
}

export default Feedbacks;
