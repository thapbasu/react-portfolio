import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Basu Thapa
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Shield.thapa/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/shield.thapa/">
          <FaInstagramSquare />
        </a>
        <a href="https://twitter.com">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Basu Thapa.</small>
      </div>
    </footer>
  );
};

export default Footer;
