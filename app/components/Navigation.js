import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TfiTwitter } from 'react-icons/tfi';
import Link from 'next/link';

export default function navigation() {
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
          <TfiTwitter />
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
