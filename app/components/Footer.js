import React from 'react';
import { SiMinutemailer } from 'react-icons/si';

export default function Footer() {
  return (
    <section className="footer">
      <a href="https://www.nextjs.org" className="email">
        <SiMinutemailer className="footer-img" />
      </a>
      <div className="footer-desc">
        <p>
          Built with{' '}
          <a
            href="https://www.nextjs.org"
            target="_blank"
            rel="noreferrer noopener"
          >
            Nextjs
          </a>{' '}
          and{' '}
          <a
            href="https://www.sanity.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sanity
          </a>
          .
        </p>
        <p>&copy; Shuaib. 2023</p>
      </div>
    </section>
  );
}
