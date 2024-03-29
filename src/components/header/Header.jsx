import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assests/me.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Basudev Thapa</h1>
        <h5 className="text-light">
          React Developer - An aspiring full stack developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className="me-img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
