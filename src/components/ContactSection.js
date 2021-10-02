import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import styled from 'styled-components';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact Me" subheading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+3852076265" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="LukeMcHenry311@gmail.com"
            />
            <ContactInfoItem text="Lehi, Utah." />
          </div>
          <div className="right">contact form</div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
