import React, { useState } from 'react';
import './styles/gallery.css';
import galleryImages from '../../utils/gallery-info';

const Gallery = () => {
  const [indexImg, setIndexImg] = useState(0);

  const sliderMovement = {
    transform: `translateX(calc(-${indexImg} / 7 * 100%))`,
  };

  const handleAdd = () => {
    setIndexImg(indexImg + 1);

    if (indexImg === 6) setIndexImg(0);
  };

  const handleMinus = () => {
    setIndexImg(indexImg - 1);

    if (!indexImg) setIndexImg(6);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="header-gallery">
        <h2 className="subtitulo grilla">Algunos trabajos</h2>
      </div>
      <div className="slider">
        <div className="botones">
          <i onClick={handleMinus} className="bx bxs-caret-left-circle"></i>
          <i onClick={handleAdd} className="bx bxs-caret-right-circle"></i>
        </div>
        <div style={sliderMovement} className="slider-gallery">
          {galleryImages.map((image) => (
            <div key={image.image} className="gallery-image">
              <img src={image.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
