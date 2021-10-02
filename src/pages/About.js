import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-image-two.png';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Luke McHenry</span>
            </p>
            <h2 className="about__heading">A Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from Lehi, Utah. A fast growing state in America. I've
                always enjoyed art and design, I feel that incorporating modern
                and unique style idea's to a website can make all the difference
                of a website.
                <br /> <br />I started coding 6 months ago. I believe that
                Coding is an art. I love impressing both peers and
                non-programmers with what i write.
                <br /> <br />
                My vision is to become very proficient in react, in the long
                term I want to get a entry-level job programming. In 5 years I
                see myself starting my own website.
              </PText>
            </div>
            <Button btnText="Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="Luke McHenry" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
