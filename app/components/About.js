'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
import { MdPlayArrow } from 'react-icons/md';
import image from '../../assets/shuaib.jpg';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });

export default function About() {
  return (
    <article className="about" id="about">
      <section className="heading">
        <h1>About.</h1>
        <div className="desc">
          <span></span>
          <p>what&apos;s my personality?</p>
          <span></span>
        </div>
      </section>
      <h2 className={`bg-name ${poppins.className}`}>ABOUT.</h2>
      <section className="content">
        <div className="profile-img">
          <img src={image.src} alt="shuaib" />
        </div>
        <div className="tooltip">
          <h3>Shuaib.</h3>
          <div className="tooltip-desc">
            <p>Innovative.</p>
            <p>Creative.</p>
          </div>
        </div>
        <div className="biography">
          <p>
            Hello!, My name is Shuaibu Abdulkadir and I&apos;m a frontend
            enngineer that&apos;s having fun in building websites with beautiful
            and simple UI more espicially using my favourites i.e grid system
            and flexbox.{' '}
          </p>
          <p>
            {' '}
            When I was in school back in 2018 learning computer science as my
            Diploma I started interacting with coding initially the web part,
            which to me is very exciting. Gradually growing better until I jump
            into android development because of my final year project - At last
            - I succeed passing out in flying colors.
          </p>{' '}
          <p>
            When all things got a good start I rethink &quot;Why shouldn&apos;t
            I focus on the web part?&quot; for implementing that Idea I enroll
            into an online coding school <span>&quot;freeCodeCamp&quot;</span>{' '}
            going through the exercises, testing my self with many coding
            challenges until it became real i.e I&apos;m able to build and clone
            frontend of any desired website.
          </p>
          <section className="skills" id="skills">
            <p>Here are my core skills that I&apos;ve been working with:</p>
            <div className="list">
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>HTML</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>CSS</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>Sass</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>Javascript</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>react js</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>next js</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>headless cms</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>jest</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>debugging</p>
              </div>
              <div className="div">
                <MdPlayArrow className="arrow-right" />
                <p>testing</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
