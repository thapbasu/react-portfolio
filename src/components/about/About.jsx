import React from 'react';
import './About.css';
import ME from '../../assests/me-about.png';
import { FaAward } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { FaFolder } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />

              <h5>Experience</h5>
              <small>0+ Years</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />

              <h5>Clients</h5>
              <small>0+ Clients</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />

              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            👋 Hey, I'm Basudev Thapa, a React dev leveling up to full-stack. 🚀
            I'm Passionate about creating smooth user experiences. Let's code
            something awesome!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
