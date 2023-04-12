import React from 'react';
import './styles/aboutUs.css';

const AboutUs = () => {
  return (
    <section id="aboutUs" className="aboutUs">
      <div className="container-aboutUs grilla">
        <div className="title">
          <h2 className="subtitulo">Acerca de nosotros</h2>
          <hr />
        </div>
        <div className="text">
          <p>
            Somos una empresa con 25 años de experiencia en el área de
            instalación, remodelación y reparación de techos y marquesinas,
            líderes en el mercado local. Innovamos, ofreciendo servicio y
            materiales de calidad a la altura de sus expectativas, garantizando
            una entrega a tiempo de los trabajos realizados, junto a un buen
            asesoramiento de las necesidades de cada hogar, negocio u otra
            instalación en Bogotá y a nivel nacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
