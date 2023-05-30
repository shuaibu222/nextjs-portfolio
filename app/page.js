import getAbout from '@/lib/getAbout';
import getProjects from '@/lib/getProjects';
import { BsArrowDown } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImHome } from 'react-icons/im';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import Link from 'next/link';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export default async function Home() {
  const aboutData = getAbout();
  const projectsData = getProjects();

  const data = await aboutData;

  const name = data.map((name) => name.myname);

  return (
    <>
      <section className="hero" id="hero">
        <div className="first-row">
          <h1>{name}</h1>
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
            <Link href="#contact" className="nav-items">
              Contact.
            </Link>
          </div>
        </div>
        <Link href="#header" className="home-p">
          <ImHome />
        </Link>
      </section>
      {/* about section */}
      <About data={data} />

      {/* work section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Work promise={projectsData} />
      </Suspense>

      {/* footer section */}
      <Footer />
    </>
  );
}
