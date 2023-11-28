import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });
const poppin = Poppins({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <article className='contact' id='contact'>
      <section className='heading'>
        <h1>Contact.</h1>
        <div className='desc'>
          <span></span>
          <p>reach me at!</p>
          <span></span>
        </div>
      </section>
      <h2 className={`bg-name ${poppins.className}`}>CONTACT</h2>
      <section className='email-wrapper'>
        <a href='mailto:shuaibuabdulkadir222@gmail.com' className='email'>
          <SiMinutemailer className='footer-img' />
        </a>
        <div className='f-icons'>
          <a
            href='https://www.github.com/shuaibu222'
            target='_blank'
            rel='norefferer noopener'
          >
            <FaGithub />
          </a>
          <a
            href='https://twitter.com/Shuaibu38311649'
            target='_blank'
            rel='norefferer noopener'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.linkedin.com/in/shuaibu-abdulkadir-b60176253/'
            target='_blank'
            rel='norefferer noopener'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </section>

      <div className='footer-desc'>
        <p>
          Built with{' '}
          <a
            href='https://www.nextjs.org'
            target='_blank'
            rel='noreferrer noopener'
          >
            Nextjs
          </a>{' '}
          and{' '}
          <a
            href='https://www.sanity.io'
            target='_blank'
            rel='noreferrer noopener'
          >
            Sanity
          </a>
          .
        </p>
        <p>&copy; Shuaib. 2023</p>
      </div>
    </article>
  );
}
