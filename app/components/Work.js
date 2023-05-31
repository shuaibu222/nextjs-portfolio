import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { SiNextdotjs } from 'react-icons/si';
import urlFor from '@/sanity';

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
          const {
            tooltip,
            title,
            _id,
            link,
            description,
            tech,
            image,
            github,
            site,
          } = work;
          return (
            <div className="p-wrapper" key={_id}>
              <div className="project">
                <div className="p-img-p right">
                  <img
                    src={urlFor(image).url()}
                    alt="app-img"
                    className="p-img"
                  />
                </div>
                <div className="project-desc right">
                  <h2>{tooltip}</h2>
                  <h3>
                    <Link href={`${link}`} className="name">
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
                      href={`${github}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={`${site}`}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <TbExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-desc-child right">
                <h2>{tooltip}</h2>
                <h3>
                  <Link href={`${link}`} className="name">
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
                    href={`${github}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                  </a>
                  <a href={`${site}`} target="_blank" rel="noreferrer noopener">
                    <TbExternalLink />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
}
