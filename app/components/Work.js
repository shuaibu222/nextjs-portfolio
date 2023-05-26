import React from 'react';
import { Poppins } from 'next/font/google';

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
    </article>
  );
}
