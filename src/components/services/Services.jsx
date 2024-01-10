import React from 'react';
import './Services.css';
import { FaCheck } from 'react-icons/fa6';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Intuitive UI/UX: Crafting visually appealing and user-friendly
                interfaces.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                User-Centric Design: Tailoring designs to connect with your
                target audience.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Responsive Solutions: Ensuring seamless experiences across
                devices.
              </p>
            </li>

            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Detail-Oriented: Meticulously refining every design element for
                perfection.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Full-Stack Expertise: Proficient in both front-end and back-end
                technologies, ensuring end-to-end development solutions for
                robust web applications.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Scalable Architecture: Designing and implementing scalable and
                flexible architectures to accommodate growth and evolving
                business needs.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Responsive Web Design: Creating websites that adapt seamlessly
                to various devices, providing an optimal viewing and interaction
                experience.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Performance Optimization: Employing best practices to optimize
                website speed and performance, enhancing user satisfaction and
                search engine rankings.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Security First Approach: Implementing industry-standard security
                measures to protect against vulnerabilities and ensure the
                integrity of your web applications.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Compelling Copywriting: Crafting engaging and persuasive written
                content that resonates with your target audience, communicates
                your message effectively, and drives desired actions.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Visual Storytelling: Creating visually captivating content
                through graphics, images, and multimedia elements to enhance
                your brand narrative and leave a memorable impact on your
                audience.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                SEO Optimization: Implementing search engine optimization (SEO)
                strategies to ensure that your content ranks well in search
                results, driving organic traffic and increasing online
                visibility.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Content Strategy: Developing comprehensive content strategies
                aligned with your business goals, ensuring a cohesive and
                impactful online presence across various platforms.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
