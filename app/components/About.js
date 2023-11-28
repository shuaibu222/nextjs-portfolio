import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { MdPlayArrow } from 'react-icons/md';
import image from '../../assets/shuaibu.jpeg';

const poppins = Poppins({ subsets: ['latin'], weight: '900' });

export default async function About(data) {
  const datas = await data.data;

  return (
    <>
      {datas.map((biography) => {
        const { _id, bio, skills } = biography;
        return (
          <article className="about" id="about" key={_id}>
            <section className="heading">
              <h1>About.</h1>
              <div className="desc">
                <span></span>
                <p>personality</p>
                <span></span>
              </div>
            </section>
            <h2 className={`bg-name ${poppins.className}`}>ABOUT</h2>
            <section className="content">
              <div className="profile-img">
                <Image
                  src={image}
                  placeholder="blur"
                  style={{ width: '100%', height: 'auto' }}
                  alt="shuaib"
                />
              </div>
              <div className="tooltip">
                <h3>Shuaib.</h3>
                <div className="tooltip-desc">
                  <p>Innovative.</p>
                  <p>Creative.</p>
                </div>
              </div>
              <div className="biography">
                {bio.map((b, index) => {
                  return <p key={index}>{b}</p>;
                })}
                <section className="skills" id="skills">
                  <p>
                    Here are the technologies that I&apos;ve been working with:
                  </p>
                  <div className="list">
                    {skills.map((skill, index) => {
                      return (
                        <div className="div" key={index}>
                          <MdPlayArrow className="arrow-right" />
                          <p>{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </section>
          </article>
        );
      })}
    </>
  );
}
