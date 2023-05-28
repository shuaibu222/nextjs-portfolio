'use client';

import React from 'react';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { SiNextdotjs } from 'react-icons/si';
import imageDept from '../../assets/Screenshot 2023-05-26 at 10-40-19 Departments.png';
import imageApp from '../../assets/Screenshot 2023-05-26 at 10-43-44 React App.png';

export default function Home() {
  return (
    <>
      <main className="web-site">
        <Link href="/">
          <BsArrowLeft className="back" />
        </Link>
        <section className="content">
          <div className="project">
            <div className="p-img-p right">
              <img src={imageDept.src} alt="app-img" className="p-img" />
            </div>
            <div className="project-desc right">
              <div className="div">
                <FaHtml5 />
                <h2>HTML & CSS</h2>
              </div>
              <h3>Beautiful and Minimal UIs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                voluptas, nisi dignissimos quasi unde necessitatibus tenetur
                libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
                molestias? Voluptate repellendus ab ex eum officiis neque non
                ad, veritatis provident nesciunt saepe.
              </p>
              <div className="tech-list">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Sass</p>
                <p>Git</p>
              </div>
              <div className="link-icons">
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="p-img-p left">
              <img src={imageApp.src} alt="app-img" className="p-img" />
            </div>
            <div className="project-desc left">
              <div className="div">
                <FaReact />
                <h2>react js project</h2>
              </div>
              <h3 className="name">Product Review</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                voluptas, nisi dignissimos quasi unde necessitatibus tenetur
                libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
                molestias? Voluptate repellendus ab ex eum officiis neque non
                ad, veritatis provident nesciunt saepe.
              </p>
              <div className="tech-list">
                <p>react js</p>
                <p>Sass</p>
                <p>sanity</p>
                <p>Git</p>
              </div>
              <div className="link-icons">
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="p-img-p right">
              <img src={imageDept.src} alt="app-img" className="p-img" />
            </div>
            <div className="project-desc right">
              <div className="div">
                <SiNextdotjs />
                <h2>next js project</h2>
              </div>
              <h3 className="name">DHTN Dashboard</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                voluptas, nisi dignissimos quasi unde necessitatibus tenetur
                libero. Quae recusandae nemo exercitationem dolorum vel. Vel,
                molestias? Voluptate repellendus ab ex eum officiis neque non
                ad, veritatis provident nesciunt saepe.
              </p>
              <div className="tech-list">
                <p>next js</p>
                <p>CSS</p>
                <p>firebase</p>
                <p>sanity</p>
                <p>Git</p>
              </div>
              <div className="link-icons">
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
