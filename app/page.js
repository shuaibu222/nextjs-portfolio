import { BsArrowDown } from 'react-icons/bs';
import Link from 'next/link';
import background from '../assets/logo-removebg-preview.png';

export default function Home() {
  return (
    <main
      // style={{
      //   backgroundImage: `linear-gradient(
      //     rgba(0, 0, 0, 0.9),
      //     rgba(0, 0, 0, 0.9)
      //   ), url(${background.src})`,
      //   width: '100%',
      //   height: '100%',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center center',
      //   minHeight: '80vh',
      // }}
      className="hero"
    >
      <div className="first-row">
        <h1>Shuaib.</h1>
        <div className="engineer">
          <span></span>
          <p className="engineer-child">Frontend software engineer</p>
        </div>
      </div>
      <div className="second-row">
        <div className="testimonial">
          <div className="creative">
            <span></span>
            <p>creative</p>
          </div>
          <div className="innovative">
            <span></span>
            <p>innovative</p>
          </div>
        </div>
        <Link href="/" className="down">
          <BsArrowDown className="arrow-down" />
        </Link>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  );
}
