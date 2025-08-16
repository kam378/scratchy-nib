import React from 'react';
import gallery_img4 from '../assets/images/gallery_img4.jpg';
import gallery_img5 from '../assets/images/gallery_img5.jpg';

const images = [gallery_img4, gallery_img5];

function ContemporaryCalligraphy() {
  return (
    <div className="category-gallery">
      <h2>Contemporary Calligraphy</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Contemporary Calligraphy ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContemporaryCalligraphy;
