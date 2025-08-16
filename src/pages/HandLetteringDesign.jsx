import React from 'react';
import gallery_img6 from '../assets/images/gallery_img6.jpg';
import gallery_img7 from '../assets/images/gallery_img7.jpg';
import gallery_img8 from '../assets/images/gallery_img8.jpg';

const images = [gallery_img6, gallery_img7, gallery_img8];

function HandLetteringDesign() {
  return (
    <div className="category-gallery">
      <h2>Hand Lettering Design</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Hand Lettering Design ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HandLetteringDesign;
