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
          <div className="p-img-p">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finternationaljournalofresearch.files.wordpress.com%2F2020%2F06%2Fcoding-vs-programming-2.jpg&f=1&nofb=1&ipt=f90a03ece4a30d62da12d1307a6b9b36de182a3319c067548f54db43e5062a8f&ipo=images"
              alt="app-img"
              className="p-img"
            />
          </div>
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
          <div className="p-img-p">
            <img src={imageApp.src} alt="app-img" className="p-img" />
          </div>

          <div className="project-desc">
            <h2>react js project</h2>
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
          <div className="p-img-p">
            <img src={imageDept.src} alt="app-img" className="p-img" />
          </div>
          <div className="project-desc">
            <h2>Next js project</h2>
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
