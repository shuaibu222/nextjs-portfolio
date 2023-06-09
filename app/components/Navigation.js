'use client';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { React, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header id="header">
      <Link href="/" className="logo">
        S.
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <a
          href="https://www.github.com/shuaibu222"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/Shuaibu38311649"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/shuaibu-abdulkadir-b60176253/"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
}
