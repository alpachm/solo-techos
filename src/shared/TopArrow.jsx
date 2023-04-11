import React, { useState } from 'react';
import './styles/topArrow.css';

const TopArrow = () => {
  const [isTopArrow, setIsTopArrow] = useState(false);

  window.addEventListener('scroll', function () {
    scrollY > 600 ? setIsTopArrow(true) : setIsTopArrow(false);
  });

  return (
    <div className={`topArrow ${isTopArrow && 'active-topArrow'}`}>
      <a href="#">
        <i className="bx bx-chevrons-up"></i>
      </a>
    </div>
  );
};

export default TopArrow;
