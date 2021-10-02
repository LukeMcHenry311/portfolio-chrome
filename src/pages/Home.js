import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
    </div>
  );
}
