import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { FaRegMessage } from 'react-icons/fa6';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a
        href="#"
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => setActiveNav('#experience')}
      >
        <BiBookmark />
      </a>
      <a
        href="#services"
        className={activeNav === '#services' ? 'active' : ''}
        onClick={() => setActiveNav('#services')}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => setActiveNav('#contact')}
      >
        <FaRegMessage />
      </a>
    </nav>
  );
};

export default Nav;
