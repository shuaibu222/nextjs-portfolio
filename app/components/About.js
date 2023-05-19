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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            debitis. Vitae recusandae culpa minus libero ipsam quis possimus.
            Omnis vero consequatur, molestias perferendis in adipisci, laborum
            temporibus provident est praesentium possimus aspernatur unde fuga
            ipsum inventore vel deserunt dolorem magni ut minus iusto impedit
            quia nesciunt tempore? Culpa nihil possimus, esse aperiam quos
            consectetur harum, iste dolorum eveniet numquam soluta recusandae
            vero molestiae id iure, magnam labore placeat illo! A quam quisquam
            vel nam adipisci est voluptates non, temporibus iure consequuntur
            officiis incidunt doloremque atque. Ex quo eos dolorem tempora
            cupiditate quasi laborum praesentium, assumenda asperiores corporis
            nam, ad animi!
          </p>
        </div>
      </section>
    </article>
  );
}
