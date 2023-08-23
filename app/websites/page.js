'use client';

import React from 'react';
import getWebsites from '@/lib/getWebsites';
import Link from 'next/link';
import { TbExternalLink } from 'react-icons/tb';
import { FaGithub, FaReact, FaHtml5 } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { SiNextdotjs } from 'react-icons/si';
import urlFor from '@/sanity';

export default async function Home() {
  const websites = await getWebsites();

  return (
    <>
      <main className="web-site">
        <Link href="/">
          <BsArrowLeft className="back" />
        </Link>
        <section className="content">
          {websites.map((website) => {
            const {
              _id,
              site,
              tech,
              description,
              title,
              tooltip,
              github,
              image,
            } = website;
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
                    <h3 className='name'>{title}</h3>
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
                  <h3>{title}</h3>
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
            );
          })}
        </section>
      </main>
    </>
  );
}
