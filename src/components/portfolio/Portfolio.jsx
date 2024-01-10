import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assests/notesapp.JPG';
import IMG2 from '../../assests/promptopia.JPG';
import IMG3 from '../../assests/onlinestore.JPG';
import IMG4 from '../../assests/netflix.JPG';
import IMG5 from '../../assests/todo.JPG';
import IMG6 from '../../assests/bank.JPG';
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Notes App - MERN STACK',
      github: 'https://github.com/thapbasu/NotesApp---Frontend',
      demo: 'https://stacknotes-hub.netlify.app/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Promptopia - NextJS Prompt App',
      github: 'https://github.com/thapbasu/promptopia-full-stack-app',
      demo: 'https://promptopia-full-stack-app.vercel.app/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'OnlineStore - A React App',
      github:
        'https://github.com/thapbasu/OnlineStore/tree/main/e-commerce-web',
      demo: 'https://onlinestore-basu.netlify.app/',
    },
    {
      id: 4,
      image: IMG4,
      title: 'Netflix Clone - React & Firebase',
      github: 'https://github.com',
      demo: 'https://netflix-clone-firebase-basu.netlify.app/',
    },
    {
      id: 5,
      image: IMG5,
      title: 'ToDo List - React',
      github: 'https://github.com',
      demo: 'https://to-do-list-basu.netlify.app/',
    },
    {
      id: 6,
      image: IMG6,
      title: 'A Modern Bank App - React',
      github: 'https://github.com/thapbasu/react---modern_bank_app',
      demo: 'https://modern-bank-app-basu.netlify.app/',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} style={{ width: '100%' }} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
