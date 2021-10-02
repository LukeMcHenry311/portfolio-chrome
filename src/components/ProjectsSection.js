import React from 'react';
import { Swiper } from 'swiper/react';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';

export default function ProjectsSection() {
  return (
    <div>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent work" />
        <div className="projects__allItems">
          <Swiper>
            {projects.map((project, index) => {
              if (index >= 5) return;
              return <div>This is our project</div>;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
