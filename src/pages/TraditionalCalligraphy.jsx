import React from 'react';
import gallery_img1 from '../assets/images/gallery_img9.jpg';
import gallery_img2 from '../assets/images/gallery_img10.jpg';
import gallery_img3 from '../assets/images/gallery_img11.jpg';

const images = [gallery_img1, gallery_img2, gallery_img3];

function TraditionalCalligraphy() {
  return (

    <div className="category-gallery">
      <h2>Traditional Calligraphy</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Traditional Calligraphy ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TraditionalCalligraphy;
