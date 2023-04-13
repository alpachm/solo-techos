import './styles/header.css';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isNav, setIsNav] = useState(false);

  const handleNav = () => {
    isNav ? setIsNav(false) : setIsNav(true);
  };

  const links = document.querySelectorAll('.container-nav a');

  links.forEach((a) => {
    a.addEventListener('click', function () {
      setIsNav(false);
    });
  });

  return (
    <header className={`${isNav && 'isNav'}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="solo techos bogota" />
          </a>
          <p>
            <span>Solo techos</span>
            <span>Bogotá</span>
          </p>
        </div>
        <i onClick={handleNav} className="bx bx-menu-alt-right"></i>
        <nav>
          <i onClick={() => setIsNav(false)} className="bx bx-x"></i>

          <div className="container-nav">
            <a href="#">Inicio</a>
            <hr />
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Sobre nosotros
            </Link>
            <hr />
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Servicios
            </Link>
            <hr />
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Galería
            </Link>
            <hr />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contácto
            </Link>
            <hr />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
