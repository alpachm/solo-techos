import './styles/header.css';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isNav, setIsNav] = useState(false);

  const handleNav = () => {
    isNav ? setIsNav(false) : setIsNav(true);
  };

  return (
    <header className={`${isNav && 'isNav'}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="solo techos bogota" />
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
            <a href="#">Sobre nosotros</a>
            <hr />
            <a href="#">Servicios</a>
            <hr />
            <a href="#">Galería</a>
            <hr />
            <a href="#">Contacto</a>
            <hr />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
