import './styles/googleMap.css';
import RedesSociales from '../../shared/RedesSociales';

const GoogleMaps = () => {
  return (
    <section className="google-map">
      <div className="ubicacion-info grilla">
        <h2 className="subtitulo">
          Estamos ubicados en <span>Bogotá</span>
        </h2>
        <main>
          <div className="box">
            <i className="bx bxs-map"></i>
            <p>KR 50 # 128C - 36</p>
            <span>Prado Veraniego</span>
          </div>

          <div className="box">
            <i className="bx bxs-phone"></i>
            <p>
              {' '}
              <a href="tel: 601 6278562">(+601) 6278562</a>{' '}
            </p>
          </div>

          <div className="box">
            <i className="bx bxs-time-five"></i>
            <p>
              <span>Lunes/Viernes:</span> 7:30AM - 5:30PM
            </p>
            <p>
              <span>Sabados:</span> 7:30AM - 2PM
            </p>
          </div>
        </main>
        <hr />
        <RedesSociales />
      </div>
    </section>
  );
};

export default GoogleMaps;
