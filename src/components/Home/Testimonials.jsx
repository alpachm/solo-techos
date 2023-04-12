import React from 'react';
import './styles/testimonials.css';
import testimonialsInfo from '../../utils/testimonials-info';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container-testimonials grilla">
        <h2 className="subtitulo">Nuestros clientes</h2>
        <hr />
        <div className="box-testimonials">
          {testimonialsInfo.map((testimonial) => (
            <div key={testimonial.image} className="box">
              <p>{testimonial.quote}</p>
              <footer>
                <img src={testimonial.image} alt="" />
                <div className="person-info">
                  <p>{testimonial.name}</p>
                  <span>{testimonial.cargo}</span>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
