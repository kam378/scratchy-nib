import React from 'react';
import gallery_img9 from '../assets/images/gallery_img1.jpg';
import gallery_img10 from '../assets/images/gallery_img2.jpg';
import gallery_img11 from '../assets/images/gallery_img3.jpg';

const images = [gallery_img9, gallery_img10, gallery_img11];

function ModernCalligraphy() {
  return (
    <div className="category-gallery">
      <h2>Modern Calligraphy</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Modern Calligraphy ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernCalligraphy;
