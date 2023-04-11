import React from 'react';
import './styles/services.css';
import servicesInfo from '../../utils/services-info';

const Services = () => {
  return (
    <section className="services">
      <div className="header-services">
        <h2 className="subtitulo">Nuestros servicios</h2>
      </div>
      <div className="content-services">
        {servicesInfo.map((service) => (
          <div key={service.image} className="box">
            <img src={service.image} alt="" />
            <div className="content-box">
              <h2>{service.title}</h2>
              <ul>
                {service.list.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
