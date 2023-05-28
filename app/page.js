'use client';

import { BsArrowDown } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImHome } from 'react-icons/im';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import About from './components/About';
import Work from './components/Work';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export default function Home() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="first-row">
          <h1>Shuaib.</h1>
          <div className="engineer">
            <span></span>
            <p className="engineer-child">Frontend software engineer</p>
          </div>
          <a href="https://www.google.com" className="resume">
            My resume
          </a>
        </div>
        <div className="second-row">
          <Link href="#about" className="down">
            <BsArrowDown className="arrow-down" />
          </Link>
        </div>
        <div className="sticky">
          <div className="email">
            <MdEmail className="email-icon" />
            <span></span>
            <Link href="/" className="shuaibu-email">
              shuaibuabdulkadir222@gmail.com
            </Link>
          </div>
          <div className="nav">
            <Link className="nav-items" href="#about">
              About.
            </Link>
            <Link className="nav-items" href="#work">
              Work.
            </Link>
          </div>
        </div>
        <Link href="#header" className="home-p">
          <ImHome />
        </Link>
      </section>
      {/* about section */}
      <About />

      {/* work section */}
      <Work />
    </>
  );
}
