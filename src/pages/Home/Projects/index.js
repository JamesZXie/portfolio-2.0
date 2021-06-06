import React from 'react';
import './projects.scss';
import AustinCold from './Tiles/AustinCold';
import PowerGlove from './Tiles/PowerGlove';

const Projects = (props) => (
  <div className="projects">
    <AustinCold />
    <PowerGlove />
  </div>
);

export default Projects;
