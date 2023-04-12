import React, { useEffect, useState } from 'react';
import './styles/main.css';
import sliderImages from '../../utils/slider-images';
import { Link } from 'react-scroll';

const Main = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [isActive1, setIsActive1] = useState(true);
  const [isOpacity, setIsOpacity] = useState(false);
  const [isSpan, setIsSpan] = useState(false);
  const [isOpacity2, setIsOpacity2] = useState(false);
  const [isSpan2, setIsSpan2] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpacity(true);
    }, 500);
  }, []);

  if (isOpacity) {
    setTimeout(() => {
      setIsSpan(true);
    }, 500);
  }

  const handleClick1 = () => {
    setActive1(true);
    setActive2(false);
    setIsActive1(true);
    setIsActive2(false);

    setIsOpacity2(false);
    setIsSpan2(false);

    setTimeout(() => {
      setIsOpacity(true);
    }, 300);

    if (isOpacity) {
      setTimeout(() => {
        setIsSpan(true);
      }, 300);
    }
  };

  const handleClick2 = () => {
    setActive1(false);
    setActive2(true);
    setIsActive1(false);
    setIsActive2(true);

    setIsOpacity(false);
    setIsSpan(false);

    setTimeout(() => {
      setIsOpacity2(true);
    }, 300);

    if (isOpacity2) {
      setTimeout(() => {
        setIsSpan2(true);
      }, 300);
    }
  };

  const styleMovement = {
    transform: `translateX(calc(-${indexImg} / 6 * 100%))`,
  };

  useEffect(() => {
    setTimeout(() => {
      setIndexImg(indexImg + 1);

      if (indexImg === 5) setIndexImg(1);
    }, 4000);
  }, [indexImg]);

  return (
    <main>
      <div style={styleMovement} className="slider-movement">
        {sliderImages.map((img) => (
          <div key={img} className="image">
            <img src={img} alt="reparacion-impermeabilizacion-techos-bogota" />
          </div>
        ))}
      </div>
      <div className="bg-color">
        <div className="slider-main">
          <div className={`content-1 ${isActive1 && 'active'}`}>
            <h1 className={`${isOpacity && 'show-h1'}`}>
              Trabajo{' '}
              <span className={`${isSpan && 'show-span'}`}>
                100% garantizado
              </span>
            </h1>
            <p className={`desktop grilla ${isSpan && 'show-p-1'}`}>
              Nuestro gran número de clientes satisfechos respaldan la calidad
              de nuestro trabajo.
            </p>
          </div>

          <div className={`content-2 ${isActive2 && 'active'}`}>
            <h1 className={`${isOpacity2 && 'show-h1'}`}>
              Más de <span>15 años de experiencia</span>
            </h1>
            <p className={`desktop grilla ${isOpacity2 && 'show-p-2'}`}>
              Contamos con más de 15 años de experiencia en la industria de
              instalación y reparación de todo tipo de techos.
            </p>
          </div>

          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>Leer más...</button>
          </Link>
        </div>

        <div className="circulos">
          <div
            onClick={handleClick1}
            className={`circulo ${active1 && 'active'}`}
          >
            <div className={`circulo2 ${active1 && 'active'}`}></div>
          </div>

          <div
            onClick={handleClick2}
            className={`circulo ${active2 && 'active'}`}
          >
            <div className={`circulo2 ${active2 && 'active'}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
