import React from 'react';
import { HashLink } from 'react-router-hash-link';
import TraditionalCalligraphy from './TraditionalCalligraphy';
import ContemporaryCalligraphy from './ContemporaryCalligraphy';
import HandLetteringDesign from './HandLetteringDesign';
import ModernCalligraphy from './ModernCalligraphy';
import '../style/gallery.css';

function Gallery() {
  return (
    <div className="gallery-page">

      {/* Category Navigation */}
      <nav className="gallery-nav">
        <HashLink smooth to="#traditional-calligraphy">Traditional</HashLink>
        <HashLink smooth to="#contemporary-calligraphy">Contemporary</HashLink>
        <HashLink smooth to="#hand-lettering-design">Hand Lettering</HashLink>
        <HashLink smooth to="#modern-calligraphy">Modern</HashLink>
      </nav>

      {/* Gallery Sections */}
      <section id="traditional-calligraphy">
        <TraditionalCalligraphy />
      </section>

      <section id="contemporary-calligraphy">
        <ContemporaryCalligraphy />
      </section>

      <section id="hand-lettering-design">
        <HandLetteringDesign />
      </section>

      <section id="modern-calligraphy">
        <ModernCalligraphy />
      </section>
    </div>
  );
}

export default Gallery;
