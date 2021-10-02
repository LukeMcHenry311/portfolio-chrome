import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <HeroSection />
      <AboutSection />
    </div>
  );
}
