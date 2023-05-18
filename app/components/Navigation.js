'use client';

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { React, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          S.
        </Link>
      </nav>
      <div className="social-icons">
        <a
          href="https://www.github.com"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="norefferer noopener"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
}
