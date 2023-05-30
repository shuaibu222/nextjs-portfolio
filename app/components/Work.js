import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { SiNextdotjs } from 'react-icons/si';
import imageDept from '../../assets/Screenshot 2023-05-26 at 10-40-19 Departments.png';
import imageApp from '../../assets/Screenshot 2023-05-26 at 10-43-44 React App.png';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });

export default async function Work({ promise }) {
  const works = await promise;

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
      <h2 className={`bg-name ${poppins.className}`}>WORK</h2>
      <section className="content">
        {works.map((work) => {
          const { tooltip, title, _id, link, icon, description, tech, image } =
            work;
          return (
            <div className="p-wrapper" key={_id}>
              <div className="project">
                <div className="p-img-p right">
                  <img src={imageDept.src} alt="app-img" className="p-img" />
                </div>
                <div className="project-desc right">
                  <div className="div">
                    <FaHtml5 />
                    <h2>{tooltip}</h2>
                  </div>
                  <h3>
                    <Link href="/websites" className="name">
                      {title}
                    </Link>
                    <BsArrowRight className="arr-project" />
                  </h3>

                  <p>{description}</p>
                  <div className="tech-list">
                    {tech.map((t, index) => {
                      return <p key={index}>{t}</p>;
                    })}
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
              <div className="project-desc-child right">
                <div className="div">
                  <FaHtml5 />
                  <h2>HTML & CSS</h2>
                </div>
                <h3>
                  <Link href="/websites" className="name">
                    Beautiful UIs
                  </Link>
                  <BsArrowRight className="arr-project" />
                </h3>

                <p>{description}</p>
                <div className="tech-list">
                  {tech.map((t, index) => {
                    return <p key={index}>{t}</p>;
                  })}
                </div>
                <div className="link-icons">
                  {link.map((l, index) => {
                    return (
                      <a
                        key={index}
                        href={`${link}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {icon.map((i, index) => {
                          return i;
                        })}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
}
