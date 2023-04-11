import React from 'react';
import './styles/virtudes.css';
import video1 from '../../assets/videos/video-1.mp4';
import video2 from '../../assets/videos/video-2.mp4';
import video3 from '../../assets/videos/video-3.mp4';

const Virtudes = () => {
  return (
    <section className="virtudes">
      <div>
        <section>
          <video autoPlay loop muted src={video1}></video>
        </section>
        <div className="text-div">
          <h3>Trabajo de calidad</h3>
          <p>Trabajamos con los mejores materiales</p>
        </div>
      </div>
      <div>
        <section>
          <video autoPlay loop muted src={video2}></video>
        </section>
        <div className="text-div">
          <h3>Excelente servicio</h3>
          <p>Nos preocupamos por satisfacer las exigencias del cliente</p>
        </div>
      </div>
      <div>
        <section>
          <video autoPlay loop muted src={video3}></video>
        </section>
        <div className="text-div">
          <h3>Clientes satisfechos</h3>
          <p>Nuestros clientes respaldan nuestro trabajo</p>
        </div>
      </div>
    </section>
  );
};

export default Virtudes;
