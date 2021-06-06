import React from 'react';
import './projects.scss';
import AustinColdTile from './Tiles/AustinColdTile';
import PowerGloveTile from './Tiles/PowerGloveTile';

const Projects = (props) => (
  <div className="projects">
    <AustinColdTile />
    <PowerGloveTile />
  </div>
);

export default Projects;
