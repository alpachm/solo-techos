import React from 'react';
import './styles/footer.css';
import RedesSociales from './RedesSociales';

const Footer = () => {
  return (
    <footer>
      <div className="container-footer grilla">
        <div className="box">
          <h3>Sobre nosotros</h3>
          <p>
            Somos una empresa con 25 años de experiencia en el área de
            instalación, remodelación y reparación de techos y marquesinas,
            líderes en el mercado local.
          </p>

          <p>
            Innovamos, ofreciendo servicio y materiales de calidad a la altura
            de sus expectativas, garantizando una entrega a tiempo de los
            trabajos realizados.
          </p>
        </div>

        <div className="box">
          <h3>Nuestros servicios</h3>
          <ul>
            <li>
              <a href="">Impermeabilización</a>
            </li>
            <li>
              <a href="">Reparación de techos</a>
            </li>
            <li>
              <a href="">Instalación de techos</a>
            </li>
            <li>
              <a href="">Reparación de goteras</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>Contácto</h3>

          <div className="icons-contact">
            <div className="box">
              <i className="bx bxs-map"></i>
              <footer>
                <p>KR 50 # 128C - 36</p>
                <span className="prado">Prado Veraniego</span>
              </footer>
            </div>

            <div className="box">
              <i className="bx bxs-phone"></i>
              <footer>
                <p>
                  {' '}
                  <a className="phone" href="tel: 601 6278562">
                    (+601) 6278562
                  </a>{' '}
                </p>
              </footer>
            </div>

            <div className="box">
              <i className="bx bx-phone-call"></i>
              <footer>
                <p>
                  {' '}
                  <a className="phone" href="tel: 313 8127333">
                    313 8127333
                  </a>{' '}
                </p>
              </footer>
            </div>

            <div className="box">
              <i className="bx bxs-time-five"></i>
              <footer>
                <p>
                  <span className="span-bold">Lunes/Viernes:</span> 7:30AM -
                  5:30PM
                </p>
                <p>
                  <span className="span-bold">Sabados:</span> 7:30AM - 2PM
                </p>
              </footer>
            </div>
          </div>
        </div>

        <div className="box">
          <h3>Redes Sociales</h3>

          <RedesSociales />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
