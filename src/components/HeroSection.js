import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/herotwo.png';
import Button from './Button';
import PText from './PText';

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
        </div>
      </div>
    </div>
  );
}
