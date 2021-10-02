import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/herotwo.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const ImageStyle = styled.img`
  width: 500px;
  margin-left: 18.3vw;
`;

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Luke McHenry</span>
        </h1>
        <div className="hero__img">
          <ImageStyle src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <PText>
            I am looking for a career in web development. I enjoy learning new
            things and becoming the best programmer I can be.
          </PText>
          <Button
            btnLink="/projects"
            btnText="see my projects"
            outline={false}
          />
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/luke.mchenry/"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer"
                  >
                    IG
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/LukeMcHenry311"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+3852076265"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
