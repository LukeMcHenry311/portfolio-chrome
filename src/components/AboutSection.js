import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-image-one.png';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Please allow me to introduce myself 😛"
            heading="about me"
          />
          <PText>
            I am a University of Utah Coding Bootcamp student from Lehi, Utah. I
            enjoy challenging myself, and always try to improve my coding skills
            through creative thinking.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Projects" />
            <Button btnLink="./about" btnText="Read More" />
          </div>
        </div>
        <div className="aboutSection__Right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  );
}
