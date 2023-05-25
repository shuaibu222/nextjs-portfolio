'use client';

import React from 'react';
import { Poppins } from 'next/font/google';
import image from '../../assets/shuaib.jpg';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });

export default function About() {
  return (
    <article className="about" id="about">
      <section className="heading">
        <h1>About.</h1>
        <div className="about-desc">
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
            <span className="lg-shuaib">&quot;Shuaib</span> ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, debitis. Vitae recusandae
            culpa minus libero ipsam quis possimus. Omnis vero consequatur,
            molestias perferendis in adipisci, laborum temporibus provident est
            praesentium possimus aspernatur unde fuga ipsum inventore vel
            deserunt dolorem magni ut minus iusto impedit quia nesciunt
            tempore?&quot;.
          </p>
          <p>Here are my core skills that I have been working with:</p>
          <div className="list">
            <p>HTML</p>
            <p>CSS</p>
            <p>Sass</p>
            <p>Javascript</p>
            <p>react js</p>
            <p>next js</p>
            <p>jest</p>
            <p>debugging</p>
            <p>headless cms</p>
          </div>
        </div>
      </section>
    </article>
  );
}
