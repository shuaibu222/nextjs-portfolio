import React from 'react';
import { Poppins } from 'next/font/google';
import { TbExternalLink } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import imageDept from '../../assets/Screenshot 2023-05-26 at 10-40-19 Departments.png';
import imageApp from '../../assets/Screenshot 2023-05-26 at 10-43-44 React App.png';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });

export default function Work() {
  return (
    <article className="work" id="work">
      <section className="heading">
        <h1>Work.</h1>
        <div className="desc">
          <span></span>
          <p>my featured innovations</p>
          <span></span>
        </div>
      </section>
      <h2 className={`bg-name ${poppins.className}`}>WORK.</h2>
      <section className="content">
        <div className="project">
          <img src={imageDept.src} className="p-img" alt="dept-img" />
          <div className="project-desc">
            <h2>SIMPLE AND CREATIVE UIs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptas, nisi dignissimos quasi unde necessitatibus tenetur
              libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
              molestias? Voluptate repellendus ab ex eum officiis neque non ad,
              veritatis provident nesciunt saepe.
            </p>
            <div className="tech-list">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Sass</p>
              <p>Git</p>
            </div>
            <div className="link-icons">
              <FaGithub />
              <TbExternalLink />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={imageApp.src} alt="app-img" className="p-img" />
          <div className="project-desc">
            <h2>SIMPLE AND CREATIVE UIs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptas, nisi dignissimos quasi unde necessitatibus tenetur
              libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
              molestias? Voluptate repellendus ab ex eum officiis neque non ad,
              veritatis provident nesciunt saepe.
            </p>
            <div className="tech-list">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Sass</p>
              <p>Git</p>
            </div>
            <div className="link-icons">
              <FaGithub />
              <TbExternalLink />
            </div>
          </div>
        </div>
        <div className="project">
          <img src={imageDept.src} alt="app-img" className="p-img" />
          <div className="project-desc">
            <h2>SIMPLE AND CREATIVE UIs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptas, nisi dignissimos quasi unde necessitatibus tenetur
              libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
              molestias? Voluptate repellendus ab ex eum officiis neque non ad,
              veritatis provident nesciunt saepe.
            </p>
            <div className="tech-list">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Sass</p>
              <p>Git</p>
            </div>
            <div className="link-icons">
              <FaGithub />
              <TbExternalLink />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
