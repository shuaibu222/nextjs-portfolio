import { BsArrowDown } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="hero">
        <div className="first-row">
          <h1>Shuaib.</h1>
          <div className="engineer">
            <span></span>
            <p className="engineer-child">Frontend software engineer</p>
          </div>
        </div>
        <div className="second-row">
          <Link href="/" className="down">
            <BsArrowDown className="arrow-down" />
          </Link>
        </div>
      </main>
      <div className="sticky">
        <div className="email">
          <MdEmail className="email-icon" />
          <span></span>
          <Link href="/" className="shuaibu-email">
            shuaibuabdulkadir222@gmail.com
          </Link>
        </div>
        <div className="nav">
          <Link className="nav-items" href="/">
            About.
          </Link>

          <Link className="nav-items" href="/">
            Skills.
          </Link>

          <Link className="nav-items" href="/">
            Work.
          </Link>
        </div>
      </div>
    </>
  );
}
